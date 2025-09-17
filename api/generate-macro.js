// Файл: api/generate-macro.js
module.exports = async (req, res) => {
  // Явно указываем Content-Type для HTML
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  // Простой HTML-ответ вместо JSON
  const htmlResponse = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>AI Патологоанатом</title>
        <style>
            body { font-family: Arial; margin: 40px; }
            textarea { display: block; margin-bottom: 20px; width: 80%; }
            button { padding: 10px 20px; font-size: 16px; }
        </style>
    </head>
    <body>
        <h1>Генератор макроскопического описания</h1>
        <textarea id="clinicalData" rows="10" placeholder="Введите клинические данные и данные вскрытия здесь...">Труп мужчины</textarea>
        <button onclick="generateMacro()">Сгенерировать макроописание</button>
        <h3>Результат:</h3>
        <textarea id="result" rows="15" readonly>Тестовый ответ от сервера работает!</textarea>
    </body>
    </html>
  `;
  
  return res.status(200).send(htmlResponse);
};
