const express = require('express');
const connect = require('./config/database');
const { HashtagRepository } = require('./repository');
const app = express();

app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');

    let repo = new HashtagRepository();
    const response = await repo.findByName(['Excited', 'CSK']);
    console.log(response);
});