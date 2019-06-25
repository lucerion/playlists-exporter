require('dotenv').config();

const client = require('./client');
const mapper = require('./mapper');
const utils = require('../utils');

const allTracks = async () => {
  const data = await client.tracks();

  return mapper.tracksMapper(data.response.items);
};

module.exports = (async function() {
  const tracks = await allTracks();

  utils.saveYAML(tracks, {
    dir: process.env.VK_EXPORT_DIR,
    filename: process.env.VK_EXPORT_FILENAME,
  });
})();
