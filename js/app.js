
function calcoloPrezzoBiglietto(km, eta) {

    // calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km)
    let prezzoBiglietto = km * 0.21;

    // va applicato uno sconto per i minorenni e per gli over 65.
    if (eta == "minorenne") {
        // sconto 20%
        prezzoBiglietto *= 0.8;

    } else if (eta == "over") {
        // sconto 40%
        prezzoBiglietto *= 0.6;
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

    // check if eta empty
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
    document.querySelector(".elencoBigliettiWrapper").classList.remove("active");

    // reset input values
    document.getElementById("etaInput").value = "";
    document.getElementById("chilometriDaPercorrere").value = "";
    document.getElementById("nomeCognomeInput").value = "";
});