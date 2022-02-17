const mongoose = require('mongoose')

const komentSchema = new mongoose.Schema({


    emri: {
        type: String,
        required: true
    },
    komenti: {
        type: String,
        required: true
    },
    komentDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }

})

modules.exports = mongoose.model('Comment', komentSchema)