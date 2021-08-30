
function calcoloPrezzoBiglietto(km, eta) {

    // calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km)
    let prezzoBiglietto = km * 0.21;

    // va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.
    if (eta == "minorenne") {
        const valoreSconto = prezzoBiglietto * 0.2;
        prezzoBiglietto -= valoreSconto;

    } else if (eta == "over") {
        const valoreSconto = prezzoBiglietto * 0.4;
        prezzoBiglietto -= valoreSconto;
    }   

    return prezzoBiglietto.toFixed(2);
}


// stampa biglietto
document.getElementById("stampaBiglietto").addEventListener('click', ()=> {

    // salvo dati in input
    let nomeCognomePasseggero = document.getElementById("nomeCognomeInput").value;
    let chilometriDaPercorrere = document.getElementById("chilometriDaPercorrere").value;
    let etaPasseggero = document.getElementById("etaInput").value;

    // stampo nome sul biglietto
    document.getElementById("nomePasseggiero").innerHTML = nomeCognomePasseggero;

    // calcolo e stampo il prezzo biglietto
    document.getElementById("prezzoBiglietto").innerHTML = calcoloPrezzoBiglietto(chilometriDaPercorrere, etaPasseggero);

    // stampo che tipologia di bilietto è
    if (etaPasseggero == "minorenne" || etaPasseggero == "over") {
        var tipologiaBiglietto = "ridotto";
    } else {
        var tipologiaBiglietto = "standard";
    }
    document.getElementById("tipoBiglietto").innerHTML = tipologiaBiglietto;


    // display biglietto
    document.querySelector(".biglietto").classList.add("active");

});


// annulla opzioni
document.getElementById("annulla").addEventListener('click', ()=> {

    // nascondi biglietto
    document.querySelector(".biglietto").classList.remove("active");

    // reset input values
    document.getElementById("etaInput").value = "";
    document.getElementById("chilometriDaPercorrere").value = "";
    document.getElementById("nomeCognomeInput").value = "";
});