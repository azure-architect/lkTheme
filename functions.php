<?php
/**
 * Timber starter-theme
 * https://github.com/timber/starter-theme
 */

// Load Composer dependencies.
require_once __DIR__ . '/vendor/autoload.php';

require_once __DIR__ . '/src/StarterSite.php';

Timber\Timber::init();

// Sets the directories (inside your theme) to find .twig files.
Timber::$dirname = [ 'templates', 'views' ];

new StarterSite();








/**
 * Register the navigation menus for the theme.
 */
add_action('after_setup_theme', function () {
    register_nav_menus([
        'primary' => 'Primary Menu',
        'secondary' => 'Secondary Menu',
        'footer' => 'Footer Menu',
    ]);
});

add_filter('timber/context', function ($context) {
    // Fetch the 'main-menu' and add it to the context
    $context['menu3'] = Timber::get_menu('footer'); // Changed 'main menu' to 'main-menu' to match the registered location
    return $context;
});


//menu setup end
function lk_enqueue_styles_scripts() {
    // Enqueue the main stylesheet
    wp_enqueue_style('lk-main-style', get_stylesheet_directory_uri() . '/dist/css/app.css', array(), filemtime(get_stylesheet_directory() . '/dist/css/app.css'));

    // Enqueue the main JavaScript file
    wp_enqueue_script('lk-main-script', get_template_directory_uri() . '/dist/js/app.js', null , filemtime(get_template_directory() . '/dist/js/app.js'), true);
}

add_action('wp_enqueue_scripts', 'lk_enqueue_styles_scripts');

function lk_add_custom_upload_mimes( $existing_mimes ) {
    // Add custom MIME types for font files
    $existing_mimes['woff'] = 'font/woff';
    $existing_mimes['woff2'] = 'font/woff2';
    $existing_mimes['ttf'] = 'font/ttf';
    $existing_mimes['svg'] = 'image/svg+xml';
    $existing_mimes['eot'] = 'application/vnd.ms-fontobject';

    return $existing_mimes;
}
add_filter( 'upload_mimes', 'lk_add_custom_upload_mimes' );

