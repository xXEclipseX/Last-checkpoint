var plus_btns = document.querySelectorAll(".plus");
var minus_btns = document.querySelectorAll(".minus");
var prices = document.querySelectorAll(".price");
var total = document.getElementById("total");
var delete_btns = document.querySelectorAll(".delete");
var like_btns = document.querySelectorAll(".like");

function increment (e) {
var cible = e.target;
var div = cible.parentElement;
var paragraphe = div.querySelector("p");
console.log(paragraphe);
var value = Number (paragraphe.innerHTML);
value++;
paragraphe.innerHTML = value;
var tr = div.parentElement.parentElement;
var unitPrice = tr.querySelector(".unitPrice");
var up = Number(unitPrice.innerHTML);
var result = up*value;
var price = tr.querySelector(".price");
price.innerHTML = result;
sum();
}
function decrement (e) {
var cible = e.target;
var div = cible.parentElement;
var paragraphe = div.querySelector("p");
console.log(paragraphe);
var value = Number (paragraphe.innerHTML);
if (value > 0) {
value--;
}
paragraphe.innerHTML = value;
var tr = div.parentElement.parentElement;
var unitPrice = tr.querySelector(".unitPrice");
var up = Number(unitPrice.innerHTML);
var result =up*value;
var price = tr.querySelector(".price");
price.innerHTML = result;
sum()
}

function sum() {
var somme = 0;
for (let i = 0; i < prices.length; i++) {
somme = somme + Number (prices[i].innerHTML);
}
total.innerHTML = somme;
}
function deleteRow(e) {
var cible = e.target;
var tr = cible.parentElement.parentElement.parentElement.parentElement;
tr.remove();
var priceT = tr.querySelector(".price");
priceT.innerHTML = 0;
sum();
}

function changeColor(e){
  var cible = e.target;
  if (cible.style.color != "red") {
  cible.style.color="red";
  } else cible.style.color="#424242";
}

for (let i = 0; i < plus_btns.length; i++) {
plus_btns[i].addEventListener("click", increment);
}
for (let i = 0; i < minus_btns.length; i++) {
minus_btns[i].addEventListener("click", decrement);
}
for (let i = 0; i < delete_btns.length; i++) {
delete_btns[i].addEventListener("click", deleteRow);
}
for (let i = 0; i < like_btns.length; i++) {
  like_btns[i].addEventListener("click", changeColor);
  }