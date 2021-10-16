const express = require('express');
const app = express();
const { randomBytes } = require('crypto');
const cors = require('cors');


const commentsByPostId = {};

app.use(express.json())
app.use(cors());

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {

    const id = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments = commentsByPostId[req.params.id] || [];

    comments.push({ id: id, content });

    commentsByPostId[req.params.id] = comments;

    res.status(201).send(comments);


    posts[id] = {
        id,
        title
    };

    res.status(201).send(posts[id]);

});

app.listen(4001, () => {
    console.log('Listening on 4001');
});