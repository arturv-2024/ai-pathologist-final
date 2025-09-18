const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;

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
    // Запрос к DeepSeek API
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
            content: 'Ты — ассистент патологоанатома. Сгенерируй краткое макроскопическое описание на основе предоставленных данных. Будь точным и используй медицинские термины.'
          },
          {
            role: 'user',
            content: clinicalData
          }
        ],
        temperature: 0.1
      })
    });

    if (!response.ok) {
      throw new Error(`Ошибка DeepSeek API: ${response.status}`);
    }

    const data = await response.json();
    const generatedText = data.choices[0].message.content;

    res.status(200).json({ result: generatedText });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
