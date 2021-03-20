let user = {
  "name": "Jordan Portz",
  "address": "123 Fake St.",
  "phone": "555-555-5555",
  "email": "jordanportz@emaildomain.com",
};

module.exports = {
  getUser() {
    return user;
  },
  updateUser(u) {
    user = u;
  }
};