var http = require('http')


function start (port, onRequest){
  if (isNaN(port) || port < 1024 || port > 65536){
    console.log("Invalid port number, please use a port in range[1025,65536]")
    return
  }
  http.createServer(onRequest).listen(port)
  console.log("Server started...")
}


module.exports.start = start
