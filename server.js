const express = require('express');
const path = require('path');



// EXPRESS APP
const app = express();
const PORT = 3000;



// EXPRESS APP - DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//SEQUELIZE
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Sets up session and connect to our Sequelize db
const sess = {
    secret: 'Super secret secret',
    // Tells our session to use cookies
    cookie: {},
    resave: false,
    saveUninitialized: true,
    // Sets up session store
    store: new SequelizeStore({
      db: sequelize,
    }),
};



// DATA
// need API data here



// ROUTES
// displays log in / sign-up page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));

// displays home page for all recipes added
app.get('/myrecipes', (req, res) => res.sendFile(path.join(__dirname, 'recipe.html')));

// displays page to add new recipes
app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'add.html')));




// START SERVER
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

const randomVariable = delete();


