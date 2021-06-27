const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require ('./config/connection');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// EXPRESS APP
const app = express();
const PORT = process.env.PORT || 3000;

//For use with helpers
const hbs = exphbs.create({ helpers });

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

//standard setup to use handlebars express
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// EXPRESS APP - DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(routes);

// START SERVER
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
