var httpServer = require('./modules/mod_http_server')

var onRequest = function(req, res){
  if(req.method != 'POST')
    return
  var body = ''
  req.on('data', function(data){
    body += data.toString()
  })
  req.on('end', function(){
    body = body.toUpperCase()
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(body)
  })
}

httpServer.start(process.argv[2], onRequest)

/*
 * Official solution:
 * pipe + through2map
 */
/*
    var http = require('http')
    var map = require('through2-map')

    var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))
*/
