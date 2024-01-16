const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const pug = require('gulp-pug');

const pugCompile = () => {
    return src('app/pug/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(dest('./build/'));
  };

    

const scssCompile = () => {
    return src('app/scss/app.scss')
        .pipe(sass())
        .pipe(dest('./build/styles'))
};

exports.pug = pugCompile;
exports.scss = scssCompile;