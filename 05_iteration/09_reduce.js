const myNum = [1, 2, 3];
// const myTotal = myNum.reduce(function (acc, curval) {
//   console.log(`acc:${acc} and curval is ${curval}`);
//   return acc + curval;
// }, 0);

const myTotal = myNum.reduce((acc, curval) => acc + curval, 0);
console.log(myTotal);
