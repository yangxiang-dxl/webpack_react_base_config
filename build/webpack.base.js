// webpack.base.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const myLoader = require('../loader/myLoader');
const { ModuleFederationPlugin } = require('webpack').container;
module.exports = {
  entry: path.join(__dirname, "../src/index.tsx"), // 入口文件
  output: {
    filename: "static/js/[contentHash].js", // 每个输出js的名称
    path: path.join(__dirname, "../dist"), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: "/", // 打包后文件的公共前缀路径
  },
  resolve: {
    //配置extensions，引用时就不需要带文件的后缀
    extensions: [".js", ".tsx", ".ts", ".jsx", ".less", ".css"],
  },
  module: {
    rules: [
        // {
        //     test: /.(png|jpg|jpeg|gif|svg|webp)$/,
        //     use: {
        //         loader: path.resolve(__dirname, '../loader/myLoader.ts')
        //     },
        // },
      {
        test: /.(png|jpg|jpeg|gif|svg|webp)$/, // 匹配图片文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: "static/images/[name][ext]", // 文件输出目录和命名
        },
      },

      {
        test: /\.(ts|tsx)$/, //匹配.ts,.tsx文件
        use: {
          loader: "babel-loader",
          options: {
            // 预设执行顺序由右往左，所以先处理ts，在处理jsx,
            presets: [
              [
                "@babel/preset-env",
                {
                  // 设置兼容目标浏览器版本,这里可以不写,babel-loader会自动寻找上面配置好的文件.browserslistrc
                  // "targets": {
                  //  "chrome": 35,
                  //  "ie": 9
                  // },
                  useBuiltIns: "usage", // 根据配置的浏览器兼容,以及代码中使用到的api进行引入polyfill按需添加
                  corejs: 3, // 配置使用core-js低版本
                },
              ],
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/, //匹配 css 文件
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/, //匹配 less 文件
        use: [
            'style-loader',
            'css-loader',
            'less-loader'
          ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      inject: true, //自动注入静态资源
    }),
    new ModuleFederationPlugin({
      name: 'app',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App', // 将你的App组件暴露给远程应
      },
    })
  ],
};
