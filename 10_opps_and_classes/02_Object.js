function multipleBy5(num) {
  return num * 5;
}
multipleBy5.power = 2;
// console.log(multipleBy5(5));

// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

function createUser(username, price) {
  this.username = username;
  this.price = price;
}

createUser.prototype.incrimentPrice = function () {
  this.price++;
  console.log(this.price);
};

createUser.prototype.printme = function () {
  console.log(`name is ${this.username} price of tea is ${this.price}`);
};

const user1 = new createUser("amrit", 100);
const user2 = new createUser("amrit", 200);
user1.printme();
user1.incrimentPrice();
