const sequelize = require('../config/connection');
const { User, Recipe} = require('../models');

const userData = require('./userData.json');
const recipeData = require('./recipeData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const recipe of recipeData) {
    await Recipe.create({
      ...recipe,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();

// Links for recipeData.json
//   https://damndelicious.net/2019/04/18/mexican-street-tacos/
//   https://www.foodandwine.com/recipes/easy-ravioli
//   https://tastesbetterfromscratch.com/paella/