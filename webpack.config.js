const Encore = require("@symfony/webpack-encore");

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || "dev");
}

process.env.NODE_ENV = Encore.isProduction() ? "production" : "dev";

Encore.setOutputPath("assets/")
    .setPublicPath("/assets")
    .addStyleEntry("css/app", "./core/css/app.css")
    .addEntry("js/app", "./core/js/app.js")
    .enablePostCssLoader()
    .disableSingleRuntimeChunk()
    .enableSourceMaps(!Encore.isProduction())
    .configureBabel(() => {}, {
        useBuiltIns: "usage",
        corejs: 3,
    });

module.exports = Encore.getWebpackConfig();
