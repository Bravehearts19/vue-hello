Vue.config.devtools = true;

/* Funzione-evento che parte alla lettura del contenuto del DOM della pagina */
/* Viene utilizzata per racchiudere tutte le variabili non rendendole globali */
window.addEventListener("DOMContentLoaded", function () {
    const vueApp = new Vue({
        el: "#app",
        data: {
            textH1: "Titolo creato con Vue", 
            srcImg: "https://images.unsplash.com/uploads/1412825195419af52b492/8bc72ed7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
            altImg: "Immagine presa da Unsplash",
        },
    });
});
