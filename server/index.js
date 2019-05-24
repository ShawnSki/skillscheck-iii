require('dotenv').config();
const express = require('express');
const massive = require('massive');
const controller = require('./controller');

// env variables
const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;

// server setup
const app = express();
app.use(express.json());

// database connection
massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance);
        console.log('❄️ ⛷ Its nuking! Free refills! ...and the database is connected.')
    })
    .catch(error => {
        if (error) throw error;
    })

// set endpoints
app.get('/api/listings', controller.getAllListings);


// app is listening on server
app.listen(SERVER_PORT, () => {
    console.log(`🤙 Aloha and mahalo on server ${SERVER_PORT}`);
});
