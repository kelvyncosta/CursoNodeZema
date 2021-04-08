import jwt from 'jsonwebtoken';
import users from '../fakes/users.json';

class AuthController {
  async create(req, res) {
    const { email, password } = req.body;

    const user = users.find(item => item.email === email);

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    const token = jwt.sign({ id: user.id }, 'secret', {
      expiresIn: '1d',
    });

    return res.json({
      user,
      token,
    });
  }
}

export default AuthController;
