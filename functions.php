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

function mytheme_enqueue_styles_scripts() {
    // Enqueue the main stylesheet
    wp_enqueue_style('mytheme-main-style', get_stylesheet_directory_uri() . '/dist/css/app.css', array(), filemtime(get_stylesheet_directory() . '/dist/css/app.css'));

    // Enqueue the main JavaScript file
    wp_enqueue_script('mytheme-main-script', get_template_directory_uri() . '/dist/js/app.js', null , filemtime(get_template_directory() . '/dist/js/app.js'), true);
}

add_action('wp_enqueue_scripts', 'mytheme_enqueue_styles_scripts');
