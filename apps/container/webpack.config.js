const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const packageJson = require("./package.json");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    publicPath: "http://localhost:8079/",
  },
  devServer: {
    port: 8079,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        primary: "primary@http://localhost:8078/remoteEntry.js",
        secondary: "secondary@http://localhost:8077/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
