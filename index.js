function createOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order created");
      resolve(100);
    }, 3000);
  });
}

function makePayment(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Id ${id} , proceed for payment`);
      resolve("success");
    }, 2000);
  });
}

function finalStatus(flag) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(flag);
      resolve();
    }, 1000);
  });
}

createOrder()
  .then((res) => res)
  .then((res) => makePayment(res))
  .then((res) => finalStatus(res));
