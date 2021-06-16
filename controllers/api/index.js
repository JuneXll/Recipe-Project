const router = require('express').Router();
const userRoutes = require('./userRoute');
const recipeRoutes = require('./recipeRoute');

router.use('/users', userRoutes);
router.use('/projects', recipeRoutes);

module.exports = router;