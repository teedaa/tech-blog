const { Post } = require ('../models');

const postdata = [
    {
        user_id: 1,
        title: 'What does MVC stand for?',
        content: "MVC stands for Model, View, Controller."
    },
    { 
        user_id: 2,
        title: 'Why do we need a back end to our website?',
        content: "The back end runs our servers, without a back end the site ceases to work properly."
    },
    {
        user_id: 3,
        title: "This is a title.",
        content: "This is my content"
    }
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;