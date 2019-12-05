const YandexMusicAPI = require('yandex-music-api');
const client = new YandexMusicAPI();

const CLIENT_CONFIG = {
  username: process.env.YANDEX_MUSIC_USERNAME,
  password: process.env.YANDEX_MUSIC_PASSWORD,
};

const init = () => client.init(CLIENT_CONFIG);

const getPlaylists = async () => {
  const playlists = await client.getUserPlaylists();
  const promises = playlists.map(async (playlist) => getPlaylist(null, playlist.kind));
  const playlistsWithTracks = await Promise.all(promises);

  return playlistsWithTracks;
};

const getPlaylist = (userID, kind) => client.getPlaylist(userID, kind);

module.exports = { init, getPlaylists };
