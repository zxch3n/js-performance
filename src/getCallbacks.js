async function getWasmCallback(path, func = "main") {
  const res = await fetch(path);
  const bytes = await res.arrayBuffer();
  const { instance } = await WebAssembly.instantiate(bytes);
  return instance.exports[func];
}

async function getCallbacks() {
  const forWasm = await getWasmCallback("./src/wasm/forLoop.wasm", "forLoop");
  return [
    {
      name: "Iterating array with 10000 nodes",
      callback: () => {
        let sum = 0;
        for (const item of array10000) {
          sum += item;
        }

        return sum;
      },
    },
    {
      name: "Iterating tree with 10000 nodes",
      callback: () => {
        let sum = 0;
        function iter(node) {
          sum += node.value;
          node.children.forEach(iter);
        }

        iter(tree10000);
        return sum;
      },
    },
    {
      name: "Iterating tree with 50000 nodes",
      callback: () => {
        let sum = 0;
        function iter(node) {
          sum += node.value;
          node.children.forEach(iter);
        }

        iter(tree50000);
        return sum;
      },
    },
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
      name: "Normal Add + Assignment",
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
      postProcess: (x) => x / 1e6,
    },
    {
      name: "Create Callback to Add",
      callback: () => {
        for (let i = 0; i < 1e6; ) {
          let callback = () => {
            i = i + 1;
          };
          callback();
        }
      },
      postProcess: (x, map) => {
        return (x - map["JS ForLoop 1M"]) / 1e6;
      },
    },
    {
      name: "Create ID Callback",
      callback: () => {
        for (let i = 0; i < 1e6; ) {
          let callback = (x) => x;
          i = callback(i) + 1;
        }
      },
      postProcess: (x, map) => {
        return (x - map["JS ForLoop 1M"]) / 1e6;
      },
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
      callback: await getWasmCallback("./src/wasm/fib27.wasm"),
    },
    {
      name: "Create Object with 10000 elements",
      callback: () => {
        const newObj = { ...objWith10000Elements };
      },
    },
    {
      name: "Create Object with 10 elements",
      callback: () => {
        for (let i = 0; i < 1000; i++) {
          const newObj = { ...objWith10Elements };
        }
      },
      postProcess: (x) => x / 1000,
    },
    {
      name: "Create Object with 20 elements",
      callback: () => {
        for (let i = 0; i < 1000; i++) {
          const newObj = { ...objWith20Elements };
        }
      },
      postProcess: (x) => x / 1000,
    },
    {
      name: "Create Array with 10000 elements",
      callback: () => {
        const newObj = [...array10000];
      },
    },
    {
      name: "Create Array with 10 elements",
      callback: () => {
        for (let i = 0; i < 1000; i++) {
          const newObj = [...array10];
        }
      },
      postProcess: (x) => x / 1000,
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
const array10 = new Array(10).fill(0).map(() => Math.random());

function createTreeNode(children) {
  return { value: Math.random(), children };
}
function createTree(n) {
  const childNum = n - 1;
  if (n <= 5) {
    return createTreeNode(
      new Array(childNum).fill(0).map(() => createTreeNode([]))
    );
  }

  const leftN = Math.floor(childNum / 2);
  const rightN = childNum - leftN;
  const left = createTree(leftN);
  const right = createTree(rightN);
  return createTreeNode([left, right]);
}

const tree10000 = createTree(10000);
const tree50000 = createTree(50000);
