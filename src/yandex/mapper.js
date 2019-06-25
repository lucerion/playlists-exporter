const playlistsMapper = (playlists) => playlists.map((playlist) => playlistMapper(playlist, playlist.tracks));
const playlistMapper = ({ title }, tracks) => ({
  playlist: title,
  tracks: tracksMapper(tracks),
});

const tracksMapper = (tracks) => tracks.map((track) => trackMapper(track));
const trackMapper = ({ track: { title, artists } }) => ({
  artist: artistsMapper(artists),
  title: title,
});

const artistsMapper = (artists) => artists.map(({ name }) => name).join(', ');

module.exports = { playlistsMapper };
