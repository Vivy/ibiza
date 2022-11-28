let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://.thecocktaildb.com/api/json/v1/1/search.php?s=";
let userInp = document.getElementById("user-inp").value;
if (userInp.length == 0) {
  result.innerHTML = `<h3 class ="msg"> The input field is empty </h3>`
} else {
  fetch(url + userInp).then(response => response.json()).then(data => {
    console.log(data, 'asdasdadsd')
    console.log(data.drink[0])
    let myDrink = data.drink[0]
    console.log(myDrink, 'asdadsdd')
  })
}
