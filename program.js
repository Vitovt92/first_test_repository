var extention = require('./moduleExtentionList.js');
extention(process.argv[2], process.argv[3], function(err,list){
    if (err) {console.log(err);}
    
        
})