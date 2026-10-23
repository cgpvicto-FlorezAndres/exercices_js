// Ex 1
function log(texte) {
    return console.log(texte);
}

log("Hola a todos, Como estan?")

// Ex 2
function saison(nomMois) {

    switch (nomMois.toLowerCase()) {

        case "decembre":
        case "janvier":
        case "fevrier":
            console.log("Hiver");
            break;

        case "mars":
        case "avril":
        case "mai":
            console.log("Printemps");
            break;

        case "juin":
        case "juillet":
        case "aout":
            console.log("Été");
            break;

        case "septembre":
        case "octobre":
        case "novembre":
            console.log("Automne");
            break;

        default:
            console.log("Mois invalide");
    }
}

saison("JuIn");

// Ex 3
/**
 *  Sert pour valider l'age 
 * 
 * @param {number} age = age de l'utilisateur
 * @returns = True si plus grand ou egal à 18, sinon, false
 * 
 */
let estMajeur = (age) => {

    if (age >= 18)
        return true;
    else
        return false;

}

if (estMajeur(18)){
    console.log("Vous pouvez entrer")
}

// Ex 4
function buttonSalutation() {
    let infoPrenom = prompt("Entrez votre prénom");
    let infoNom = prompt("Entrez votre nom");

    alert(`Bonjour ${infoPrenom} ${infoNom}`);
}

const buttonSalut = document.getElementById("btn_1")
buttonSalut.addEventListener(`click`,buttonSalutation)

