Object.getOwnPropertyDescriptor(Math, "PI");

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai = {
  name: "chai",
  price: "100",
  isAvailable: true,
  otherChai: function () {
    console.log("chai nahi bani");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, "name", {
  //   writable: false,
  enumerable: true,
});

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
  if (typeof value != "function") {
    console.log(`${key} : ${value}`);
  }
}
