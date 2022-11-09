const router = require('express').Router();
const userRoutes = require('./user-Routes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);


module.exports = router;
