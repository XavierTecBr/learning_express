const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send({name: "chico", code: 123});
});

app.get("/blog/:article?", function(req, res){
    let article = req.params.article;
    let message = "Welcome to My Blog.";
    if (article) {
        message = "Welcome to My Blog. In the article " + article;
    }
    res.send({message: message});
})

app.get("/channel/youtube", function(req, res){
    let channel = req.query["channel"];
    let message = "Channel Not Found.";
    if (channel) {
        message = "Youtube Channel " + channel;
    }
    res.send({message: message});
})

app.get("/custom_channel/:platform/:name", function(req, res){
    let platform = req.params.platform;
    let name = req.params.name;
    res.send({message: "Welcome to My " + platform + " Channel " + name +"."});
})

app.listen(4000, function(error) {
    if(error){
        console.log('Something is wrong');
    }else{
        console.log("Server is ok");
    }
})