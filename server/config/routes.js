const mongoose = require('mongoose');
const Note = mongoose.model("Note");
const note = require('../controllers/notes.js');

module.exports = function(app){
    app.get('/show', note.show)
    app.post('/create', note.create)
}