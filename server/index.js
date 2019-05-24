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

// set endpoints. (:id's are targeting unique id's of listings). Connecting to the controller file to make thing actually happen.
app.get('/api/listings', controller.getAllListings);
app.get('api/listing/:id', controller.getListing);
app.post('/api/listing', controller.addListing);
app.delete('/api/listing/:id', controller.deleteListing);
app.put('/api/listing/:id', controller.updateListing);


// app is listening on server
app.listen(SERVER_PORT, () => {
    console.log(`🤙 Aloha and mahalo on server ${SERVER_PORT}`);
});
