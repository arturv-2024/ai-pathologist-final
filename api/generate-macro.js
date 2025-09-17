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

  // Всегда возвращаем JSON!
  return res.status(200).json({ 
    result: "✅ Макроописание: Тестовый ответ от сервера работает! Введенный текст: " + (req.body?.clinicalData || "нет данных")
  });
}; 
