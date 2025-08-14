function FiltrarJuegos() {
  const input = document.getElementById("input-busqueda").value.toLowerCase();
  const tarjetas = document.querySelectorAll("#catalogo-juegos li");

  for (let i = 0; i < tarjetas.length; i++) {
    const texto = tarjetas[i].innerText.toLowerCase();
    if (texto.indexOf(input) !== -1) {
      tarjetas[i].style.display = "";
    } else {
      tarjetas[i].style.display = "none";
    }
  }
}


function ordenarLista() {
  const lista = document.getElementById("catalogo-juegos");
  const items = Array.from(lista.querySelectorAll("li"));
  const tipo = document.getElementById("ordenar-select").value;
  items.sort((a, b) => {
    return tipo === "asc"
      ? a.dataset.nombre.localeCompare(b.dataset.nombre)
      : b.dataset.nombre.localeCompare(a.dataset.nombre);
  });

  lista.innerHTML = "";
  items.forEach((item) => lista.appendChild(item));
}