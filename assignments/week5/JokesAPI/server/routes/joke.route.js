const Controller = require('../controllers/joke.controller');
 
module.exports = app => {
    app.get('/api/jokes', Controller.findAllJokes);
    app.get('/api/jokes/:id', Controller.findOneSingleJoke);
    app.post('/api/jokes', Controller.createJoke);
    app.put('/api/jokes/:id', Controller.updateExistingJoke);
    app.delete('/api/jokes/:id', Controller.deleteAnExistingJoke);
}
