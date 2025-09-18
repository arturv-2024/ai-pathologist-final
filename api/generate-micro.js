const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const clinicalData = req.query.clinicalData;

  if (!clinicalData) {
    return res.status(400).json({ error: 'Отсутствуют входные данные' });
  }

  try {
    // Читаем промт из файла
    const promptPath = path.join(process.cwd(), 'prompts', 'micro.txt');
    const systemPrompt = fs.readFileSync(promptPath, 'utf8');

    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: clinicalData
          }
        ],
        temperature: 0.1
      })
    });

    if (!response.ok) throw new Error(`Ошибка API: ${response.status}`);
    
    const data = await response.json();
    res.status(200).json({ result: data.choices[0].message.content });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
