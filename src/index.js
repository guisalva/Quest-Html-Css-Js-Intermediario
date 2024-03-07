const submitButton = document.getElementById("submit");
const inputs = document.querySelectorAll(".inputForm");
const camposInvalidos = document.querySelectorAll(".campo-invalido");

let campoInvalido;

submitButton.addEventListener("click", function () {
  inputs.forEach((item) => {
    campoInvalido = item.nextElementSibling;

    if (item.value === "") {
      item.classList.add("invalido");

      campoInvalido.classList.add("mostrar");
    }
  });

  itemAtual = 0;
});

inputs.forEach((item) => {
  item.addEventListener("input", function () {
    campoInvalido = item.nextElementSibling;

    if (item.value !== "") {
      item.classList.add("valido");
      item.classList.remove("invalido");
      campoInvalido.classList.remove("mostrar")
    } else {
      item.classList.remove("valido")
    }
  });
});