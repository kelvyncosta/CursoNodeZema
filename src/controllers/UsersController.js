import users from '../fakes/users.json';

class UsersController {
  async index(req, res) {
    return res.json(users);
  }

  async create(req, res) {
    const { name, email } = req.body;

    const user = {
      name,
      email,
    };

    return res.json(user);
  }
}

export default UsersController;
