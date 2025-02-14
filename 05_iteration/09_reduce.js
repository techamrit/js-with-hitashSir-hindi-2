const myNum = [1, 2, 3];
// const myTotal = myNum.reduce(function (acc, curval) {
//   console.log(`acc:${acc} and curval is ${curval}`);
//   return acc + curval;
// }, 0);

const myTotal = myNum.reduce((acc, curval) => acc + curval, 0);
// console.log(myTotal);

const course = [
  { course: "java", price: 199 },
  { course: "javascript", price: 299 },
  { course: "css", price: 299 },
  { course: "html", price: 499 },
];
const total = course.reduce((acc, item) => acc + item.price, 0);
console.log(total);
