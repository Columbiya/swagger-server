const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const generateJSdocOptions = require("./src/generateJSdocOptions.js");
const fs = require("fs");
const path = require("path");

const app = express();

const options = generateJSdocOptions(process.argv);
const openapiSpecification = swaggerJSDoc(options);

const contents = fs.readFileSync(path.resolve(__dirname, "openapi.json"));

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(JSON.parse(contents)));

app.listen(80, () => {
  console.log("server up");
});
