module.exports = {
  webpack: function (config, env) {
    config.resolve.fallback = {
      assert: false,
      stream: false,
      util: false,
    };
    return config;
  },
};
