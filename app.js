const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World2.");
});

app.listen(PORT, () => {
  console.log(`App2 fut: http://localhost:${PORT}`);
});
