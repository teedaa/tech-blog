const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//GET all posts

router.get('/', async (req, res) => {
    try{

      const postData = await Post.findAll({
            attributes: ['id', 'content', 'title', 'created_at'],
            order: [
                ['created at', 'DESC']
            ],
            include: [{
                model: User,
                attributes: ['username'],
            },
            {
                model: Comment,
                attributes: ['id', 'content', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: 'username'
                },
            },
        ],
    });
    res.status(200).json(postData);
} catch (err) {
    res.status(500).json(err);
}
    
});

//GET one post

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findAll({
            attributes: ['id', 'content', 'title', 'created_at'],
            order: [
                ['created at', 'DESC']
            ],
            include: [{
                model: User,
                attributes: ['username'],
            },
            {
                model: Comment,
                attributes: ['id', 'content', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: 'username'
                },
            },
        ],
    });
    if (!postData) {
        res.status(404).json({ message: 'No post found with this id!'});
        return;
    }
    res.status(200).json(postData);
} catch (err) {
    res.status(500).json(err);
}
});

//CREATE new post

router.post('/', async (req, res) => {
    try {
        const postData = await Post.create({ ...body, userId: req.session.userId });
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

//UPDATE a post

router.put('/:id', async (req,res) => {
    try {
        const postData = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id.'});
            return;
        }
        res.status(200).json(postData);
    } catch (err){
        res.status(500).json(err);
    }
});

//DELETE a post

router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id.'});
            return;
        }
        res.status(200).json(postData);
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;