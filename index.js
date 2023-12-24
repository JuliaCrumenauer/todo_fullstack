const express = require("express");
const app = express();

const port = 3000;

app.get("/home", function (req, res) {
  res.send("Hello World");
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
