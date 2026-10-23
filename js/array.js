//Ex 1 Parcourir un tableau

let noms = ["Andres", "Martha", "Tatiana", "Ruth", "Wilson"];
noms.push("Camilo");

for (let index = 0; index < noms.length; index++) {

    console.log(noms[index]);

}
for (let nom of noms) {
    console.log(nom);
}

noms.forEach((nom) => {
    console.log(nom);
})

// Ex 2 Filtrer un tableau

let notes = [85, 42, 67, 90, 58, 73];

const notesReussis = notes.filter((note) => {
    return note >= 60;
})

for (let note of notesReussis) {
    console.log(note);
}
console.log(notes[notes.length - 1]);

// Exercice #3 - Transformer un tableau

let prix = [10, 25, 30, 5, 15];

const prixTaxes = prix.map((nouveauPrix) => {
    return nouveauPrix * 1.15;
})

for (let pr of prix) {
    console.log(pr)
}
for (let pr of prixTaxes) {
    console.log(pr)
}

//Exercice 4 - Combiner filter() et map()


let nombres = [2, 5, 8, 11, 14, 17];

let nbmPair = nombres.filter((pair) => {
    
        return pair % 2 === 0;
});

let nmbFoisTrois = nbmPair.map((nmb) => {
    return nmb * 3;
})

for (let nmb of nmbFoisTrois) {
    console.log(nmb);
}

// Exercice 5 - Tableau d'objets

let produits = [
    { nom: "Chocolat", prix: 3 },
    { nom: "Chips", prix: 2 },
    { nom: "Café", prix: 8 },
    { nom: "Pain", prix: 4 }
];

let produitsAbordables = produits.filter((produit) =>{
    
        return produit.prix < 5;
})

let nomProduitAbordable = produitsAbordables.map((produit) => {
    return produit.nom;
})

console.table(produitsAbordables)
console.log(nomProduitAbordable)

