const tracksMapper = (tracks) => tracks.map((track) => trackMapper(track));
const trackMapper = ({ title, artist }) => ({
  title: title,
  artist: artist,
});

module.exports = { tracksMapper };
