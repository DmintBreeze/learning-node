var fs = require('fs');
var p = require('path');

var dir = process.argv[2];
var ext = process.argv[3];
fs.readdir(dir, function(err, files){
    for(var i = 0; i < files.length; ++i){
        //var nameext = files[i] .split('.').pop();
        var nameext = p.extname(files[i]);
        if(nameext && nameext == '.' +ext){
            console.log(files[i]);
        }
    } 
});
