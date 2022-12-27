import user from '../model/userSchema.js';


const getUsers = async (req, res) => {
  const users = await user.find();

  if (!users) return res.status(204).json({ 'message': 'No user found' })
  res.json(users)
}


export default { getUsers }