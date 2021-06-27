const router = require('express').Router();

const userRoutes = require('./userRoute');
const recipeRoutes = require('./recipeRoute');

router.use('/users', userRoutes);
router.use('/recipe', recipeRoutes);

module.exports = router;
