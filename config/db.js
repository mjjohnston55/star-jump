// this is the file that will connect mongo

const mongoose = require('mongoose');
// config gives access to .get which will get the mongoURI from default.json, so bring it in whenever access to the global variables are needed
const config = require('config');
// values in default.json are avaiable throughout the app (thanks to config), we are pulling mongoURI here with .get()
const db = config.get('mongoURI');

// mongoose returns a promise so we wait for the connection
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('MongoDB Connected');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
