/* nombres integrantes */
const alvaroTxt = document.querySelector(".alvaroTxt");
const christianTxt = document.querySelector(".christianTxt");
const gabrielTxt = document.querySelector(".gabrielTxt");
const gastonTxt = document.querySelector(".gastonTxt");
const juanTxt = document.querySelector(".juanTxt");
const leopoldoTxt = document.querySelector(".leopoldoTxt");
const luisTxt = document.querySelector(".luisTxt");
const patoTxt = document.querySelector(".patoTxt");

/* imagenes */
const alvaro = document.querySelector(".alvaro");
const christian = document.querySelector(".christian");
const gabriel = document.querySelector(".gabriel");
const gaston = document.querySelector(".gaston");
const juan = document.querySelector(".juan");
const leopoldo = document.querySelector(".leopoldo");
const luis = document.querySelector(".luis");
const pato = document.querySelector(".pato");

alvaroTxt.addEventListener("mouseover", () => {
  alvaro.classList.remove("hidden");
  alvaro.classList.add("visible");
});
alvaroTxt.addEventListener("mouseleave", () => {
  alvaro.classList.add("hidden");
  alvaro.classList.remove("visible");
});

christianTxt.addEventListener("mouseover", () => {
  christian.classList.remove("hidden");
  christian.classList.add("visible");
});
christianTxt.addEventListener("mouseleave", () => {
  christian.classList.add("hidden");
  christian.classList.remove("visible");
});

gabrielTxt.addEventListener("mouseover", () => {
  gabriel.classList.remove("hidden");
  gabriel.classList.add("visible");
});
gabrielTxt.addEventListener("mouseleave", () => {
  gabriel.classList.add("hidden");
  gabriel.classList.remove("visible");
});

gastonTxt.addEventListener("mouseover", () => {
  gaston.classList.remove("hidden");
  gaston.classList.add("visible");
});
gastonTxt.addEventListener("mouseleave", () => {
  gaston.classList.add("hidden");
  gaston.classList.remove("visible");
});

juanTxt.addEventListener("mouseover", () => {
  juan.classList.remove("hidden");
  juan.classList.add("visible");
});
juanTxt.addEventListener("mouseleave", () => {
  juan.classList.add("hidden");
  juan.classList.remove("visible");
});

leopoldoTxt.addEventListener("mouseover", () => {
  leopoldo.classList.remove("hidden");
  leopoldo.classList.add("visible");
});
leopoldoTxt.addEventListener("mouseleave", () => {
  leopoldo.classList.add("hidden");
  leopoldo.classList.remove("visible");
});

luisTxt.addEventListener("mouseover", () => {
  luis.classList.remove("hidden");
  luis.classList.add("visible");
});
luisTxt.addEventListener("mouseleave", () => {
  luis.classList.add("hidden");
  luis.classList.remove("visible");
});

patoTxt.addEventListener("mouseover", () => {
  pato.classList.remove("hidden");
  pato.classList.add("visible");
});
patoTxt.addEventListener("mouseleave", () => {
  pato.classList.add("hidden");
  pato.classList.remove("visible");
});
