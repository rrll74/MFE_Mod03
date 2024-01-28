import { merge } from "webpack-merge";
import prod from "./webpack.config.prod.js";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export default merge(prod, {
  plugins: [new BundleAnalyzerPlugin()],
});
