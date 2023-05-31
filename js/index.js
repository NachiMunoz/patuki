const unNombre = prompt("Ingrese su nombre");
function saludar(nombre) {
  const h1 = document.querySelector("h1");
  return (h1.innerHTML = "Bienvenid@ " + nombre);
}

saludar(unNombre);
