//immediatley invoked function expressions (IIFE)

(function chai() {
  //named function
  console.log(`named function`);
})();

((name) => {
  console.log(`${name}`);
})("amrit");
