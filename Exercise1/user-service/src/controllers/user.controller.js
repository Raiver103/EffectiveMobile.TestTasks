const userService = require("../services/user.service");

class UserController {
  async createUser(req, res) { 
    const user = await userService.createUser(req.body);
    return res.json(user);
  }

  async updateUser(req, res) {
    const user = await userService.updateUser(req.params.id, req.body);
    return res.json(user);
  }

  async getUsers(req, res) {
    const users = await userService.getUsers();
    return res.json(users);
  }
}

module.exports = new UserController();