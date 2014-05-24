var fs = require('fs');
var p = require('path');

var filter = function(dir, ext, callback){
    fs.readdir(dir, function(err, files){
        if(err)
            //early return
            return callback(err);
        var results = [];
        for (var i = 0; i < files.length; ++i){
            var extname = p.extname(files[i]);
            if(extname && extname == '.' + ext)
                results.push(files[i]);
        }
        // call it!
        callback(null, results);
    });
};

module.exports = filter;

/*
 * Better way to filter out files,given by the solution,is to use
 * results = files.filter(function(elem){return p.extname(elem)==='.' + ext;});
 * instead of the for loop
 */
