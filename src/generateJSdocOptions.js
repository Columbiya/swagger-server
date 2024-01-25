const processFlag = require("./processFlag.js");

function generateJSdocOptions(args) {
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Foo",
        version: "1.0.0",
      },
      tags: [{ name: "foo", description: "foo operations" }],
    },
    apis: [], // files containing annotations as above
  };

  for (let i = 0; i < args.length - 1; i++) {
    processFlag(args[i], args[i + 1], options);
  }

  return options;
}

module.exports = generateJSdocOptions;
