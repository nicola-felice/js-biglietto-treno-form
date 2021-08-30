
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


// input validation
function inputIsValid(nome, eta, km) {

    // check if the input name is valid
    if (!isNaN(parseInt(nome)) || nome == "") {
        return false;
    }

    // check if the km input is valid
    if (isNaN(km) || km == "") {
        return false;
    }

    if (eta == "") {
        return false;
    }

    return true;
}


// stampa biglietto
document.getElementById("stampaBiglietto").addEventListener('click', ()=> {

    // salvo dati in input
    const nomeCognomePasseggero = document.getElementById("nomeCognomeInput").value;
    const chilometriDaPercorrere = parseInt(document.getElementById("chilometriDaPercorrere").value);
    const etaPasseggero = document.getElementById("etaInput").value; 

    if (inputIsValid(nomeCognomePasseggero, etaPasseggero, chilometriDaPercorrere)) {
        // stampo nome sul biglietto
        document.getElementById("nomePasseggiero").innerHTML = nomeCognomePasseggero;

        // calcolo e stampo il prezzo biglietto
        document.getElementById("prezzoBiglietto").innerHTML = `${calcoloPrezzoBiglietto(chilometriDaPercorrere, etaPasseggero)} €`;

        // stampo che tipologia di biglietto è
        if (etaPasseggero == "minorenne" || etaPasseggero == "over") {
            var tipologiaBiglietto = "ridotto";
        } else {
            var tipologiaBiglietto = "standard";
        }
        document.getElementById("tipoBiglietto").innerHTML = `biglietto ${tipologiaBiglietto}`;

        // calcolo e stampo la carrozza
        document.getElementById("numeroCarrozza").innerHTML = Math.floor(Math.random() * 9) + 1;

        // calcolo e stampo il codice CP
        document.getElementById("codiceCP").innerHTML = Math.floor(Math.random() * 9999) + 90000;

        // display biglietto
        document.querySelector(".elencoBigliettiWrapper").classList.add("active");     

    } else {
        document.querySelector(".elencoBigliettiWrapper").classList.remove("active");     
        alert('ATTENZIONE!! inserisci i dati correttamente');
    }

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