require("dotenv").config();

const yandex = require("./yandex");
const exporter = require("./exporter");

module.exports = (async function() {
  const yandexPlaylists = await yandex.all();
  exporter.saveYAML(yandexPlaylists, {
    dir: process.env.YANDEX_MUSIC_EXPORT_DIR,
    filename: process.env.YANDEX_MUSIC_EXPORT_FILENAME
  });
})();
