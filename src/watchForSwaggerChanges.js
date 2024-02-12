const fs = require("fs");
const swaggerUi = require("swagger-ui-express");

function watchForSwaggerChanges(app, openapiPath) {
  fs.watchFile(openapiPath, () => {
    app.disable("/swagger");

    if (!fs.existsSync(openapiPath)) {
      return;
    }

    app.use(
      "/swagger",
      swaggerUi.serve,
      swaggerUi.setup(JSON.parse(fs.readFileSync(openapiPath)))
    );
  });
}

module.exports = watchForSwaggerChanges;
