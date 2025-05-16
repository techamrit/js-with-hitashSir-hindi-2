const user = {
  username: "amrit",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("got user details");
    // console.log(`got user details ${this.username}`);
    // console.log(this);
  },
};
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function users(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  // this.getUserDetails = function () {
  //   console.log(`got user details ${this.username}`);
  //   console.log(this);
  // };
  return this;
}

const userOne = users("amrit", 8, true);
const usertwo = users("amrit", 8, true);
console.log(userOne);
console.log(usertwo);
// step one is create new object
// step two is construct function call with help of new keyword
// this keyword add argument inject
// show ho jata hai
