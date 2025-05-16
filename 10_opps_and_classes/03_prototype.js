let muname = "amrit    ";

const myHeros = ["thor", "spiderMan"];

const heroPower = {
  thor: "hammer",
  spiderMan: "sling",

  getSpiderPower: function () {
    console.log(`spidy power is ${this.spiderMan}`);
  },
};

Object.prototype.amrit = function () {
  //   console.log(`amrit is present here`);
};
// heroPower.amrit();

// myHeros.amrit();

Array.prototype.heyAmrit = function () {
  //   console.log(`hitesh says hello`);
};
myHeros.amrit();
myHeros.heyAmrit();
// heroPower.heyAmrit();
//  inheritance

const user = {
  name: "amrit",
  email: " amritP662@gmail.com",
};

const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: " Js assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};
Teacher.__proto__ = user;
//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

const anotherName = "manish pal    ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is : ${this.trim().length}`);
};
anotherName.trueLength();
"amrit    ".trueLength();
"amrit".trueLength();
