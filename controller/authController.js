import user from '../model/userSchema.js'
import bcrypt from 'bcrypt';

const handleLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ 'message': 'username and password are needed'})

  const userFound = await user.findOne({ 'username': username }).exec();
  if (!userFound) return res.sendStatus(401); //! Unathourized;

  const matchPassword = await bcrypt.compare(password, userFound.password);
  if (!matchPassword) {
    return res.sendStatus(401);
  }
  res.status(204).json({ 'message': 'Logged in'})
}

export default { handleLogin }