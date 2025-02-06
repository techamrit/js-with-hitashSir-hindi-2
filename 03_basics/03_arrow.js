// this meaning is crunt contax

const user = {
  username: "amrit",
  price: 2000,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website  `);
    console.log(this);
  },
};
// user.welcomeMessage();
// user.username = "manish";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   console.log(this);
// }
// chai();

// const chai = () => {
//   let username = "hitesh";
//   console.log(this.username);
// };

// chai();

// explishit return
const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(2, 4));

// emplishit return

// const addTwoNo = (num1, num2) => num1 + num2;
const addTwoNo = (num1, num2) => ({ username: "amrit" });
console.log(addTwoNo(4, 4));
