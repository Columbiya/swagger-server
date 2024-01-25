const fs = require("fs");
const path = require("path");
const { folderFlag } = require("./constants.js");

function processFlag(flag, value, options) {
  switch (flag) {
    case folderFlag:
      if (!fs.existsSync(path.resolve(__dirname, value))) return;
      options.apis.push(path.resolve(__dirname, value, "*.php"));
      return options;
    default:
      return options;
  }
}

module.exports = processFlag;
