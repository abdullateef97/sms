var express = require('express');
let app = express();
let Nexmo = require("nexmo");
let nexmo = new Nexmo({
    apiKey : "your apiKey", // visit nexmo.com for apiKey and apiSecret
    apiSecret : "your apiSecret"
})

app.get('/',(req,res,next)=>{
    let from = "your number" //could be name
    let to =  " recipients phone number"  // 
    let message = "test cmessage"

    nexmo.message.sendSms(from, to, message, (err,responseData)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(responseData);
        }
    });

})

app.listen(3000, function(){
    console.log("listening on 3000")
})