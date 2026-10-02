import express = require("express");

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send("Express-servern fungerar");
});

app.listen(port, () => {
  console.log(`Servern kör på http://localhost:${port}`);
});