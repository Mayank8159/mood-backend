import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const createToken = (userId) =>
  jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });

export const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = createToken(user._id);
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ error: 'Email already exists' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = createToken(user._id);
  res.json({ token });
};