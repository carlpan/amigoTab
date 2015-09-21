var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

var path = 'vendor/bower_components/';
var js_path = 'resources/assets/js/';
var paths = {
    'bootstrap' : path + 'bootstrap-sass-official/assets'
};

elixir(function(mix) {
    mix.sass('app.scss', 'public/css/', {includePaths: [paths.bootstrap + '/stylesheets']})
        .copy(
            path + 'jquery/dist/jquery.min.js',
            'public/js/vendor/jquery.js'
    )
        .copy(
            path + 'bootstrap-sass-official/assets/javascripts/bootstrap.js',
            'public/js/vendor/bootstrap.js'
    )
        .copy(
            path + 'font-awesome',
            'public/css/vendor'
    )
        .copy(
            path + 'Chart.js/Chart.min.js',
            'public/js/vendor/Chart.min.js'
    )
        .copy(
            js_path + 'Chart.Core.js',
            'public/js/vendor/Chart.Core.js'
    )
        .copy(
            js_path + 'Chart.Bar.js',
            'public/js/vendor/Chart.Bar.js'
    )
        .copy(
            js_path + 'Chart.Line.js',
            'public/js/vendor/Chart.Line.js'
    )
        .copy(
            js_path + 'Chart.Overlay.js',
            'public/js/vendor/Chart.Overlay.js'
    )
        .styles([
            'app.css',
            'vendor/font-awesome.css'
        ], 'public/css/main.css', 'public/css'
    );

});
