require('dotenv').config();

const client = require('./client');
const mapper = require('./mapper');
const utils = require('../utils');

const byPlaylists = async () => {
  await client.init();

  const playlists = await client.playlists();
  const fullPlaylists = await playlistsWithTracks(playlists);

  return mapper.playlistsMapper(fullPlaylists);
};

const playlistsWithTracks = async (playlists) => {
  const promises = playlists.map(async (playlist) => client.playlist(null, playlist.kind));
  const playlistsWithTracks = await Promise.all(promises);

  return playlistsWithTracks;
};

module.exports = (async function() {
  const tracks = await byPlaylists();

  utils.saveYAML(tracks, {
    dir: process.env.YANDEX_MUSIC_EXPORT_DIR,
    filename: process.env.YANDEX_MUSIC_EXPORT_FILENAME,
  });
})();
