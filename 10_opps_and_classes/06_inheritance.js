class Student {
  constructor(username) {
    this.username = username;
  }
  logme() {
    console.log(`userName is  ${this.username}`);
  }
}
class Teacher extends Student {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(` A course is added by ${this.username}`);
  }
}
const chai = new Teacher("amrit", "amritemail.com", "1234");
const masalaChai = new Student("manish");
chai.logme();
chai.addCourse();

masalaChai.logme();
// masalaChai.addCourse();
console.log(chai instanceof Student);
console.log(chai instanceof Teacher);
