window.addEventListener("load", init);

function init() {
    const LISTA = ["zene", "zeneMásként"];
    const felsorolas = document.getElementById("felsorolas");
    const maskepp = document.getElementsByClassName("maskepp");
    let htmlValtozo = listabaKiir(LISTA);
    let htmlValtozo1 = divKiir(LISTA);
    console.log(LISTA);
    console.log(htmlValtozo);
    kiir(htmlValtozo, felsorolas);
    kiir(htmlValtozo1, maskepp[0]);
    //fogjuk meg az összes gombot
    const gombElemek = document.querySelectorAll(".maskepp button");
    console.log(gombElemek);
    //rátesszük 
    for (let index = 0; index < LISTA.length; index++) {
       gombElemek[index].addEventListener("click", divHatter)
        
    }
}

function listabaKiir(LISTA) {
    let htmlValtozo = "<ul>";
    for (let index = 0; index < LISTA.length; index++) {
        /* htmlValtozo += "<li>" + LISTA[index] + "</li>" */
        console.log("forba");
        console.log(htmlValtozo);
        htmlValtozo += `<li> ${LISTA[index]} </li>`;
    }
    htmlValtozo += "</ul>";
    return htmlValtozo;
}

function kiir(mit, hova) {
    hova.innerHTML += mit;
}

function klikk(event){
    tartalom = event.target.innerHTML;
    console.log;
}

function divKiir(LISTA){
    let htmlValtozo = "";
    for (let index = 0; index < LISTA.length; index++) {
        htmlValtozo += `<div> <p> ${LISTA[index]} </p> <button> ok </button> </div>`;
    }
    htmlValtozo += "";
    return htmlValtozo;
}

function divHatter(event){
    const ELEM = event.target.parentNode
    ELEM.classList.add("hatter")
    console.log(event.target.parentNode)
}