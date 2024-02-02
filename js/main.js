
instruction1;
instruction2;

let age = 37;
console.log(age);

nomBloc(parametrage)
{
    //Instructions et/ou blocks
}

if (age >= ageMin)
{

}

while (k < 10)
{

}

let animal = "dog"; // Variable
animal = "cat"; // Modification valeur 

const deux = 2; // Constante, valeur ne peut pas être modifiée



// Concaténation
const prenom = "John";
const nom = "Smith";
const nomComplet = prenom + " " + nom;
// console.log("Je m'appelle " + nomComplet);


//Interpolation

console.log(`Je m'appelle ${prenom} ${nom}, soyez le bienvenu !`);


Operateur ternaire

const ageJohn = 20;
console.log("John est " + (ageJohn >= 18 ? "majeur" : "mineur") + " en France."); 
console.log(`John est ${ageJohn >= 18 ? "majeur" : "mineur"} aux Etats-Unis.`); 


let action = "virement";

switch (action)
{
    case "retrait":
        // Insctructions de retrait
        break;

    case "virement":
        break;

    case "cloturerCompte":
        break;

    default:
        break;
}


function getApproximationPi()
{
    return 3.14;
}

console.log(`360 deg = 2*pi ~= ${2 * getApproximationPi()} rad`);


const tableauVide = [];

const tabNums = [11, 22, 33, 44, 55, 66, 77];

tableauVide.push(2);
tableauVide.push(3);
tableauVide.push(7);


console.log("Tableau vide = ", tableauVide);
console.log("tableau vide[1] = ",tableauVide[1]);

tableauVide[2] = "abc";
console.log("Tableau vide = ", tableauVide);

for (let i =0; i <tableauVide.length; i++)
{
    const elementTableauVide = tableauVide[i];
    
    console.log("tableauVide[" + 1 + "] = ", elementTableauVide);
}


unTableau.uneMethode();

console.log(`tabNums.join("_|_") = ${tabNums.join("_|_")}`)

console.log(`L'element ${77} ${tabNums.includes(77) ? "est" : "n'est pas"} présent dans le tableau [${tabNums.join(", ")}]`);
console.log(`L'element ${42} ${tabNums.includes(42) ? "est" : "n'est pas"} présent dans le tableau [${tabNums.join(", ")}]`)

const indexOf77 = tabNums.indexOf(77);
if (indexOf77 != -1)
{
    console.log(`L'élément ${77} est à l'index ${indexOf77} dans le tableau [${tabNums.join(", ")}]`)
}
else
{
    console.log(`L'élément ${77} n'est pas présent dans le tableau [${tabNums.join(", ")}]`)
}

const morceau = tabNums.slice(2, 4);

console.log(`morceau (tabNums.slice(2, 4)) = [${morceau.join(", ")}]`);

let tabAssocVide = {};

tabAssocVide.prenom = "Bryan";
tabAssocVide.age = 27;

console.log("tabAssocVide =", tabAssocVide);

console.log(`Je m'appelle ${tabAssocVide.prenom}`);

tabAssocVide.age = 28;
console.log("tabAssocVide = ", tabAssocVide);


let Pikachu = {
    id: 25,
    name: "Pikachu",
    weightKg: 6.0,
    hpMax: 80,
    attacks: [
        {
            name: "Vive-attaque",
            damages: 10,
        },
        {
            name: "Boule Elek",
            damages: 20,
        }
    ]
}

console.log("pikachu =", Pikachu);

function listerAttaquesPokemon(pokemon)
{
    console.log(`${pokemon.name} possède ${pokemon.attacks.length} attaques :`);

    for (let i = 0; i < pokemon.attacks.length; i++)
    {
        const attaque = pokemon.attacks[i];

        console.log(`\t"${attaque.name}" (puissance ${attaque.damages})`);
    }
}

listerAttaquesPokemon(Pikachu);