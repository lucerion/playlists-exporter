const https = require('https');

const request = (options) => {
  return new Promise((resolve, reject) => {
    const request = https.get(options, response => {
      let body = [];

      response.on('data', chunk => body.push(chunk));

      response.on('end', () => {
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

    request.on('error', error => reject(error));
  });
};

module.exports = { request };
