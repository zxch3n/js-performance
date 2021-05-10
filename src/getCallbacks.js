async function getWasmCallback(path, func = "main") {
  const res = await fetch(path);
  const bytes = await res.arrayBuffer();
  const { instance } = await WebAssembly.instantiate(bytes);
  return instance.exports[func];
}

async function getCallbacks() {
  const forWasm = await getWasmCallback("/src/wasm/forLoop.wasm", "forLoop");
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
      callback: await getWasmCallback("/src/wasm/fib27.wasm"),
    },
    {
      name: "Create Object with 10000 elements",
      callback: () => {
        const newObj = { ...objWith10000Elements };
      },
    },
    {
      name: "Create Object with 10 elements 1K",
      callback: () => {
        for (let i = 0; i < 1000; i++) {
          const newObj = { ...objWith10Elements };
        }
      },
    },
    {
      name: "Create Object with 20 elements 1K",
      callback: () => {
        for (let i = 0; i < 1000; i++) {
          const newObj = { ...objWith20Elements };
        }
      },
    },
    {
      name: "Create Array with 10000 elements",
      callback: () => {
        const newObj = [...array10000];
      },
    },
  ];
}

const objWith10Elements = {};
for (let i = 0; i < 10; i++) {
  objWith10Elements["a" + i] = {};
}

const objWith20Elements = {};
for (let i = 0; i < 20; i++) {
  objWith20Elements["a" + i] = {};
}

const objWith10000Elements = {};
for (let i = 0; i < 10000; i++) {
  objWith10000Elements["a" + i] = {};
}

const array10000 = new Array(10000).fill(0).map(() => Math.random());
