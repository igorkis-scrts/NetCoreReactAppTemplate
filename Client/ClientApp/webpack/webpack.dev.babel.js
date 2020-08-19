import merge from "webpack-merge";
import common from "./webpack.common";
// const merge = require("webpack-merge");
// const common = require("./webpack.common");

const devWebpackConfig = merge(common, {
    mode: "development",
    devtool: "eval-source-map",
});

module.exports = devWebpackConfig;
