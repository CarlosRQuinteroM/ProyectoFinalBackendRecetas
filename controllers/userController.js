const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

class Client {
  constructor() {}

  async createUser(user) {
    user.password = await bcrypt.hash(user.password, 10);
    return User.create(user);
  }
  async logMe(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Email does not exist");
    }
    if (!(await bcrypt.compare(password, user.password))) {
      throw new Error("Password incorrect");
    }

    const payload = {
      userId: user.id,
      role: user.role,
      tokenCreationDate: new Date(),
    };

    const token = jwt.sign(payload, secret);
    return { token, user };
  }

  async findAllUsers() {
    return User.find();
  }

  async modifyUser(data) {
    return User.findByIdAndUpdate(
      //Were
      { _id: data.id },
      //Data Changes
      {
        name: data.name,
        lastName: data.lastName,
        imgUser: data.imgUser,
        phoneNumber: data.phoneNumber,
      },
    );
  }
  async deleteUser(data) {
    return User.findByIdAndRemove({ _id: data.id });
  }
}

let userController = new Client();
module.exports = userController;
