const confermaMessaggi = [
    "Sei sicuro di voler entrare a far parte della nostra associazione? Non puoi tornare indietro, né detrarre le spese.",
    "Vuoi davvero unirti a noi? Dopo non potrai fuggire.",
    "Una volta dentro, sei dei nostri per sempre... sei pronto?",
    "È questa la scelta definitiva? Ricorda: non ci sono ritorni.",
    "Attento: dire sì significa legarti a noi per sempre.",
    "Non ci pensare troppo: entra e accetta il destino.",
    "Non ci pensare troppo: i nostri moduli scadono entro 7 giorni lavorativi.",
    "La porta si apre una sola volta... vuoi oltrepassarla?",
    "Se accetti, ti attendono misteri e tasse.",
];

const successiMessaggi = [
    "Sei entrato con successo nella nostra associazione! Sono 72€ + IVA.",
    "Benvenuto! La tua anima è stata registrata con successo e tassata al 22% di IVA.",
    "Benvenuto! La tua anima è stata registrata con successo.",
    "Congratulazioni: sei associato! Riceverai fattura elettronica entro 24 ore.",
    "Complimenti! Ora fai ufficialmente parte del nostro CADcircolo.",
    "Il contratto è firmato: sei dei nostri!",
    "La tua adesione è stata accettata: non puoi più tornare indietro.",
    "Hai fatto la scelta giusta: benvenuto tra noi.",
    "Registrazione completata con successo, complimenti!",
    "La tua anima brilla tra le nostre file: sei dentro.",
    "Accettato! Ti consegneremo il pacchetto di benvenuto (72€ + IVA).",
    "Congratulazioni! Sei ufficialmente parte della CADassociazione.",
    "Ora sei uno di noi! Ti mandiamo anche la tessera sanitaria duplicata.",
    "Complimenti! Ora paghi una quota annuale e più spese inutili come l'IVA. Ma ehi, stai supportando CADman 😎",
];

const annullaMessaggi = [
    "Ci dispiace che tu non ci voglia vendere la tua anima.",
    "Occhio: la multa per il recesso è salata.",
    "Peccato... non sai cosa ti perdi!",
    "Ok, resta fuori... per ora.",
    "Decisione interessante... ma non potrai sfuggirci per sempre.",
    "Hai annullato: ma torneremo a tentarti.",
    "Il rifiuto è solo l'inizio della fine.",
    "Hai scelto la via della fuga. Per ora.",
    "Peccato! L'occasione non si presenterà ancora a lungo.",
    "Non ti preoccupare, CADman ha pazienza infinita.",
    "Decisione interessante... ma l’Agenzia delle Entrate ha già i tuoi dati.",
    "Il rifiuto è valido solo se timbrato in Comune entro 5 giorni.",
    "Peccato! Avresti potuto ricevere 12 rate mensili da pagare in comode soluzioni.",
];

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function associazione() {
    if (confirm(getRandom(confermaMessaggi))) alert(getRandom(successiMessaggi))
    else alert(getRandom(annullaMessaggi));
}
