const httpUtils = require('../utils/http');

const VK_API_VERSION = 5.78;

const REQUEST_OPTIONS = {
  hostname: 'api.vk.com',
  path: `/method/audio.get?access_token=${process.env.VK_ACCESS_TOKEN}&v=${VK_API_VERSION}`,
  headers: {
    'User-Agent': 'KateMobileAndroid/52.1 lite-445 (Android 4.4.2; SDK 19; x86; unknown Android SDK built for x86; en)',
  },
};

const getTracks = async () => {
  const data = await httpUtils.request(REQUEST_OPTIONS);

  return data.response.items;
};

module.exports = { getTracks };
