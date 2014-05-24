var http = require('http');

/*
 * callback(err, data, isEnd), 
 * data is each chunck of data received
 */
var myget = function(url, callback){
    http.get(url, function(response){
        response.setEncoding('utf8');
        response.on('data', function(data){
            callback(null, data, false)
        })
        response.on('error', function(e){
            return callback(e)
        })  
        response.on('end', function(){
            var data = ''
            callback(null, data, true)
        })
    }).on('error', function(e){
        return callback(e)
    })
}

module.exports.get = myget;

