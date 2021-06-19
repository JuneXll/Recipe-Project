const appId = "5fd9425f";
const appKey = "51f65fc67c6c78bf473190a7e3c1435b";
let searchSubmitButton = document.querySelector('#search-submit');

let getRequest = function() {
    let userReq = document.querySelector('#search-input').value;
    console.log(userReq);
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${userReq}&app_id=${appId}&app_key=${appKey}`)
.then(res => res.json())
.then(data => console.log(data));
};

searchSubmitButton.addEventListener("click", () => {
    getRequest();
});