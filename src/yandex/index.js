require('dotenv/config');

const client = require('./client');
const mapper = require('./mapper');
const fileUtils = require('../utils/file');

const EXPORT_OPTIONS = {
  dir: process.env.YANDEX_MUSIC_EXPORT_DIR,
  filename: process.env.YANDEX_MUSIC_EXPORT_FILENAME,
};

const getTracksByPlaylists = async () => {
  await client.init();
  const playlists = await client.getPlaylists();

  return mapper.playlistsMapper(playlists);
};

module.exports = (async () => {
  const tracks = await getTracksByPlaylists();

  fileUtils.saveToYAML(tracks, EXPORT_OPTIONS);
})();
