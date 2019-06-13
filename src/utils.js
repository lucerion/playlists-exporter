const formatFilename = (filename) => {
  // date in format %Y%m%d%H%M%S
  const timestamp = new Date().toISOString().slice(0, -5).replace(/-|T|:/g, "");
  return filename.replace("{timestamp}", timestamp);
};

module.exports = { formatFilename };
