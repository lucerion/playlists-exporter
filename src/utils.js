const https = require("https");

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

const formatFilename = (filename) => {
  // date in format %Y%m%d%H%M%S
  const timestamp = new Date().toISOString().slice(0, -5).replace(/-|T|:/g, "");
  return filename.replace("{timestamp}", timestamp);
};

module.exports = { request, formatFilename };
