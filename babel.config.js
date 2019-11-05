module.exports = function (api) {
  api.cache(true);

  const presets = [
    ["@babel/preset-env", {
      "targets": {
        "node": "current"
      }
    }]
  ];

  // const plugins = [
  //   ["@babel/plugin-transform-regenerator", {
  //     "asyncGenerators": false,
  //     "generators": false,
  //     "async": false
  //   }],
  //   "@babel/plugin-transform-async-to-generator"
  // ];

  return {
    presets,
    // plugins
  };
}
