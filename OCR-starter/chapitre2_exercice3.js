// Permutation de variables

// Solution classique utilisant une variable temporaire
let nombreUn = 3;
let nombreDeux = 8;
let temporaire;

// avant la permutation
console.log(nombreUn, nombreDeux);


temporaire = nombreUn;
nombreUn = nombreDeux;
nombreDeux = temporaire;

// après la permutation
console.log(nombreUn, nombreDeux);


// Solution alternative valable uniquement pour des nombres
// Échange de nombre1 et nombre2 sans variable temporaire

let nombreTrois = 6;
let nombreQuatre = 9;

// avant la permutation
console.log(nombreTrois, nombreQuatre);

nombreTrois = nombreTrois + nombreQuatre;
nombreQuatre = nombreTrois - nombreQuatre;
nombreTrois = nombreTrois - nombreQuatre;

// après la permutation
console.log(nombreTrois, nombreQuatre);




