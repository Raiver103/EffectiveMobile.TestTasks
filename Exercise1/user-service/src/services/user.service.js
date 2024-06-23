const { getRepository } = require("typeorm");
const User = require("../models/user.model");
const axios = require("axios");

class UserService {
  async createUser(userData) {
    const userRepository = getRepository(User);
    const user = userRepository.create(userData);
    await userRepository.save(user);
    await axios.post("http://localhost:2001/user-activity", { action: "create", user });
    return user;
  }

  async updateUser(id, userData) { 
    const userRepository = getRepository(User);
    await userRepository.update(id, userData);
    const user = await userRepository.findOne({ where: { id } });
    await axios.post("http://localhost:2001/user-activity", { action: "update", user });
    return user;
  }

  async getUsers() {
    const userRepository = getRepository(User);
    return userRepository.find();
  }
}

module.exports = new UserService();