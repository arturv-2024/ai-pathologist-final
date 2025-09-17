// Файл: api/generate-macro.js
module.exports = async (req, res) => {
  // Настройка CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Обработка preflight запросов
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Получаем данные из query-параметра
  const clinicalData = req.query.clinicalData || 'данные не предоставлены';

  // Возвращаем JSON-ответ
  return res.status(200).json({ 
    result: `Макроописание на основе: ${clinicalData}` 
  });
};
