var http = require('http')

var counter = 3
var output = []

var create_callback = function(i){
  return function(response){
    var str = ''
    response.on('data', function(data){
        str += data.toString()
    })
    response.on('error', console.error)
    response.on('end', function(){
        counter--
        output[i] = str
        if(0 == counter)
          for(var j = 0; j < output.length; ++j)
            console.log(output[j])
    })
  }
}

var create_handle_error = function(i) { return function(e) {
    console.log("Index:" + i + "\n" + e)
 }; }

for(var i = 0; i < 3; ++i){
    http.get(process.argv[i+2], create_callback(i))
    .on('error', create_handle_error(i))
}
