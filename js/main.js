let menu = document.querySelector('.menu span');
menu.onclick = function() {
  menu.classList.toggle('clicked');
}

var aminCard = document.querySelector(".team .colunm .card.amin");
aminCard.onclick = function() {
  aminCard.classList.add('active');
}
var samirCard = document.querySelector(".team .colunm .card.samir");
samirCard.onclick = function() {
  samirCard.classList.add('active');
}
var seifCard = document.querySelector(".team .colunm .card.seif");
seifCard.onclick = function() {
  seifCard.classList.add('active');
}
var amirCard = document.querySelector(".team .colunm .card.amir");
amirCard.onclick = function() {
  amirCard.classList.add('active');
}

var arrow = document.querySelector(".team .colunm .amin + .info span");
arrow.onclick = unactive;
var arrow = document.querySelector(".team .colunm .samir + .info span");
arrow.onclick = unactive;
var arrow = document.querySelector(".team .colunm .seif + .info span");
arrow.onclick = unactive;
var arrow = document.querySelector(".team .colunm .amir + .info span");
arrow.onclick = unactive;

function unactive() {
  aminCard.classList.remove("active");
  samirCard.classList.remove("active");
  seifCard.classList.remove("active");
  amirCard.classList.remove("active");
}