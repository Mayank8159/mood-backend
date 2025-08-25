import mongoose from 'mongoose';

const moodSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: String,
  mood: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Mood', moodSchema);