const closeMessage = document.querySelector("#close-message");
const message = document.querySelector(".message");

closeMessage.addEventListener("click", () => {
  message.style.display = "none";
});

setTimeout(() => {
  message.style.display = "none";
}, 5000);

/*document.querySelector('.checkButton').addEventListener('click', function() {
    const conteudo = document.querySelector('#textCheck');
    conteudo.classList.add('sublinhado');
});*/