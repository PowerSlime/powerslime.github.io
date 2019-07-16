const gulp = require("gulp"),
    autoprefixer = require("gulp-autoprefixer"),
    bourbon = require("node-bourbon"),
    browserSync = require("browser-sync").create(),
    imagemin = require("gulp-imagemin"),
    imageminJpegRecompress = require("imagemin-jpeg-recompress"),
    jade = require("gulp-jade"),
    minifyCss = require("gulp-minify-css"),
    notify = require("gulp-notify"),
    rename = require("gulp-rename"),
    sass = require("gulp-sass");


config = {
    dist_dir: "dist",
    src_dir: "src",
    run_on_start: ["sass", "jade", "move_html_to_dist", "move_js_to_dist", "imagemin"]
};


config.images_dist = `${config.dist_dir}/img`;
config.images_src = `${config.src_dir}/img`;


patterns = {
    dist: `${config.dist_dir}/**/*`,
    sass: `${config.src_dir}/**/*.{sass,scss}`,
    jade: `${config.src_dir}/*.jade`,
    jade_files: `${config.src_dir}/**/*.jade`,
    html: `${config.src_dir}/*.html`,
    js: `${config.src_dir}/**/*.js`,
    img: `${config.images_src}/**/*`
};


gulp.task("browser-sync", () => {
    browserSync.init({
        server: {
            baseDir: config["dist_dir"],
            // Enable directory listening
            // Shows all files in directory that we serve
            directory: true
        },

        // Watch files for changes
        watch: true,

        // Add HTTP access control (CORS) headers to assets served by Browsersync
        cors: true,

        // Disable opening url in browser
        open: false,

        // Disable browser-sync's notification on page
        // As "Connected to BrowserSync", "Injected main.min.css", etc...
        notify: false,

        // Wait 0.5s before reloading the page
        reloadDebounce: 500
    });

    // BrowserSync's watcher
    // browserSync.watch(paths.sync.watch).on('change', browserSync.reload);
});


gulp.task("sass", () => {
    return gulp.src(patterns.sass)
        .pipe(sass({
            outputStyle: "compressed",
            includePaths: bourbon.includePaths
        }).on("error", notify.onError()))
        .pipe(minifyCss())
        .pipe(autoprefixer({browsers: ["last 5 versions"]}))
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(`${config.dist_dir}`))
});


gulp.task("jade", () => {
    return gulp.src(patterns.jade)
        .pipe(jade({
            pretty: true
        }).on("error", notify.onError()))
        .pipe(gulp.dest(`${config.dist_dir}`))
});


gulp.task("move_html_to_dist", () => {
    return gulp.src(patterns.html)
        .pipe(gulp.dest(`${config.dist_dir}`))
});


gulp.task("move_js_to_dist", () => {
    return gulp.src(patterns.js)
        .pipe(gulp.dest(`${config.dist_dir}`))
});


gulp.task("imagemin", () => {
    return gulp.src(patterns.img)
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imageminJpegRecompress({
                loops: 5,
                min: 65,
                max: 70,
                quality: "medium"
            }),
            imagemin.svgo(),
            imagemin.optipng({optimizationLevel: 3})
        ]))
        .pipe(gulp.dest(`${config.images_dist}`))
});


gulp.task("sync", () => {
    return gulp.src(patterns.dist)
        .pipe(browserSync.stream());
});


gulp.task("watch", gulp.series(config.run_on_start, gulp.parallel("browser-sync")), () => {
    gulp.watch(patterns.dist, gulp.series("sync"));
    gulp.watch(patterns.sass, gulp.series("sass"));
    gulp.watch(patterns.jade, gulp.series("jade"));
    gulp.watch(patterns.jade_files, gulp.series("jade"), null);
    gulp.watch(patterns.html, gulp.series("move_html_to_dist"));
    gulp.watch(patterns.js, gulp.series("move_js_to_dist"));
    gulp.watch(patterns.img, gulp.series("imagemin"));
});

gulp.task("default", gulp.series("watch"));
gulp.task("build", gulp.parallel(config.run_on_start));
