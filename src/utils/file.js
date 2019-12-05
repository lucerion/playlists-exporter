const yaml = require('js-yaml');
const fs = require('fs');

const saveToYAML = (json, { dir, filename }) => {
  const data = yaml.dump(json);
  const path = `${dir}/${formatFilename(filename)}.yml`;

  saveToFile(path, data);
};

const saveToFile = (path, data) => {
  fs.writeFile(path, data, (error) => {
    if (error) {
      throw error;
    }
  });
};

const formatFilename = (filename) => {
  // date in format %Y%m%d%H%M%S
  const timestamp = new Date().toISOString().slice(0, -5).replace(/-|T|:/g, '');

  return filename.replace('{timestamp}', timestamp);
};

module.exports = { saveToYAML };
