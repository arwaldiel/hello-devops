const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World_asd.");
});

app.listen(PORT, () => {
  console.log(`App2 fut: http://localhost:${PORT}`);
});
