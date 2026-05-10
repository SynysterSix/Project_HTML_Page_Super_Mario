/*

OBJETIVO 1: quando o usuário clicar no botão de ver trailer, devemeos abrir o modal com o vídeo do trailer
PASSO 1: Dar um jeito de pegar o elemento que representa o botão na tela usando o js
PASSO 2: Dar um jeit de identificar quando o usuário clicou no botão
PASSO 3: Dar um jeito de pegar o elemento modal no js
PASSO 4: abrir o modal na tela

OBJETIvO 2: Quando o usuário clicar no botão X, devemos fechar a modal:
PASSO 1: Dar um jeito de pegar o elemento e fechar a modal usando o js
PASSo 2: Dar um jeito de identificar quando o usuário clicar no x
PASSO 3: Fechar a modal

*/

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
	modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
	alternarModal();
	video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
	alternarModal();
	video.setAttribute("src", "");
});