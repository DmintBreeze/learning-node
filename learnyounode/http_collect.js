var client = require('./modules/mod_http_get')

var str = ''

client.get(process.argv[2], function(err, data, isEnd){
    if(err){
        console.log(err)
        return
    }
    if(isEnd){
        console.log(str.length.toString())
        console.log(str)
        return
    }
    str += data.toString()
})


/*
 * Official solution, use third-party module bl
 */
/*
var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))  
    })
*/
