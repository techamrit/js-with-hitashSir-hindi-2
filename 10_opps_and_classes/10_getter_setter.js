class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(emailvalue) {
    this._email = emailvalue;
  }
  get password() {
    return `${this._password.toUpperCase()}amrit`;
  }
  set password(value) {
    this._password = value.toUpperCase();
  }
}
const amrit = new User("amrit@gmail.com", "123456");
console.log(amrit.password);
console.log(amrit.email);
