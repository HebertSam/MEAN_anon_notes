const mongoose = require('mongoose');
const Note = mongoose.model('Note');

module.exports = {
    show: function(req, res){
        Note.find({}, function(err, note){
            if(err){
                return console.log("something went wrong", err);
            }
            console.log(note)
            return res.json(note)
        }).sort({createdAt:-1})
    },
    create: function(req, res){
        console.log(req.body)
        let note = new Note(req.body)
        note.save(function(err){
            if(err){
                return res.json(err)
            }
            res.json(true)
        })

    }
}