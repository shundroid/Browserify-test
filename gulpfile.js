var gulp = require("gulp");
var source = require("vinyl-source-stream");
var browserify = require("browserify");
var tsify = require("tsify");
var find = require("gulp-find-glob");

gulp.task("build", function(callback) {
  find("./js/*.ts").then(files => {
    console.log(files);
    browserify({
      entries: files
    }).plugin(tsify, {
      noImplicitAny: true,
      target: "es5"
    }).bundle().pipe(source("./all.js")).pipe(gulp.dest("./js/"));
  });
});