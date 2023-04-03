const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');

    // const tweet = await Tweet.create({
    //     content: 'second tweet',
    //     userEmail: 'user2@example.com'
    // });
    // const tweets = await Tweet.find({userEmail: 'user2@example.com'});
    // console.log(tweets);
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create({content: 'Tweet with comment'});
    console.log(tweet);
    const comment = await Comment.create({content: 'New Comment'});
    tweet.comments.push(comment);
    await tweet.save();
    console.log(tweet);
});