const express = require('express');
const connect = require('./config/database');
const { HashtagRepository, TweetRepository } = require('./repository/index');
const TweetService = require('./services/tweet-service.js');
const app = express();

app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');

    let service = new TweetService();
    const tweet = await service.create({content: 'This is my #brand new #tweet #keepCoding'});
    console.log(tweet);
});