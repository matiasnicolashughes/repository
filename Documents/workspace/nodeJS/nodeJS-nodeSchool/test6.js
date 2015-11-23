var mymodule = require('./moduletest6.js');
var dir = process.argv[2];
var extension = process.argv[3];


mymodule(dir,extension,function (err,list){
	for (var i = 0; i < list.length; i++) {
		console.log(list[i])
	}
});

/*
var filterFn = require('./solution_filter.js')  
     var dir = process.argv[2]  
     var filterStr = process.argv[3]  
     filterFn(dir, filterStr, function (err, list) {  
       if (err)  
         return console.error('There was an error:', err)  
       list.forEach(function (file) {  
         console.log(file)  
       })  
     })  
*/