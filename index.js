const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('API Gateway is running!');
});

app.listen(PORT, () => {
  console.log(`API Gateway listening on port ${PORT}`);
});
