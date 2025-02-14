const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let mynum = myNumers.map((num) => {
//   return num + 10;
// });
// mynum = myNumers.forEach((num) => {
//   return num + 10;
// });

const newNums = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => 50);

console.log(newNums);
