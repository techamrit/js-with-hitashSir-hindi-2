// 1 singleton
//object.create

//2 object literals

const mySymbol = Symbol("Key1");

const jsUser = {
  name: "amrit",
  "full name": "amrit pal", // wrong way ""
  [mySymbol]: "mykey1",
  age: 23,
  address: "ghaziabad",
  email: "amritp662@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "saturaday"],
};
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);

jsUser.email = "amritpg662@gmail.com";
// Object.freeze(jsUser);
jsUser.email = "amrirtie@sdjfksj.com";
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("hello js user ");
};
console.log(jsUser.greeting());
jsUser.greetingTwo = function () {
  console.log(`hello js user, ${this.name}`);
};
console.log(jsUser.greetingTwo());
