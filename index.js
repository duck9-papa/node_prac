const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.send('hello');
});

app.get('/sound/:name', function (req, res) {
  const { name } = req.params;
  const sound = { dog: '멍멍', cat: '야옹' };
  console.log(sound.includes(name));
  res.json({ sound: '멍멍' });
});

app.listen(port, () => {
  console.log(`example port ${port}`);
});
