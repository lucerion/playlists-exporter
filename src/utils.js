const https = require("https");
const yaml = require("js-yaml");
const fs = require("fs");

const request = (options) => {
  return new Promise((resolve, reject) => {
    const request = https.get(options, response => {
      let body = [];

      response.on("data", chunk => body.push(chunk));

      response.on("end", () => {
        try {
          const buffer = Buffer.concat(body);
          body = JSON.parse(buffer.toString());
        }
        catch (error) {
          reject(error);
        }

        resolve(body);
      });
    });

    request.on("error", error => reject(error));
  });
};

const saveYAML = (json, { dir, filename }) => {
  const data = yaml.dump(json);
  const path = `${dir}/${formatFilename(filename)}.yml`;
  saveFile(path, data);
};

const saveFile = (path, data) => {
  fs.writeFile(path, data, (error) => {
    if (error) {
      throw error;
    }
  });
};

const formatFilename = (filename) => {
  // date in format %Y%m%d%H%M%S
  const timestamp = new Date().toISOString().slice(0, -5).replace(/-|T|:/g, "");
  return filename.replace("{timestamp}", timestamp);
};

module.exports = { request, saveYAML };
