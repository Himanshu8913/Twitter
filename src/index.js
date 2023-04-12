const express = require('express');
const connect = require('./config/database');
const app = express();

const HashtagRepository = require('./repository/hashtag-repository');

app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');

    let repo = new HashtagRepository();
    await repo.bulkCreate([
        {
            title: 'Trend',
            tweets: []
        },
        {
            title: 'Excited',
            tweets: []
        },
        {
            title: 'CSK',
            tweets: []
        },
        {
            title: 'RCB',
            tweets: []
        },
        {
            title: 'Coding',
            tweets: []
        },
    ])
});