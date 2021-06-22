const router = require('express').Router();
const { Recipe, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
   try {
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/recipe/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id, {
      include: [
        {
          model: Recipe,
          attributes: ['name'],
        },
      ],
    });

    const recipe = recipeData.get({ plain: true });

    res.render('preview-recipe', {
      ...recipe,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Recipe }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }
  //otherwise it will send back to
  res.render('login');
});

// router.get('/homepage', async (req, res) => {
//   try {
//    res.render('homepage');
//  } catch (err) {
//    res.status(500).json(err);
//  }
// });

module.exports = router;
