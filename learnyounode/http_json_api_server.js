var httpServer = require('./modules/mod_http_server')
var url = require('url')

function parseTime(time){
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

var onRequest = function(req, res){
  if(req.method != 'GET')
    return res.end('Send me a GET with parameters!')
  var pathname = url.parse(req.url, true).pathname
  var queryData = url.parse(req.url, true).query
  var j

  if(queryData.iso){
    var time = new Date(queryData.iso)

    if(pathname == '/api/parsetime'){
      //time = new Date( time.getTime() + time.getTimezoneOffset() * 60000 )
      j = parseTime(time)
    }
    else if(pathname == '/api/unixtime'){
      time = Date.parse(queryData.iso)
      j = {unixtime : time}
    }
    else
      return res.end('Invalid request path!')

    if(j){
      res.writeHead(200, {'Content-Type':'application/json'})
      res.end(JSON.stringify(j))
    }
    else{
      res.writeHead(404)
      res.end('Not Found')
    }

  }

}

httpServer.start(process.argv[2], onRequest)
