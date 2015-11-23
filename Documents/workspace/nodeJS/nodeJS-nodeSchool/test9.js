var http = require('http');
var array=[];
var BufferList = require('bl');
var c = 0;
var str = "";
//var bl = new BufferList();

function imprimir(){
	for (var i = 0; i < array.length ; i++) {
		console.log(array[i]);
	};
}

function url(valor){
	http.get(process.argv[2+valor],function (res){
		res.pipe(BufferList(function(err,data){
			//console.log(data.toString());
			str = data.toString();
			array[valor] = str;
			//console.log(c);
			c++;
			if(c >= 3){
				imprimir();
			}
		}))
	});
}

for (var i = 0; i < 3; i++) {
	url(i);
};

/*
		res.pipe(BufferList(function(err,data){
			//console.log(data.toString());
			str = data.toString();
			array[valor] = str;
			//console.log(c);
			c++;
			if(c >= 3){
				imprimir();
			}
		}))


		res.setEncoding('utf8');
		res.on('data',function(info){
			//console.log(info);
			str += info;
		})
		res.on('end',function(){
			//console.log(str);
			array[c] = str;
			c= c+1;
			str="";
			if(c >= 3){
				imprimir();
			}
		})



		     var http = require('http')  
     var bl = require('bl')  
     var results = []  
     var count = 0  
     function printResults () {  
       for (var i = 0; i < 3; i++)  
         console.log(results[i])  
     }  
     function httpGet (index) {  
       http.get(process.argv[2 + index], function (response) {  
         response.pipe(bl(function (err, data) {  
           if (err)  
             return console.error(err)  
       
           results[index] = data.toString()  
           count++  
       
           if (count == 3)  
             printResults()  
         }))  
       })  
     }  
       
     for (var i = 0; i < 3; i++)  
       httpGet(i)  

*/