var httpFileServer = require('./modules/mod_http_server')
var fs = require('fs')

var onRequest = function(request, response){
  fs.readFile(process.argv[3], {encoding: 'utf-8'},
    function(err, data){
      if (err) {
        console.log("Error read file:" + process.argv[3])
        response.statusCode = 404
        response.end('Not Found')
        return
      }
      response.writeHead(200, {'Content-Type': 'text/plain'})
      response.write(data.toString())
      response.end()
    })
}

httpFileServer.start(process.argv[2], onRequest)

/*
 * Official solution: inside onRequest(req, res)
 *
 *  res.writeHead(200, { 'content-type': 'text/plain' })
 *  fs.createReadStream(process.argv[3]).pipe(res)
 *
 * register handler for readStream:
 * readStream.on('open', function(){})
 * readStream.on('error', function(e){})
 */
