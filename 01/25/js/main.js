const botoes = document.querySelectorAll(".menu button");
const secoes = document.querySelectorAll(".secao");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const id = botao.getAttribute("data-secao");

        secoes.forEach(secao => {
            secao.classList.remove("ativa");
        });

        document.getElementById(id).classList.add("ativa");
    });
});
