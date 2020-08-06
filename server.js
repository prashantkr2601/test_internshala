const express = require("express");
const path = require("path");
const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => console.log(`Running on port ${port}`));
