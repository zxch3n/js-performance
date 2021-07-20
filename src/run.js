function wrap(cb) {
  try {
    eval(`%NeverOptimizeFunction(cb)`);
  } catch (e) {
    // console.error(e);
  }
}

const target = document.querySelector("ul");
function print(s) {
  const li = document.createElement("li");
  target.appendChild(li);
  li.textContent = s;
}

const progress = document.querySelector("#progress");

function getTime(ms, name = "ms") {
  if (ms > 1) {
    return `${ms.toFixed(2)}`.padEnd(10, " ") + name;
  }

  if (name === "ms") {
    return getTime(ms * 1000, "us");
  }

  if (name === "us") {
    return getTime(ms * 1000, "ns");
  }

  if (name === "ns") {
    return getTime(ms * 1000, "ps");
  }

  return `${ms}`.padEnd(10, " ") + name;
}

async function run() {
  const callbacks = await getCallbacks();

  const map = {};
  let count = 0;
  for (const { callback, name, postProcess } of callbacks) {
    const startTime = performance.now();
    let times = 0;
    wrap(callback);
    console.log(name);
    while (performance.now() - startTime < 500) {
      await callback();
      times++;
    }

    console.log("edn");
    let avg = (performance.now() - startTime) / times;
    if (postProcess) {
      avg = postProcess(avg, map);
    }

    map[name] = avg;
    let output = `[${name.padEnd(46, " ")}]: ${getTime(avg)}`;
    print(output);
    count++;
    progress.textContent = `${((count / callbacks.length) * 100).toFixed(1)}%`;
    await new Promise((r) => setTimeout(r));
  }

  const div = document.querySelector("#calc");
  div.remove();
}

initDB().then(run);
