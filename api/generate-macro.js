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

  // Простой тестовый ответ
  return res.json({ 
    result: "Макроскопическое описание: Тестовый ответ от сервера работает!" 
  });
};
