function a() {
  return new Promise((resolve, reject) => {
    console.log("a");
    resolve();
  });
}

function b() {
  return new Promise((resolve, reject) => {
    console.log("b");
    resolve();
  });
}

function c() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("c");
      resolve();
    }, 3000);
  });
}

function d() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("d");
      resolve();
    }, 0);
  });
}

function e() {
  return new Promise((resolve, reject) => {
    console.log("e");
    resolve();
  });
}

a()
  .then((res) => res)
  .then(() => b())
  .then(() => c())
  .then(() => d())
  .then(() => e());
