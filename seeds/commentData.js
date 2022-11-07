const { Comment } = require('../models');

const commentdata = [
    {
        user_id: 3,
        post_id: 1,
        content: "Wow I didn't know that. Thanks for the info!"
    },
    {
        user_id: 2,
        post_id: 2,
        content: "That makes sense."
    },   {
        user_id: 1,
        post_id: 3,
        content: "What a boring comment."
    },

]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;