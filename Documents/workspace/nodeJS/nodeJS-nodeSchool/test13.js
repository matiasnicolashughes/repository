var http = require('http');
var url = require('url');
var port = process.argv[2];

function getNow(time){
	var day = { hour : time.getHours(), minute : time.getMinutes(), second: time.getSeconds() };
	return day;
}

function getUnitime(time){
	return { unixtime : time.getTime() };
}

server = http.createServer(function(req,res){
	var parse= url.parse(req.url, true);
	
	//console.log(parse)
	var response;

	if( parse.query.iso == new Date(parse.query.iso).toISOString()){
		var time = new Date(parse.query.iso);
		response = getNow(time);
	}
	if ( parse.pathname == '/api/unixtime' ){
		var time = parse.query.iso;
		response = getUnitime(new Date(time));
	}

	if(response){
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify(response));
	}else{
		res.end('');
	}

});
server.listen(port)

/*
     var http = require('http')  
     var url = require('url')  
     function parsetime (time) {  
       return {  
         hour: time.getHours(),  
         minute: time.getMinutes(),  
         second: time.getSeconds()  
       }  
     }  
     function unixtime (time) {  
       return { unixtime : time.getTime() }  
     }  
       
     var server = http.createServer(function (req, res) {  
       var parsedUrl = url.parse(req.url, true)  
       var time = new Date(parsedUrl.query.iso)  
       var result  
       
       if (/^\/api\/parsetime/.test(req.url))  
         result = parsetime(time)  
       else if (/^\/api\/unixtime/.test(req.url))  
         result = unixtime(time)  
       
       if (result) {  
         res.writeHead(200, { 'Content-Type': 'application/json' })  
         res.end(JSON.stringify(result))  
       } else {  
         res.writeHead(404)  
         res.end()  
       }  
     })  
     server.listen(Number(process.argv[2])) 

*/