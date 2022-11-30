const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema(
    {
        _id: Number,
        setup: String,
        punchline: String,
        createdAt: Date,
        updatedAt: Date
    }
    
);
 
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;

