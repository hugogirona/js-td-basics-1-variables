/*****************************
 * 11 - Priorité des opérateurs
 */

// Opérateurs multiples
// 1. Utilisez les opérateurs +, *, et / pour effectuer une opération mathématique complexe. Affichez le résultat.
console.log(48 * 2 + 36 / 0.9);
// Groupement
// 2. Créez une expression mathématique qui nécessite le groupement des opérations. Utilisez des parenthèses pour clarifier l'ordre des opérations. Affichez le résultat.
console.log(((40 + 5) * 8) / 7);
// Affectations multiples
// 3. Déclarez deux variables x et y. Utilisez des affectations multiples pour leur donner des valeurs. Par exemple, x = 5 et y = 10. Affichez les valeurs de x et y.
let x;
let y;
[x, y] = [12, 14];
console.log(x, y);
// Autres opérateurs
// 4. Utilisez un opérateur de comparaison (comme >, <, ==, etc.) pour comparer les valeurs de deux variables et affichez le résultat.

let a = 10;
let b = 20;

if (a < b) {
    console.log(a + ' est plus petit que ' + b)
} else if (a > b) {
    console.log(a + ' est plus grand que ' + b)
} else {
    console.log(a + ' est égal à ' + b)
}

