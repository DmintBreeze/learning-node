var net = require('net')
var ftime = require('strftime')

function start(port){
  if (isNaN(port) || port < 1024 || port > 65536){
    console.log("Invalid port number, please use a port in range[1025,65536]")
    return
  }
  function onRequest(socket){
    console.log("New request")
    var res = ftime("%F %H:%M", new Date()) + '\n'
    socket.end(res)
  }
  net.createServer(onRequest).listen(port)
  console.log("Server started")
}

module.exports.start = start
