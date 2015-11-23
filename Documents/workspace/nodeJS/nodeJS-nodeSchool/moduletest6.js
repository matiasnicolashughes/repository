module.exports = function(dir,extension,callback) {
    var fs = require('fs');
	var path = require('path');
	var files =[]
	fs.readdir(dir,function(err,list){
		if(err)
			return callback(err)
		for (var i = 0; i < list.length ; i++) {
			if (path.extname(list[i]) == '.' + extension){
				files.push(list[i])
			}
		}

		return callback(null,files)
	})
}

/*
     var fs = require('fs')  
     var path = require('path')  
     module.exports = function (dir, filterStr, callback) {  
       fs.readdir(dir, function (err, list) {  
         if (err)  
           return callback(err)  
       
         list = list.filter(function (file) {  
           return path.extname(file) === '.' + filterStr  
         })  
       
         callback(null, list)  
       })  
     }  

*/