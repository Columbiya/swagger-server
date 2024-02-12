const express = require("express");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const path = require("path");
const watchForSwaggerChanges = require("./src/watchForSwaggerChanges.js");

const app = express();

const openapiPath = path.resolve(__dirname, "openapi.json");

if (!fs.existsSync(openapiPath)) {
  console.error("openapi.json doesnt exist in the root of the project");
  return;
}

app.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(JSON.parse(fs.readFileSync(openapiPath)))
);

watchForSwaggerChanges(app, path.resolve(__dirname, "openapi.json"));

app.listen(80, () => {
  console.log("server up");
});
