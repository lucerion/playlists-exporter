const YandexMusicAPI = require('yandex-music-api');
const API = new YandexMusicAPI();

const config = {
  username: process.env.YANDEX_MUSIC_USERNAME,
  password: process.env.YANDEX_MUSIC_PASSWORD,
};

const init = () => API.init(config);
const playlists = () => API.getUserPlaylists();
const playlist = (userID, kind) => API.getPlaylist(userID, kind);

module.exports = { init, playlists, playlist };
