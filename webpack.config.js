const Encore = require('@symfony/webpack-encore');

// Đặt thư mục đầu ra thành /assets/build 
// Đường dẫn này sẽ được Jekyll truy cập
Encore
    // Thư mục đầu ra
    .setOutputPath('assets/')
    
    // Public path sử dụng trong browser
    .setPublicPath('/assets')
    
    // Thêm entry cho CSS
    .addStyleEntry('app', './core/css/app.css')

    // Chỉ cần một entry cho mỗi trang JavaScript
    .addEntry('app', './core/js/app.js')
    
    // Bật SourceMaps cho development
    .enableSourceMaps(!Encore.isProduction())
    
    // Tắt các feature bạn không sử dụng
    .disableSingleRuntimeChunk()
    
    // Xóa các file cũ trước khi tạo file mới
    .cleanupOutputBeforeBuild()
    
    // Thêm thông báo build
    .enableBuildNotifications()
    
    // Cấu hình Babel
    .configureBabel((config) => {
        config.presets.push('@babel/preset-env');
    })
    
    // Kích hoạt xử lý JS qua Babel
    .enableBabelTypeScriptPreset()
;

module.exports = Encore.getWebpackConfig();
