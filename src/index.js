require("dotenv").config();

const vk = require("./vk");
const yandex = require("./yandex");
const exporter = require("./exporter");

const vkExport = async () => {
  const tracks = await vk.tracks();

  exporter.saveYAML(tracks, {
    dir: process.env.VK_EXPORT_DIR,
    filename: process.env.VK_EXPORT_FILENAME
  });
};

const yandexMusicExport = async () => {
  const tracks = await yandex.byPlaylists();

  exporter.saveYAML(tracks, {
    dir: process.env.YANDEX_MUSIC_EXPORT_DIR,
    filename: process.env.YANDEX_MUSIC_EXPORT_FILENAME
  });
};

module.exports = (async function() {
  await vkExport();
  await yandexMusicExport();
})();
