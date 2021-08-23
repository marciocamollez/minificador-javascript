//get a reference to the file system module
var fs = require('fs');

//get a reference to the uglify-js module
var UglifyJS = require('uglify-js');

//get a reference to the minified version of file-1.js, file-2.js and file-3.js
var result = UglifyJS.minify(["pt1.js", "pt2.js", "pt3.js", "pt4.js", "pt5.js", "pt6.js", "pt7.js"]);

//view the output
console.log(result.code);

fs.writeFile("tudo.min.js", result.code, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("File was successfully saved.");
    }
});