/**
 * @author Renan Aquino
 * @returns 
 */
const variables = require('dotenv').config().parsed;
const path = require("path");
const package = require("./package.json");
const htmlWebpackplugin = require("html-webpack-plugin");
const webpack  = require('webpack');
const { ModuleFederationPlugin } = webpack.container;
const isProd = /(production|prod|qa)/i.test(process.env.NODE_ENV);
// module federation 
const remoteEnvs = {
    NAME_APPLICATION: process.env.NAME_APPLICATION,
    HOST_URL: process.env.HOST_URL,
    HOST_PORT: process.env.HOST_PORT,
  }
  const enviroments = Object.keys(variables).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(variables[next])
    return prev
  }, remoteEnvs)
module.exports = {
    mode: isProd ? "production" : "development",
    entry: {
        index: "./src/index"
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
      },
    module: {
        rules: [
            {
                test: /[jsx|js]$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: ["@babel/plugin-syntax-dynamic-import"]
                },
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin(enviroments),
        new ModuleFederationPlugin({
            name: process.env.NAME_APPLICATION,
            filename: 'remoteEntry.js',
            exposes: {
                './Button': './src/components/Button'
            }
        }),
        new htmlWebpackplugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ],
    output: {
        chunkFilename: "[contenthash].js",
        path: path.resolve(__dirname, 'dist/'),
        publicPath: process.env.HOST_URL,
    }
}