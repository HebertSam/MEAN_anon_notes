const mongoose = require('mongoose');

let NoteSchema = new mongoose.Schema({
    note: {type: String, required:true, minlength:3}
}, {timestamps:true})
mongoose.model('Note', NoteSchema);
const Note = mongoose.model('Note');