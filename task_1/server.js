const express = require("express");
const app = express();
const router = require("./route");

const PORT = 8000;

app.use("/api", router);
app.use("*", (req, res) => {
  res.status(404).send(`Route ${req.url} not found`);
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
