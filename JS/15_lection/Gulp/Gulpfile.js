// "use strict"

const {src, dest, series, parallel} = require("gulp");
const gulp = require("gulp");

const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const reload      = browserSync.reload;
const del = require("del");
const plumber = require('gulp-plumber');
// const coffee = require('gulp-coffee');

// /* Paths */ 

const StartData = "Start_Data/";
const ReadyData = "Ready_Data/";

const path = {
    build:{
        html: ReadyData,
        css: ReadyData + "./Style/",
        js: ReadyData + "./JS/",
        images: ReadyData + "./IMG/"
    },
    src:{
        html: StartData + "*.html",
        css: StartData + "./Style/*.css",
        js: StartData + "./JS/*.js",
        images: StartData + "./IMG/**/*.{jpeg, png, svg, gif, ico, json}"
    },
    watch:{
        html: StartData + "**/*.html",
        css: StartData + "./Style/**/*.css",
        js: StartData + "./JS/**/*.js",
        images: StartData + "./IMG/**/*.{jpeg, png, svg, gif, ico, json}"
    },
    clean: "./" + ReadyData
};

function server(){
    browserSync.init({
        server: {
            baseDir: "./" + ReadyData
        }
    });
};

// gulp.src('./src/*.ext')
//     .pipe(plumber())
//     .pipe(coffee())
//     .pipe(gulp.dest('./dist'));

function html(){
    return src(path.src.html, {base: StartData})
    .pipe(plumber())
    .pipe(dest(path.build.html))
    .pipe(browserSync.reload({stream: true}));
};

function css(){
    return src(path.src.css, {base: StartData})
    .pipe(plumber())
    .pipe(autoprefixer())
    .pipe(dest(path.build.css))
    .pipe(browserSync.reload({stream: true}));
};

function js(){
    return src(path.src.js, {base: StartData})
    .pipe(plumber())
    .pipe(dest(path.build.js))
    .pipe(browserSync.reload({stream: true}));
};

function images(){
    return src(path.src.images, {base: StartData})
    .pipe(plumber())
    .pipe(dest(path.build.images))
    .pipe(browserSync.reload({stream: true}));
};

function clean(){
    return del(path.clean);
};

function watchFiles(){
    gulp.watch([path.watch.html], html).on("change", reload);
    gulp.watch([path.watch.css], css).on("change", reload);
    gulp.watch([path.watch.js], js).on("change", reload);
    gulp.watch([path.watch.images], images).on("change", reload);
};



// --константи запуску--------

const withoutWatch = series(clean, gulp.parallel(html, css, js, images)); // без консолі та лайву 
const run = parallel(withoutWatch, watchFiles);                           // з консоллю яка показує зміни
const full = parallel(withoutWatch, watchFiles, server);                  // з сервером який не працює )

// ---варіанти запуску------

exports.withoutWatch = withoutWatch;

exports.default = run;

exports.full = full;
