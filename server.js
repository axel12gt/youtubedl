const express = require("express");
const logger = require("morgan");
const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(logger("dev"));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is listening on https://localhost:${PORT}`);
});
