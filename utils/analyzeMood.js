import axios from 'axios';

export default async function analyzeMood(text) {
  const prompt = `Analyze the mood of this journal entry: "${text}". Respond with one word: Happy, Sad, Angry, Calm, Anxious, etc.`;

  const res = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return res.data.choices[0].message.content.trim();
}