const tracksMapper = (tracks) => tracks.map((track) => trackMapper(track));
const trackMapper = ({ title, artist }) => ({
  artist: artist,
  title: title,
});

module.exports = { tracksMapper };
