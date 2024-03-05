//PÀGINA INICI imatges rollover colours
var imgA1 = document.getElementById("firstVis");
var imgA2 = document.getElementById("firstInvis");
var imgB1 = document.getElementById("segonVis");
var imgB2 = document.getElementById("segonInvis");
var imgC1 = document.getElementById("tercerVis");
var imgC2 = document.getElementById("tercerInvis");

function hoverFirst() {
  imgA1.style.display = "none";
  imgA2.style.display = "block";
  document.getElementById("textOne").style.fontWeight = "bold";
}
addEventListener("onmouseenter", hoverFirst());

function NoHoverFirst() {
  imgA1.style.display = "block";
  imgA2.style.display = "none";
  document.getElementById("textOne").style.fontWeight = "300"
}
addEventListener("onmouseleave", NoHoverFirst());

function hoverSegon() {
  imgB1.style.display = "none";
  imgB2.style.display = "block";
  document.getElementById("textTwo").style.fontWeight = "bold";
}
addEventListener("onmouseenter", hoverSegon());

function NoHoverSegon() {
  imgB1.style.display = "block";
  imgB2.style.display = "none";
  document.getElementById("textTwo").style.fontWeight = "300"
}
addEventListener("onmouseleave", NoHoverSegon());

function hoverTercer() {
  imgC1.style.display = "none";
  imgC2.style.display = "block";
  document.getElementById("textThree").style.fontWeight = "bold";
}
addEventListener("onmouseenter", hoverTercer());

function NoHoverTercer() {
  imgC1.style.display = "block";
  imgC2.style.display = "none";
  document.getElementById("textThree").style.fontWeight = "300"
}
addEventListener("onmouseleave", NoHoverTercer());
