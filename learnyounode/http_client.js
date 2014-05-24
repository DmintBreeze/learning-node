var client = require('./modules/mod_http_get');
var url = process.argv[2];
client.get(url, function(err, data){
    if(err) 
        console.log(err)
    else
        console.log(data.toString())
});


/*
 * Solution given, the smart way:
 * console.log and console.error passed as callbacks
 */
/*
var http = require('http')
    
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    })
*/
