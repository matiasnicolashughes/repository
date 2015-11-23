const BufferList = require('bl');

http = require('http');
var bl = new BufferList();

var str ="";
//str=str.concat('qwe');
http.get(process.argv[2],function (res){
	res.setEncoding('utf8');
	res.on('data',function(info){
		//bl.append(new Buffer(info))
		str += info;
		//str=str.concat(info)
	});
	res.on('end', function(){
		console.log(str.length);
		console.log(str);		
	});
});

/*
     var http = require('http')  
     var bl = require('bl')  
     http.get(process.argv[2], function (response) {  
       response.pipe(bl(function (err, data) {  
         if (err)  
           return console.error(err)  
         data = data.toString()  
         console.log(data.length)  
         console.log(data)  
       }))    
     })  
*/