const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})


module.exports = mongoose.model('Post', postSchema)