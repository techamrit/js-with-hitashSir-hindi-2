class User {
  constructor(usrname) {
    this.username = usrname;
  }
  logMe() {
    console.log(`userName is ${this.username}`);
  }
  static createId() {
    return `"123"`;
  }
}

class Teacher extends User {
  constructor(usrname, email) {
    super(usrname);
    this.email = email;
  }
}

const userName = new User("amrit");
userName.logMe();
// console.log(userName.createId());

const teacher = new Teacher("manish", "amritp662@gmail.com");
teacher.logMe();
// console.log(teacher.createId());
