const yaml = require("js-yaml");
const fs = require("fs");
const utils = require("./utils");

const saveYAML = (json, { dir, filename }) => {
  const data = yaml.dump(json);
  const path = `${dir}/${utils.formatFilename(filename)}.yml`;
  save(path, data);
};

const save = (path, data) => {
  fs.writeFile(path, data, (error) => {
    if (error) {
      throw error;
    }
  });
};

module.exports = { saveYAML };
