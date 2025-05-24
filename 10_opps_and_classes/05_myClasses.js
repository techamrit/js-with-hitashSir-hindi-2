// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptpassword() {
//     return `${this.password}abc`;
//   }
//   getUserName() {
//     return `${this.username.toUpperCase()} is the username`;
//   }
// }
// const chai = new User("amrit", "amritemail.com", "123456");
// console.log(chai.encryptpassword());
// console.log(chai.getUserName());

// bhind the scean

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
User.prototype.password1 = function () {
  return `${this.password}abc`;
};
User.prototype.userName = function () {
  return `${this.username.toUpperCase()} this is username`;
};
const tea = new User("amritPal", "amritPal@gmail.com", "123456");
console.log(tea.password1());
