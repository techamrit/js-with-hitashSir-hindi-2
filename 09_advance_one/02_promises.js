const promiseOne = new Promise(function (resolv, reject) {
  // do an async task
  //db calls, cryptography, network

  setTimeout(function () {
    console.log("async task is compelets");
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});
