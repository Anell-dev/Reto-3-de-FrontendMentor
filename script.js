const valueRating = document.querySelectorAll(".valor");
const btnEnviar = document.querySelector("#btn-enviar");

valueRating.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const valor = btn.classList.item(2);
    verificar(valor);
    btnEnviar.addEventListener("click", (e) => {
      renderThanYouMessage(valor);
    });
  });
});

function verificar(valor) {
  valueRating.forEach((span) => {
    if (span.classList.item(2) != valor) {
      span.classList.remove("circle-with-focus");
    } else {
      span.classList.toggle("circle-with-focus");
    }
  });
}

const containerCard = document.querySelector(".main");
const firstCard = document.querySelector(".container-principal");
const secondCard = document.querySelector(".container-thankYou");
const text = document.querySelector(".text-user-select");

function renderThanYouMessage(val) {
  console.log(`gracias por darnos ${val}`);
  firstCard.classList.add("hide");
  text.textContent = `You select ${val} out of 5`;
  secondCard.classList.remove("hide");
}
