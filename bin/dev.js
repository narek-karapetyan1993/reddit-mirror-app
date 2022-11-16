const webpack = require("webpack");
const [webpackClientConfig, webpackServerConfig] = require("../webpack.config");
const nodemon = require("nodemon");
const path = require("path");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackDevMiddleware = require("webpack-dev-middleware");
const express = require("express");

const compiler = webpack(webpackServerConfig);
const clientCompiler = webpack(webpackClientConfig);

const hmrServer = express();

hmrServer.use(
  webpackDevMiddleware(clientCompiler, {
    publicPath: webpackClientConfig.output.publicPath,
    serverSideRender: true,
    writeToDisk: true,
    stats: "errors-only",
  })
);

hmrServer.use(
  webpackHotMiddleware(clientCompiler, {
    path: "/static/__webpack_hmr",
  })
);

hmrServer.listen(3001, () => {
  console.log("HMR Server successfully started");
});

compiler.watch({}, (err) => {
  if (err) {
    console.log("Compilation failed: ", err);
  }
  console.log("Compilation was successfully");
});

nodemon({
  script: path.resolve(__dirname, "../dist/server/server.js"),
  watch: [
    path.resolve(__dirname, "../dist/server"),
    path.resolve(__dirname, "../dist/client"),
  ],
});
