const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");
const container = document.querySelector('.container');
const scrollUpBtn = document.getElementById('scroll-up');
const scrollDownBtn = document.getElementById('scroll-down');

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        const personagemId = botao.getAttribute("data-target");
        const personagemSelecionado = document.getElementById(personagemId);
        personagemSelecionado.classList.add("selecionado");
    });
});

scrollUpBtn.addEventListener('click', () => {
    container.scrollBy({
        top: -50,
        behavior: 'smooth'
    });
});

scrollDownBtn.addEventListener('click', () => {
    container.scrollBy({
        top: 50,
        behavior: 'smooth'
    });
});

function desselecionarBotao() {
    botoes.forEach((botao) => {
        botao.classList.remove("selecionado");
    });
}

function desselecionarPersonagem() {
    personagens.forEach((personagem) => {
        personagem.classList.remove("selecionado");
    });
}

 // Seleciona todos os elementos de áudio na página
 const audioElements = document.querySelectorAll('audio');
        
 // Adiciona um evento de play a cada elemento de áudio
 audioElements.forEach(audio => {
     audio.addEventListener('play', () => {
         // Pausa todos os outros áudios que não sejam o atual
         audioElements.forEach(otherAudio => {
             if (otherAudio !== audio) {
                 otherAudio.pause();
             }
         });
     });
 });