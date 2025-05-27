const user = {
  _email: "amrit@gmail.com",
  _password: " 13455",

  get email() {
    return this._email.toUpperCase();
  },
  set email(emailValue) {
    this._email = emailValue;
  },
};
const tea = Object.create(user);
console.log(tea.email);
