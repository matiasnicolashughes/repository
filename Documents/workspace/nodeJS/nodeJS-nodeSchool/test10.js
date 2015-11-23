var net = require('net');
var port = process.argv[2];
var d = new Date();


var server = net.createServer(function(socket) { //'connection' listener
	//console.log('client connected');
	var str = "";

	//tener cuidado si viene con o sin 0 dia o mes
	str += d.getFullYear()+'-';  
    str += d.getMonth()+1+'-';  
    str += d.getDate();
    str += ' '+d.getHours()+':'+d.getMinutes();
	socket.write(str);
	socket.end('');
});
server.listen(port);


/*

     var net = require('net')  
     function zeroFill(i) {  
       return (i < 10 ? '0' : '') + i  
     }  
     function now () {  
       var d = new Date()  
       return d.getFullYear() + '-'  
         + zeroFill(d.getMonth() + 1) + '-'  
         + zeroFill(d.getDate()) + ' '  
         + zeroFill(d.getHours()) + ':'  
         + zeroFill(d.getMinutes())  
     }  
       
     var server = net.createServer(function (socket) {  
       socket.end(now() + '\n')  
     })  
       
     server.listen(Number(process.argv[2]))  

*/