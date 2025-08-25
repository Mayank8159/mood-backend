import Mood from '../models/Mood.js';
import analyzeMood from '../utils/analyzeMood.js';

export const submitMood = async (req, res) => {
  const { text } = req.body;
  const mood = await analyzeMood(text);
  const entry = await Mood.create({ userId: req.userId, text, mood });
  res.status(201).json(entry);
};

export const getMoods = async (req, res) => {
  const moods = await Mood.find({ userId: req.userId }).sort({ createdAt: -1 });
  res.json(moods);
};