const playlistsMapper = (playlists) => playlists.map((playlist) => playlistMapper(playlist, playlist.tracks));
const playlistMapper = ({ title }, tracks) => ({
  playlist: title,
  tracks: tracksMapper(tracks),
});

const tracksMapper = (tracks) => tracks.map((track) => trackMapper(track));
const trackMapper = ({ track: { title, artists } }) => ({
  title: title,
  artist: artistsMapper(artists),
});

const artistsMapper = (artists) => artists.map((artist) => artistMapper(artist)).join(", ");
const artistMapper = (artist) => artist.name;

module.exports = { playlistsMapper };
