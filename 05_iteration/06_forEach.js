const coding = ["js", "ruby", "java", "python"];

// 1st way to write call back
// coding.forEach(function (item) {
//   console.log(item);
// });

// 2nd way to write callback function

coding.forEach((item) => {
  //   console.log(item);
});

// 3rd way
// function printme(item) {
//   console.log(item);
// }

// coding.forEach(printme);
coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

const mycoding = [
  { languageName: "javascript", languageFileName: "js" },
  { languageName: "java", languageFileName: "java" },
  { languageName: "pythan", languageFileName: "py" },
];

mycoding.forEach((item) => {
  //   console.log(item.languageFileName);
});
