/*--------------------------DOM Elements------------------------------------*/
const populateBtn = document.querySelector('#populate-btn');
const userReq = document.querySelector('#recipe-link').value;
let newRecipeContainer = document.querySelector('#new-recipe-container');

/*--------------------------New Recipe Function------------------------------------*/
let addNewRecipe = () => {
    const appKey = "0fe2d1183amsh8514a895a71bd10p18e2c1jsn602eea006d4b";
    const url = "https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi";
    const userReq = document.querySelector('#recipe-link').value;
    console.log(userReq);
    fetch(`${url}`, {
        "method": "POST",
        "headers": {
            "content-type": "text/plain",
            "x-rapidapi-key": `${appKey}`,
            "x-rapidapi-host": "mycookbook-io1.p.rapidapi.com"
        },
        "body": "&quot;" + userReq + "&quot;"
        // "body": userReq
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log('error: ' + err);
    })
    };

    populateBtn.addEventListener("click", (e) => {
        e.preventDefault();
        addNewRecipe();
});


// HTML FOR NEW RECIPE 
// newRecipeContainer.innerHTML += `
// <section class="row">
//    <div class="col s12 m6 l6 offset-m3 offset-l3 card center">
//        <h1 class="recipe-name card-content"><span class="teal-text text-lighten-2">{{recipe_name}}</span></h1>
//        <h4 class="recipe-description card-content">{{description}}</h4>
//    </div>
//    <div class="col s12 m6 l6 offset-m3 offset-l3 card left-align">
//        <h3 class="ingredients card-content"><span class="teal-text text-lighten-2">Ingredients:</span>
//        </h3>

//        <h5 class="ingredients card-content">{{ingredients}}
//        </h5>
//        <h3 class="instructions card-content"><span class="teal-text text-lighten-2">Instructions:</span>
//        </h3>
//        <h5 class="instructions card-content">{{steps}}
//        </h5>
//    </div>
//    <div class="col s12 m6 l6 offset-m3 offset-l3 center">
//        <button class="btn" type="submit">Save to my Recipes</button>
//        <button class="btn" onclick="window.location.href='http://localhost:3000/homepage';" type="submit">Return to homepage</button>
//    </div>
// </section>`