const client = require("./client");
const mapper = require("./mapper");

const tracks = async () => {
  const data = await client.tracks();

  return mapper.tracksMapper(data.response.items);
};

module.exports = { tracks };
