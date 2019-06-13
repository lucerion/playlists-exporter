const client = require("./client");
const mapper = require("./mapper")

const all = async () => {
  await client.init();

  const playlists = await client.playlists();
  const fullPlaylists = await playlistsWithTracks(playlists);

  return mapper.playlistsMapper(fullPlaylists);
};

const playlistsWithTracks = async (playlists) => {
  const promises = playlists.map(async (playlist) => client.playlist(null, playlist.kind));
  const playlistsWithTracks = await Promise.all(promises);

  return playlistsWithTracks;
}

module.exports = { all };
