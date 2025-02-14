// const coding = ["javaScript", "java", "python", "react"];

// const value = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });
// console.log(value);

// filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8];

// const newNums = myNums.filter((num) => {
//   return num > 4;
// });
// console.log(newNums);

// forEach
const newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});
// console.log(newNums);

const allbook = [
  { title: "book one", genre: "history", publish: "1986" },
  { title: "book two", genre: "cruunt", publish: "1987" },
  { title: "book three", genre: "history", publish: "1999" },
  { title: "book wellbeing", genre: "guidence", publish: "2023" },
  { title: "bw eductaion", genre: "disruptive Technologies", publish: "2024" },
  { title: "bw well being", genre: "you are what you think", publish: "2024" },
  { title: "aerocity ", genre: "travel", publish: "2023" },
  { title: "bw hotelier", genre: "driving ew", publish: "2024" },
];

let userbook = allbook.filter((book) => book.genre === "history");
userbook = allbook.filter((bk) => {
  return bk.title === "bw eductaion";
});

userbook = allbook.filter((books) => {
  return books.publish === "2023" && books.genre === "travel";
});
console.log(userbook);
