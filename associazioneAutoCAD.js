const confermaMessaggi = [
    "Sei sicuro di voler entrare a far parte della nostra associazione? Non puoi tornare indietro.",
    "Vuoi davvero unirti a noi? Dopo non potrai fuggire.",
    "Una volta dentro, sei dei nostri per sempre... sei pronto?",
    "È questa la scelta definitiva? Ricorda: non ci sono ritorni.",
    "Attento: dire sì significa legarti a noi per sempre.",
    "Non ci pensare troppo: entra e accetta il destino.",
    "La porta si apre una sola volta... vuoi oltrepassarla?",
    "Se accetti, ti attendono misteri e tasse."
];

const successiMessaggi = [
    "Sei entrato con successo nella nostra associazione! Sono 72€ + IVA.",
    "Benvenuto! La tua anima è stata registrata con successo.",
    "Complimenti! Ora fai ufficialmente parte del nostro CADcircolo.",
    "Il contratto è firmato: sei dei nostri!",
    "La tua adesione è stata accettata: non puoi più tornare indietro.",
    "Hai fatto la scelta giusta: benvenuto tra noi.",
    "Registrazione completata con successo, complimenti!",
    "La tua anima brilla tra le nostre file: sei dentro.",
    "Accettato! Ti consegneremo il pacchetto di benvenuto (72€ + IVA).",
    "Congratulazioni! Sei ufficialmente parte della CADassociazione."
];

const annullaMessaggi = [
    "Ci dispiace che tu non ci voglia vendere la tua anima.",
    "Peccato... non sai cosa ti perdi!",
    "Ok, resta fuori... per ora.",
    "Decisione interessante... ma non potrai sfuggirci per sempre.",
    "Hai annullato: ma torneremo a tentarti.",
    "Il rifiuto è solo l'inizio della fine.",
    "Hai scelto la via della fuga. Per ora.",
    "Peccato! L'occasione non si presenterà ancora a lungo.",
    "Non ti preoccupare, CADman ha pazienza infinita."
];

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function associazione() {
    if (confirm(getRandom(confermaMessaggi))) alert(getRandom(successiMessaggi))
    else alert(getRandom(annullaMessaggi));
}
