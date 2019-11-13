module.exports = function (api) {
  api.cache(true);

  const presets = [
    ["@babel/preset-env", {
      "targets": {
        "chrome": "58",
        "ie": "11"
      }
    }]
  ];

  const plugins = ["@babel/plugin-transform-classes"];

  return {
    presets,
    plugins
  };
}
