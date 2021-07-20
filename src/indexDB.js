async function deleteDB(name) {
  return new Promise((resolve) => {
    const request = window.indexedDB.deleteDatabase(name);
    request.onsuccess = resolve;
    request.onerror = resolve;
  });
}

async function openDB(name, num) {
  const request = window.indexedDB.open(name);
  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    const objStore = db.createObjectStore("docs", { autoIncrement: true });
    objStore.createIndex("name", "name", { unique: false });
    objStore.transaction.oncomplete = () => {
      const trans = db.transaction(["docs"], "readwrite");
      trans.onerror = (event) => {
        console.error(event);
      };
      const docs = trans.objectStore("docs");
      for (let i = 0; i < num; i++) {
        docs.add({
          name: chance.word(),
          value: chance.sentence(),
        });
      }

      console.log("CREATE DB", name, num);
      trans.oncomplete = () => {
        console.log("Trans Done");
      };
    };
  };

  return new Promise((resolve, reject) => {
    request.onerror = reject;
    request.onsuccess = (ev) => {
      resolve(ev.target.result);
    };
  });
}

let db1K;
let db100K;

async function initDB() {
  db1K = await openDB("Doc1K", 1000);
  db100K = await openDB("Doc100K", 1e5);
}

async function searchIn1K() {
  const objectStore = db1K.transaction(["docs"]).objectStore("docs");
  const result = objectStore.openCursor();
  let i = 0;
  return new Promise((resolve) => {
    result.onsuccess = (event) => {
      const cursor = event.target.result;
      if (cursor) {
        i++;
        if (cursor.value.value.includes("va")) {
          // console.log(1);
        }

        cursor.continue();
      } else {
        console.log(i);
        resolve();
      }
    };
  });
}

async function clearDB() {
  await deleteDB("Doc1K");
  await deleteDB("Doc100K");
}

async function searchIn100K() {
  const objectStore = db100K.transaction(["docs"]).objectStore("docs");
  const result = objectStore.openCursor();
  let i = 0;
  return new Promise((resolve) => {
    result.onsuccess = (event) => {
      const cursor = event.target.result;
      if (cursor) {
        i++;
        if (cursor.value.value.includes("va")) {
          // console.log(1);
        }

        cursor.continue();
      } else {
        console.log(i);
        resolve();
      }
    };
  });
}

async function insert(db, num = 1) {
  const objStore = db.transaction("docs", "readwrite").objectStore("docs");
  const req = [];

  for (let i = 0; i < num; i++) {
    const request = objStore.add({
      name: "name",
      value: Math.random().toString(),
    });
    req.push(
      new Promise((r) => {
        request.onsuccess = r;
      })
    );
  }

  await Promise.all(req);
}

async function find(db) {
  const objStore = db.transaction("docs").objectStore("docs");
  const request = objStore.get(12);
  return new Promise((r, reject) => {
    request.onsuccess = (event) => {
      r(event.result);
    };
    request.onerror = (event) => {
      reject(event.result);
    };
  });
}
