const path = require('path');
const { injectBabelPlugin, getLoader } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const rewirePostcss = require('react-app-rewire-postcss');
const autoprefixer = require('autoprefixer');
const fileLoaderMatcher = function(rule) {
  return rule.loader && rule.loader.indexOf(`file-loader`) != -1;
};
module.exports = function override(config, env) {
  config.resolve = {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      account: path.resolve(__dirname, 'src/pages/account/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      config: path.resolve(__dirname, 'src/utils/config/'),
      api: path.resolve(__dirname, 'src/services/')
    }
  };

  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
    config
  );

  config = rewireLess.withLoaderOptions({
    modifyVars: { '@primary-color': '#209fd2' },
    javascriptEnabled: true
  })(config, env);

  config = rewirePostcss(config, {
    plugins: loader => [
      require('autoprefixer')({
        browsers: ['>1%', 'last 7 versions', 'Firefox ESR', 'iOS >= 10'],
        flexbox: 'no-2009'
      })
    ]
  });

  return config;
};
