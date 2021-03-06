const express = require('express')

const router = express.Router()
const headers = require('../headers')
const cors = require('cors')

const Comment = require('../models/comment')
const Post = require('../models/post')

//Getting all
router.get('/post/:id', getPost, async (req, res) => {
    const post = await Post.findById(req.params.id).exec();
    await post.populate('comments')
    await res.status(200).json(post.comments)

})

router.get('/prova', async (req, res) => {
    await res.status(200).json(req.params.id)
})

router.post('/post', async (req, res) => {
    const id = req.body._id;
    const post = new Post({
        _id: id,
    })
    try {
        await post.save();
        res.status(201).json(post)
    } catch (error) {
        res.status(400).json({ message: error.message })

    }
})

// Create comment at Book(post)
router.post('/post/:id', cors(), headers, async (req, res) => {
    // find out which post you are commenting
    const id = req.params.id;
    // get the comment text and record post id
    const comment = new Comment({
        emri: req.body.emri,
        komenti: req.body.komenti,

        post: id
    })

    const postRelated = await Post.findById(id)

    postRelated.comments.push(comment);
    await comment.save();
    //     // get this particular post
    //     // push the comment into the post.comments array
    //     // save and redirect...
    await postRelated.save(function (err) {
        if (err) { console.log(err) }
        res.status(201).json(comment)
    })
    // } catch (err) { console.log(err) }
})

async function getPost(req, res, next) {
    let post
    try {
        post = await Post.findById(req.params.id)
        if (post == null) {
            return res.status(404).json({ message: "Can't find the book" })
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.post = post
    next()
};

module.exports = router