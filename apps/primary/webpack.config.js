const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const packageJson = require("./package.json");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    publicPath: "http://localhost:8078/",
  },
  devServer: {
    port: 8078,
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
            presets: [
              ["@babel/preset-react", { runtime: "automatic" }],
              "@babel/preset-env",
            ],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "primary",
      filename: "remoteEntry.js",
      exposes: {
        "./PrimaryApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};
