async function getWasmCallback(path, func = "main") {
  const res = await fetch(path);
  const bytes = await res.arrayBuffer();
  const { instance } = await WebAssembly.instantiate(bytes);
  return instance.exports[func];
}

async function getCallbacks() {
  const forWasm = await getWasmCallback("./wasm/forLoop.wasm", "forLoop");
  return [
    {
      name: "JS ForLoop 1M",
      callback: () => {
        for (let i = 0; i < 1e6; i++) {}
      },
    },
    {
      name: "WASM ForLoop 1M",
      callback: () => {
        forWasm(1e6);
      },
    },
    {
      name: "Normal Add + Assignment 1M",
      callback: () => {
        for (let i = 0; i < 1e6; i++) {
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
          i++;
        }
      },
    },
    {
      name: "Create Callback to Add 1M",
      callback: () => {
        for (let i = 0; i < 1e6; ) {
          let callback = () => {
            i = i + 1;
          };
          callback();
        }
      },
      sub: "JS ForLoop 1M",
    },
    {
      name: "Create ID Callback 1M",
      callback: () => {
        for (let i = 0; i < 1e6; ) {
          let callback = (x) => x;
          i = callback(i) + 1;
        }
      },
      sub: "JS ForLoop 1M",
    },
    {
      name: "JS Recursive Fib 27",
      callback: () => {
        function fib(n) {
          if (n <= 2) {
            return 1;
          }

          return fib(n - 1) + fib(n - 2);
        }

        fib(27);
      },
    },
    {
      name: "WASM Recursive Fib 27",
      callback: await getWasmCallback("./wasm/fib27.wasm"),
    },
  ];
}
