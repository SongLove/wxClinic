// webpack.config.js
// 单独打包样式文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//删除多余js
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const path = require('path');
const glob = require('globby');
// CSS入口配置
const CSS_PATH = {
  pattern: ['./miniprogram/style/*.scss', './miniprogram/style/*.css'],
  src: path.join(__dirname, 'miniprogram')
};

// 遍历所有需要打包的SCSS/CSS文件路径
let getCSSEntries = (config) => {
  let fileList = glob.sync(config.pattern);
  return fileList.reduce((previous, current) => {
    let filePath = path.parse(path.relative(config.src, current));
    let withoutSuffix = path.join(filePath.dir, filePath.name);
    previous[withoutSuffix] = path.resolve(__dirname, current);
    return previous;
  }, {});
};

let config = {
  entry: getCSSEntries(CSS_PATH),
  output: {
    path: __dirname
  },
  module: {
    rules: [{
      test: /\.(scss|sass|css)$/,
      use: [
        // 需要用到的 loader
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: '../miniprogram/style/[name].wxss'
    })
  ],
  resolve: {
    extensions: ['.scss']
  }
};

module.exports = config;