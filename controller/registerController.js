import user from '../model/userSchema.js';
import bcrypt from 'bcrypt';

const handleNewUser = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password ) return res.json({ 'message': 'username and password are needed'})

  const checkDuplicate = await user.findOne({ username: username }).exec();
  if (checkDuplicate) return res.sendStatus(409) //! Conflict

  try {
    const hashPassword = await bcrypt.hash(password, 10)
    const result = await user.create( {
      username: username,
      password: hashPassword
    })
    console.log(result)
    res.status(201).json({ 'message': `New user ${username} is created`})
  } catch (error) {
    res.status(500).json({ 'message': `${error.message}`})
  }
}

export default handleNewUser