/*--------------------------DOM Elements------------------------------------*/
const searchSubmitButton = document.querySelector('#search-submit');
const userReq = document.querySelector('#search-input').value;
const clearBtn = document.querySelector('#clear-btn');
let recipeContainer = document.querySelector('#recipes-retrieved');

/*--------------------------Search Function------------------------------------*/
let getRequest = () => {
    const appId = "5fd9425f";
    const appKey = "51f65fc67c6c78bf473190a7e3c1435b";
    const url = "https://api.edamam.com/api/recipes/v2?type=public&q=";
    let userReq = document.querySelector('#search-input').value;
    //console.log(userReq);
    fetch(`${url}${userReq}&app_id=${appId}&app_key=${appKey}`)
.then(res => {
    if(!res.ok) {
        throw Error("ERROR");
    }
    return res.json();
})
.then(data => {
    //console.log(data.hits);
    const html = data.hits;
    html.map((data) => {
        //console.log(data.recipe);
        recipeContainer.innerHTML += `
    <div class="row">
    <div class="col s12 m7">
      <div class="card medium">
        <div class="card-image">
          <img src=${data.recipe.image}>
          <span class="card-title blue-grey darken-1">${data.recipe.label}</span>
        </div>
        <div class="card-content grey lighten-3">
          <p>Source: ${data.recipe.source} <br>
             Calories: ${data.recipe.calories.toFixed(0)} <br>
          </p>
        </div>
        <div class="card-action grey lighten-3">
          <a target="_blank" href="${data.recipe.url}">How To Make</a>
        </div>
      </div>
    </div>
  </div>
    `;
    })    
})
.catch((err) => {
    console.log('error: ' + err);
})
};

searchSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    getRequest();
});

clearBtn.addEventListener("click", () => {  
    recipeContainer.innerHTML = "";
});