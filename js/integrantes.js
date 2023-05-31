const integrantes = [
  { txt: document.querySelector(".alvaroTxt"), img: document.querySelector(".alvaro") },
  { txt: document.querySelector(".christianTxt"), img: document.querySelector(".christian") },
  { txt: document.querySelector(".gabrielTxt"), img: document.querySelector(".gabriel") },
  { txt: document.querySelector(".gastonTxt"), img: document.querySelector(".gaston") },
  { txt: document.querySelector(".juanTxt"), img: document.querySelector(".juan") },
  { txt: document.querySelector(".leopoldoTxt"), img: document.querySelector(".leopoldo") },
  { txt: document.querySelector(".luisTxt"), img: document.querySelector(".luis") },
  { txt: document.querySelector(".patoTxt"), img: document.querySelector(".pato") },
];

for (let i = 0; i < integrantes.length; i++) {
  const integrante = integrantes[i];

  integrante.txt.addEventListener("mouseover", () => {
    integrante.img.classList.remove("hidden");
    integrante.img.classList.add("visible");
  });

  integrante.txt.addEventListener("mouseleave", () => {
    integrante.img.classList.add("hidden");
    integrante.img.classList.remove("visible");
  });
}
