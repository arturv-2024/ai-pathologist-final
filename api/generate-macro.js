// Файл: api/generate-macro.js
module.exports = async (req, res) => {
  // Обязательно устанавливаем заголовки CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Обрабатываем preflight-запросы
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Простой JSON-ответ
  return res.status(200).json({ 
    success: true,
    result: "Макроописание: Сервер работает корректно! Проверка связи успешна."
  });
};
