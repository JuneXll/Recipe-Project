const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const helpers = require('./utils/helpers');
const sequelize = require ('./config/connection');

// EXPRESS APP
const app = express();
const PORT = process.env.PORT || 3000;

// EXPRESS APP - DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//SEQUELIZE

// Sets up session and connect to our Sequelize db
const sess = {
  secret: 'Recipe secret',
  // Tells our session to use cookies
  cookie: {},
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(routes);


//For use with helpers
const hbs = exphbs.create({ helpers });

//standard setup to use handlebars express
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// DATA
// need API data here

// ROUTES
// displays log in / sign-up page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'login.handlebars')));

// displays home page for all recipes added
app.get('/myrecipes', (req, res) => res.sendFile(path.join(__dirname, 'main.handlebars')));

// displays page to add new recipes
app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'new-recipe.handlebars')));

// START SERVER
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});








