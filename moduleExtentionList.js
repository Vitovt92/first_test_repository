module.exports = function(dirName, extention, function(err, data){
    
    if (err) {return err;} else {
        err=null;
    }
    
    var fs = require('fs');
    var path = require('path');
    
    var serchElement = "." + extention;
        
    fs.readdir(dirName, function(err, data){
    
    if (err) {return err;}
    
   data = data.filter(function(item){
       return path.extname(item) === serchElement;     
        
    })
    return data;
        }
    )
        
    })





