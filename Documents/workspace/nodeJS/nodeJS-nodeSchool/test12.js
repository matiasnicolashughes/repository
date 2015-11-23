var http = require('http');
var port = process.argv[2];
var str = "";
//var map = require('through2-map');

var server = http.createServer(function(req, res) {

	req.on('data',function(info){
		str += info;
	})
	req.on('end',function(){
		res.end(str.toUpperCase())
	})
});

server.listen(port)

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