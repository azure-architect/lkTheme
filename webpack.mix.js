const mix = require('laravel-mix');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('src/js/app.js', 'dist/js')
   .sass('src/scss/app.scss', 'css')
   .setPublicPath('dist');

// Configure BrowserSync
mix.webpackConfig({
    plugins: [
        new BrowserSyncPlugin({
            // BrowserSync options
            host: 'localhost',
            port: 3000,
            proxy: 'lk-timber-acf-blocks.local', // Update this to your local development URL
            files: [
                'dist/js/**/*.js', // Path to where webpack outputs the JS files
                'dist/css/**/*.css', // Path to where webpack outputs the CSS files
                './**/*.php', // Watch PHP files for changes (useful if integrating with a PHP project like WordPress)
                'views/**/*.*', // Add any other file paths you want to watch for changes
            ]
        })
    ]
});
