//const tinderUser = new Object()
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Amritf";
tinderUser.isLoggedin = false;

// console.log(tinderUser);

const regulerUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "amrit",
      lastname: "pal",
    },
  },
};

// console.log(regulerUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// const obj4 = Object.assign({}, obj1, obj2, obj3);

const obj4 = { ...obj1, ...obj2 }; // object spree
// console.log(obj4);

const users = [
  {
    id: "abc",
    email: "amritp662",
  },
  {
    id: 2,
    email: "amritp662",
  },
  {
    id: 3,
    email: "amritp662",
  },
  {
    id: 4,
    email: "amritp662",
  },
  {
    id: 5,
    email: "amritp662",
  },
];

users[1].email;
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));
