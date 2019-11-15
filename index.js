const express = require("express");
const app = express();

app.listen(4000, function(error) {
    if(error){
        console.log('Something is wrong');
    }else{
        console.log("Server is ok");
    }
})