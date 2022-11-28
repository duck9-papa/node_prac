const express = require('express');
const app = express();
var cors = require('cors');
const port = 3000;
const sub = 4000

// 비울시 모든 요청에대해 허용
app.use(cors());

app.get('/', function (req, res) {
  res.send('hello');
});

app.get('/sound/:name', function (req, res) {
  const { name } = req.params;
  const sound = { dog: '멍멍', cat: '야옹' };
  name in sound
    ? res.json({ sound: sound[name] })
    : res.json({ sound: '알수없음' });
});

app.listen(port, () => {
  console.log(`example port ${port}`);
});
