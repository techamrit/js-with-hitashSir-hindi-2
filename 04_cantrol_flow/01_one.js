// if

// const temperature = 40;

// if (temperature === 40) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// <,>,<= ,>=,==,!=, ===,

// const sscore = 200;
// if (sscore > 100) {
//   const power = "fly";
//   console.log(`user power: ${power}`);
// }

// short hand notation but this is bad practice
const balance = 1000;
// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = false;
if (userLoggedIn && debitCard && 2 == 3) {
  console.log("allow t by course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("user logged in");
}
