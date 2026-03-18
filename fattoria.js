var animal1 ={
    specie: "mucca",
    razza: "chianina",
    zampe: 4,
    dieta: {
        cibopreferito: "erba",
        qtd: "20kg al giorno"
    }
};
var animal2 = {
    specie: "cane",
    razza: "bassotto",
    zampe: 4,
    dieta: {
        cibopreferito: "croccantini",
        qtd: "200g al giorno"
    }
};
var animal3 = {
    specie: "gallina",
    razza: "andalusa",
    zampe: 2,
    dieta: {
        cibopreferito: "granaglie",
        qtd: "100g al giorno"
    }
};
var fattoria = [animal1, animal2, animal3];
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var paragrafo = document.getElementById("paragrafo");
function animale1() {
    paragrafo.innerHTML = "La " + fattoria[0].specie + " è di razza " + fattoria[0].razza + ", ha " + fattoria[0].zampe + " zampe e si nutre principalmente di " + fattoria[0].dieta.cibopreferito + ", consumando circa " + fattoria[0].dieta.qtd;
    var img = document.getElementById("fotoMucca");
    img.style.display = "block"; 
}
function animale2() {
    paragrafo.innerHTML = "Il " + fattoria[1].specie + " è di razza " + fattoria[1].razza + ", ha " + fattoria[1].zampe + " zampe e si nutre principalmente di " + fattoria[1].dieta.cibopreferito + ", consumando circa " + fattoria[1].dieta.qtd;
    var img = document.getElementById("fotocane");
    img.style.display = "block";
}
function animale3() {
    paragrafo.innerHTML = "La " + fattoria[2].specie + " è di razza " + fattoria[2].razza + ", ha " + fattoria[2].zampe + " zampe e si nutre principalmente di " + fattoria[2].dieta.cibopreferito + ", consumando circa " + fattoria[2].dieta.qtd;
    var img = document.getElementById("fotoGallina");
    img.style.display = "block";
}
if (btn1) {
    btn1.onclick = animale1;
}
if (btn2) {
    btn2.onclick = animale2;
}
if (btn3) {
    btn3.onclick = animale3;
}