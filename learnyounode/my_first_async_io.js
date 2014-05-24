var fs = require('fs');

var sum = 0;

fs.readFile(process.argv[2], function(err, data){
    if(err) throw err;
    var len = data.toString().split('\n').length - 1;
    console.log(len.toString());
}) 

