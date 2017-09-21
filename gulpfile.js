'use strict';

// Load plugins
var gulp = require('gulp'),
	sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
	imageminSvgo = require('imagemin-svgo'),
	pngquant = require('imagemin-pngquant'),
	svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del');

// configuration des chemins
var SASS_FILES_DIR = './styles';
var SASS_FILES_PATH = SASS_FILES_DIR + '/**/*.scss';
var BUNDLED_CSS_FILES_PATH = './public/css';
var ASSETS_FILES_PATH = './assets/**/*';
var BUNDLED_ASSETS_FILES_PATH = './public';
var ASSETS_FONTS_PATH = './assets/fonts/**/*';
var ASSETS_IMGS_PATH = './assets/img/**/*';
var ASSETS_SVGS_ICONS_PATH = './assets/svg/icons/**/*.svg';
var OPT_ASSETS_IMGS_PATH = './public/img';
var OPT_ASSETS_SVGS_ICONS_PATH = './public/svg/icons/';

// configuration des plugins
var SASS_COMPILE_OPTIONS = {
    outputStyle: 'expanded'
};
var autoprefixerOptions = {
	browsers: ['last 2 versions', 'Explorer >= 11']
};
var imageminConfig = {
	progressive: true,
	use: [pngquant()],
	svgoPlugins: [
		{
			removeViewBox: false
		}, {
			cleanupIDs: false
		}
	]
};
var svgConfig = {
	shape               : {
		dimension       : {         // Set maximum dimensions
			maxWidth    : 32,
			maxHeight   : 32
		},
		spacing         : {         // Add padding
			padding     : 0
		}
	},
	mode                : {
		view            : {         // Activate the «view» mode
			bust        : false,
			render      : {
				scss    : true      // Activate Sass output (with default options)
			}
		},
		symbol          : true      // Activate the «symbol» mode
	}
};

// copy static files
gulp.task('assets', function () {
    return gulp.src(ASSETS_FILES_PATH)
        .pipe(gulp.dest(BUNDLED_ASSETS_FILES_PATH))
});

// Styles
gulp.task('styles', function() {
	return gulp.src(SASS_FILES_PATH)
		.pipe(sass(SASS_COMPILE_OPTIONS).on('error', sass.logError))
		.pipe(sourcemaps.init())
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(gulp.dest(BUNDLED_CSS_FILES_PATH))
		.pipe(rename({ suffix: '.min' }))
		.pipe(cssnano({
			safe: true,
			postcssZindex: false,
			zindex: false,
            autoprefixer: { autoprefixerOptions }
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(BUNDLED_CSS_FILES_PATH))
});

gulp.task('copy_foundation', function () {
	return gulp.src(SASS_FILES_DIR + '/foundation.min.css')
		.pipe(gulp.dest(BUNDLED_CSS_FILES_PATH));
});

gulp.task('copy_fonts', function () {
	return gulp.src(ASSETS_FONTS_PATH)
		.pipe(gulp.dest(BUNDLED_ASSETS_FILES_PATH));
});

// Images
gulp.task('images', function() {
	return gulp.src(ASSETS_IMGS_PATH)
		.pipe(imagemin(imageminConfig))
		.pipe(gulp.dest(OPT_ASSETS_IMGS_PATH))
});

// About svgs
gulp.task('build_svg', function () {
	return gulp.src(ASSETS_SVGS_ICONS_PATH)
		.pipe(svgSprite(svgConfig))
		.pipe(gulp.dest(OPT_ASSETS_SVGS_ICONS_PATH));
});

// Default task
gulp.task('default', function() {
  gulp.start('assets','styles', 'copy_foundation', 'copy_fonts', 'images');
});

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch(SASS_FILES_PATH, ['styles']);

  // Watch image files
  gulp.watch(ASSETS_IMGS_PATH, ['images']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch([BUNDLED_ASSETS_FILES_PATH]).on('change', livereload.changed);

});