require('dotenv/config');

const client = require('./client');
const mapper = require('./mapper');
const fileUtils = require('../utils/file');

const EXPORT_OPTIONS = {
  dir: process.env.VK_EXPORT_DIR,
  filename: process.env.VK_EXPORT_FILENAME,
};

const getTracks = async () => {
  const tracks = await client.getTracks();

  return mapper.tracksMapper(tracks);
};

module.exports = (async () => {
  const tracks = await getTracks();

  fileUtils.saveToYAML(tracks, EXPORT_OPTIONS);
})();
