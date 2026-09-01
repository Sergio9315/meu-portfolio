// =========================================
// BOTÃO "CONHEÇA MEU TRABALHO"
// =========================================

const btnPortfolio = document.getElementById("btnPortfolio");

const portfolio = document.getElementById("portfolio");

btnPortfolio.addEventListener("click", function () {

    portfolio.scrollIntoView({
        behavior: "smooth"
    });

});


// =========================================
// DADOS DOS PROJETOS
// =========================================

const projetos = {

    "Projeto 1": {

        titulo: "Projeto 1",

        descricao:
            "Página web desenvolvida como projeto acadêmico, utilizando estrutura HTML e estilização com CSS.",

        tecnologias:
            "Tecnologias: HTML e CSS",

        link:
            "#"

    },


    "Projeto 2": {

        titulo: "Projeto 2",

        descricao:
            "Projeto desenvolvido para praticar FlexBox e organização de elementos em uma página web.",

        tecnologias:
            "Tecnologias: HTML, CSS e FlexBox",

        link:
            "#"

    },


    "Projeto 3": {

        titulo: "Projeto 3",

        descricao:
            "Projeto de desenvolvimento web utilizando recursos de HTML, CSS e JavaScript.",

        tecnologias:
            "Tecnologias: HTML, CSS e JavaScript",

        link:
            "#"

    }

};


// =========================================
// ELEMENTOS DO MODAL
// =========================================

const botoesProjeto =
    document.querySelectorAll(".btn-projeto");


const modalProjeto =
    document.getElementById("modalProjeto");


const imagemModal =
    document.getElementById("imagemModal");


const tituloModal =
    document.getElementById("tituloModal");


const descricaoModal =
    document.getElementById("descricaoModal");


const tecnologiasModal =
    document.getElementById("tecnologiasModal");


const linkProjeto =
    document.getElementById("linkProjeto");


const fecharModal =
    document.getElementById("fecharModal");


// =========================================
// ABRIR PROJETO
// =========================================

botoesProjeto.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const nomeProjeto =
            botao.getAttribute("data-projeto");


        const numeroProjeto =
            nomeProjeto.replace("Projeto ", "");


        const dados =
            projetos[nomeProjeto];


        // IMAGEM

        imagemModal.src =
            "imagens/projeto" +
            numeroProjeto +
            ".jpg";


        // TÍTULO

        tituloModal.textContent =
            dados.titulo;


        // DESCRIÇÃO

        descricaoModal.textContent =
            dados.descricao;


        // TECNOLOGIAS

        tecnologiasModal.textContent =
            dados.tecnologias;


        // LINK

        linkProjeto.href =
            dados.link;


        // ABRIR MODAL

        modalProjeto.classList.add("ativo");

    });

});


// =========================================
// FECHAR MODAL PELO BOTÃO X
// =========================================

fecharModal.addEventListener("click", function () {

    modalProjeto.classList.remove("ativo");

});


// =========================================
// FECHAR CLICANDO FORA DO MODAL
// =========================================

modalProjeto.addEventListener("click", function (evento) {

    if (evento.target === modalProjeto) {

        modalProjeto.classList.remove("ativo");

    }

});


// =========================================
// FECHAR COM A TECLA ESC
// =========================================

document.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape") {

        modalProjeto.classList.remove("ativo");

    }

});


// =========================================
// MENU MOBILE
// =========================================

const menuMobile =
    document.getElementById("menuMobile");


const menu =
    document.getElementById("menu");


menuMobile.addEventListener("click", function () {

    menu.classList.toggle("menu-aberto");

});


// =========================================
// FECHAR MENU AO CLICAR EM UM LINK
// =========================================

const linksMenu =
    document.querySelectorAll("#menu a");


linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("menu-aberto");

    });

});