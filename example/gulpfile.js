/**
 * @fileoverview gulpfile
 * @author burning (www.cafeinit.com)
 * @version 2017.07.20
 */

'use strict'

const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const less = require('gulp-less')
const LessAutoprefix = require('less-plugin-autoprefix')
const pug = require('gulp-pug')

const autoprefix = new LessAutoprefix({ browsers: ['last 5 versions'] })

// tasks
gulp.task('default', ['views', 'style', 'copy:ci-buttons', 'copy:ci-ui-base'])

gulp.task('views', () => {
  return gulp.src([
    './src/layout/*.pug'
  ])
    .pipe(pug({
      data: {
        time: Date.now()
      }
    }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('style', () => {
  return gulp.src([
    './src/style/main.less'
  ])
    .pipe(less({
      plugins: [ autoprefix ]
    }))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./dist/style'))
})

gulp.task('copy:ci-buttons', () => {
  return gulp.src([
    '../dist/*.css'
  ])
    .pipe(gulp.dest('./dist/style'))
})

gulp.task('copy:ci-ui-base', () => {
  return gulp.src([
    './node_modules/ci-ui-base/dist/*.css',
  ])
    .pipe(gulp.dest('./dist/style'))
})
