const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


//GET all posts
router.get('/', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findAll({
          include: [
            {
              model: User,
              attributes: ['username'],
            },
          ],
        });
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        res.render('homepage', {
          blogs,
          logged_in: req.session.logged_in,
          page: 'HOME',
        });
    }catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;