var f = require('./modules/mod_filter');

f(process.argv[2], process.argv[3], function(err, files){
    if (err)
        throw err;
    else{
        console.log(files.toString().replace(/,/g, '\n'));
    }
});

