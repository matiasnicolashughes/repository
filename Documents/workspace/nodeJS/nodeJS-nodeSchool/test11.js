var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var dir = process.argv[3];


server = http.createServer(function(req,res){
	var file = fs.createReadStream(dir);

	file.on('open',function(){
		file.pipe(res);
	})

})
server.listen(port);

/*
     var http = require('http')  
     var fs = require('fs')  
     var server = http.createServer(function (req, res) {  
       res.writeHead(200, { 'content-type': 'text/plain' })  
       fs.createReadStream(process.argv[3]).pipe(res)  
     })  
       
     server.listen(Number(process.argv[2]))  

*/