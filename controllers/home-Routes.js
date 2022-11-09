const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');


//GET all posts
router.get('/', async (req, res) => {
    try {
        const PostData = await Post.findAll({
          include: [
            {
              model: User,
              attributes: ['username'],
            },
          ],
        });
        const posts = PostData.map((blog) => blog.get({ plain: true }));
        console.log(posts[0].User.username)

        res.render('homepage', {
          posts,
          logged_in: req.session.logged_in,
          page: 'home',
        });
    }catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;