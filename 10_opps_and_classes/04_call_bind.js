function setUserName(UserName) {
  this.UserName = UserName;
  console.log("called");
}

function createUserName(userName, email, password) {
  setUserName.call(this, userName);
  this.email = email;
  this.password = password;
}
const user1 = new createUserName("amrit", "amritp662@gmail.com)", "2123");
console.log(user1);
