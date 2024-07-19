const express = require('express');
const cors = require('cors');
const livrosRoute = require('./routes/livrosRoute.js');
const favoritosRoute = require('./routes/favoritosRoute.js');

const app = express();
const port = 8080;

app.use(express.json(), cors(), livrosRoute, favoritosRoute);

//Rota principal
app.get('/', (req, res) => {
  res.status(200).send({
    name: 'Alura Books Server API',
    version: '1.0.0',
  });
});

//Servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
