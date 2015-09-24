function toText(filePath, file) {
  return file.contents.toString('utf8');
}

var gulp      = require('gulp'),
    stylus    = require('gulp-stylus'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    inject = require('gulp-inject'),
    nib       = require('nib'),
    jeet      = require('jeet'),
    axis      = require('axis'),
    rupture   = require('rupture'),
    maneuver  = require('maneuver');

gulp.task('default', ['index', 'styl', 'script', 'connect', 'watch']);

gulp.task('styl', function () {
  gulp.src('./src/**/*.styl')
    .pipe(stylus({ use: [nib(), jeet(), axis(), rupture(), maneuver()], compress: true }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./public'))
    .pipe(connect.reload());
});

gulp.task('script', function () {
  gulp.src('./src/**/*.js')
    .pipe(gulp.dest('./public'))
    .pipe(connect.reload());
});
 
gulp.task('connect', function() {
  connect.server({
    root: '',
    port: 3000,
    livereload: true
  });
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.styl', ['styl']);
    gulp.watch('./src/**/*.html', ['index']);
    gulp.watch('./src/**/*.js', ['script']);
});

gulp.task('index', function () {
  gulp.src('./src/index.html')
    .pipe(inject(gulp.src(['./src/partials/head.html']), {
      starttag: '<!-- inject:head:{{ext}} -->',
      transform: toText
    }))
    .pipe(inject(gulp.src(['./src/partials/sidebar/sidebar.html']), {
      starttag: '<!-- inject:sidebar:{{ext}} -->',
      transform: toText
    }))
    .pipe(inject(gulp.src(['./src/partials/header/header.html']), {
      starttag: '<!-- inject:header:{{ext}} -->',
      transform: toText
    }))
    .pipe(inject(gulp.src(['./src/partials/about/about.html']), {
      starttag: '<!-- inject:about:{{ext}} -->',
      transform: toText
    }))
    .pipe(inject(gulp.src(['./src/partials/mixins/offcanvas/offcanvas.html']), {
      starttag: '<!-- inject:offcanvas:{{ext}} -->',
      transform: toText
    }))
    .pipe(inject(gulp.src(['./src/partials/mixins/offcanvasMulti/offcanvasMulti.html']), {
      starttag: '<!-- inject:offcanvasMulti:{{ext}} -->',
      transform: toText
    }))
    .pipe(inject(gulp.src(['./src/partials/mixins/tabs/tabs.html']), {
      starttag: '<!-- inject:tabs:{{ext}} -->',
      transform: toText
    }))
    .pipe(inject(gulp.src(['./src/partials/mixins/flipCard/flipCard.html']), {
      starttag: '<!-- inject:flipCard:{{ext}} -->',
      transform: toText
    }))
    .pipe(inject(gulp.src(['./src/partials/mixins/toggle/toggle.html']), {
      starttag: '<!-- inject:toggle:{{ext}} -->',
      transform: toText
    }))
    .pipe(gulp.dest('./'))
    .pipe(connect.reload());
});

