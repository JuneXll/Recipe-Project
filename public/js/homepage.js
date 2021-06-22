const appId = "5fd9425f";
const appKey = "51f65fc67c6c78bf473190a7e3c1435b";
let searchSubmitButton = document.querySelector('#search-submit');
const url = "https://api.edamam.com/api/recipes/v2?type=public&q=";

let getRequest = function() {
    let userReq = document.querySelector('#search-input').value;
    console.log(userReq);
    fetch(`${url}${userReq}&app_id=${appId}&app_key=${appKey}`)
.then(res => res.json())
.then(data => console.log(data))
.then((data) => {
    appendRecipeUrl(data);
})
.catch((err) => {
    console.log('error: ' + err);
})
};

const appendRecipeUrl = (data) => {
    
}

searchSubmitButton.addEventListener("click", () => {
    getRequest();
});