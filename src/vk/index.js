require("dotenv").config();

const client = require("./client");
const mapper = require("./mapper");
const exporter = require("../exporter");

const allTracks = async () => {
  const data = await client.tracks();

  return mapper.tracksMapper(data.response.items);
};

module.exports = (async function() {
  const tracks = await allTracks();

  exporter.saveYAML(tracks, {
    dir: process.env.VK_EXPORT_DIR,
    filename: process.env.VK_EXPORT_FILENAME
  });
})();
