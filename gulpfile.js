( () => {
  /*** gulpfile.js configuration  ***/
  const

    // directory locations
    dir = {
      src          : 'src/',
      build        : 'public/build/'
    },

    // modules
    gulp           = require('gulp'),
    noop           = require('gulp-noop'),
    newer          = require('gulp-newer'),
    size           = require('gulp-size'),
    imagemin       = require('gulp-imagemin'),
    sass           = require('gulp-sass'),
    postcss        = require('gulp-postcss'),
    sourcemaps     = null;

  /*** images task ***/
  const imgConfig = {
    src            : dir.src + 'images/src/*',
    build          : dir.src + 'images/build/',

    minOpts: {
      optimizationLevel: 5
    }
  };

  gulp.task('images', (done) => {

    gulp.src(imgConfig.src)
      .pipe(newer(imgConfig.build))
      .pipe(imagemin(imgConfig.minOpts))
      .pipe(size({ showFiles:true }))
      .pipe(gulp.dest(imgConfig.build))
    
    done();

  });

  /*** CSS task ***/
  const cssConfig = {

    src             : dir.src + 'scss/index.scss',
    watch           : dir.src + 'scss/**/*',
    build           : dir.src,
    sassOpts: {
      sourceMap       : false,
      outputStyle     : 'nested',
      imagePath       : '../images/build',
      precision       : 3,
      errLogToConsole : true
    },

    postCSS: [
      require('postcss-assets')({
        loadPaths: ['images/build'],
        basePath: dir.build
      }),
      require('autoprefixer')({
        overrideBrowserslist: ['> 1%']
      })
    ]

  };

  // minify production CSS
  cssConfig.postCSS.push(
    require('cssnano')
  );


  gulp.task('css', gulp.series('images', (done) => {

    gulp.src(cssConfig.src)
      .pipe(sourcemaps ? sourcemaps.init() : noop())
      .pipe(sass(cssConfig.sassOpts).on('error', sass.logError))
      .pipe(postcss(cssConfig.postCSS))
      .pipe(sourcemaps ? sourcemaps.write() : noop())
      .pipe(size({ showFiles:true }))
      .pipe(gulp.dest(cssConfig.build))
    
    done();
  }));

/*** watch-task ***/
gulp.task('default', gulp.series('css', (done) => {

  // image changes
  gulp.watch(imgConfig.src, gulp.parallel(['images']));

  // CSS changes
  gulp.watch(cssConfig.watch, gulp.parallel(['css']));

  done();
 }));

})();

