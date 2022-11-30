 
const Joke = require('../models/joke.model.js');
 
module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then((allJokes) => {
            res.json({ jokes: allJokes })
        })
    .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json({ joke: oneSingleJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
        .then( e => response.json({data:e}) )
        .catch( err => res.json({message: 'Something went wrong', error: err}) );
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then( e => response.json({data:e}) )
        .catch( err => res.json({message: 'Something went wrong', error: err}) );
}
 

module.exports.deleteAnExistingJoke = ( req, res) => {
    Joke.deleteOne( {_id : req.params.id} )
    .then( e => response.json({data:e}) )
    .catch( err => res.json({message: 'Something went wrong', error: err}) );
}
