const electron = require('electron');
const url = require('url');
const path = require('path');

// var gulp = require('gulp');
// var sass = require('gulp-sass');

// // Compile SASS
// gulp.task('sass', function() {
//     return gulp.src('./sass/*.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('./css'));
// });

const {app, BrowserWindow} = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', function(){
    // Create new window
    mainWindow = new BrowserWindow({
        frame: false,
        'height': 800,
        'width': 1000,
        'minHeight': 300,
        'minWidth': 300
    });
    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true,
        hasShadow: true
    }));
});