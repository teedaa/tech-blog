const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');


//POST a comment 
router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        userId: req.session.userId,
      });
      res.json(newComment);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//DELETE a comment

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const [affectedRows] = await Comment.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;