var Word = require('../models/Word')
var express = require('express')
var router = express.Router()

//get all courses
router.get('/getAll', async (req, res) => {
console.log('getting all words(entities)... ');
Word.find({}, { _id: 0 }, function (err, words) {
    if (err)
        res.send(err);
    else {
        //console.log(words);
        var responseData='{';
        
        for(var a=0;a<words.length;a++){
            var x="\""+words[a]['value']+"\"";
            var y="\""+words[a]['tagger']+"\"";
            if(a==words.length-1){
                responseData=responseData+x+':'+y;
            }
            else{
        responseData=responseData+x+':'+y+',';
            }
        
        }
        
        responseData=responseData+'}';
      //  console.log(responseData)
        var resu=JSON.parse(responseData) 
        res.send(resu);
    }
});
})


  module.exports = router