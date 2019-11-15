const express = require("express");
const app = express();

app.get("/", function(req, res){
    let defaultObject = getHomeDefaultObject();
    res.send(defaultObject);
});

app.get("/blog/:article?", function(req, res){
    let message = getMessageByOptionalParams(req.params);
    res.send({message: message});
})

app.get("/channel/youtube", function(req, res){
    let message = getMessageByQueryParams(req.query);
    res.send({message: message});
})

app.get("/custom_channel/:platform/:name", function(req, res){
    let message = getMessageWithTwoParams(req.params);
    res.send({message: message});
})

app.listen(4000, function(error) {
    if(error){
        console.log('Something is wrong');
    }else{
        console.log("Server is ok");
    }
})

const getMessageByQueryParams = (query) => {
    let channel = query["channel"];
    let message = "Channel Not Found.";
    if (channel) {
        message = "Youtube Channel " + channel;
    }
    return message;
}
const getMessageByOptionalParams = (params) => {
    let article = params.article;
    let message = "Welcome to My Blog.";
    if (article) {
        message = "Welcome to My Blog. In the article " + article;
    }
    return message;
}

const getHomeDefaultObject = () => {
    return { name: "chico", code: 123 };
}

const getMessageWithTwoParams = (params) => {
    let platform = params.platform;
    let name = params.name;
    let message = "Welcome to My " + platform + " Channel " + name + ".";
    return message;
}

module.exports = { app, getHomeDefaultObject, getMessageByOptionalParams, getMessageByQueryParams, getMessageWithTwoParams };