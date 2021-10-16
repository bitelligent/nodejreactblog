const express = require('express');
const app = express();
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const commentsByPostId = {};

app.use(express.json())
app.use(cors());

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', async(req, res) => {

    const id = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments = commentsByPostId[req.params.id] || [];

    comments.push({ id: id, content });

    commentsByPostId[req.params.id] = comments;



    await axios.post('http://localhost:4005/events', {
        type: 'CommentCreated',
        data: {
            id: commentId,
            content,
            postId: req.params.id
        }
    });

    res.status(201).send(comments);


    posts[id] = {
        id,
        title
    };

    res.status(201).send(posts[id]);

});

app.post("/events", (req, res) => {
    console.log("Event Received", req.body.type);

    res.send({});
});


app.listen(4001, () => {
    console.log('Listening on 4001');
});