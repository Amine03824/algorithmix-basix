// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
const splitComma = ",";
let output = [];
let string = "";
console.log(args);

for ( arg of args) {                    // Pour chaque élément du tableau
console.log ("argument :" + arg);
for (let i = 0 ; i <= arg.length; i++){ // Je parcoure les chars

if (arg[i] === splitComma){             // Si l'élément contient une virgule 
console.log("j'ai trouvé une virgule");
output.push(string);                    // Je rajoute au tableau de stortie la string créée à partir des chars la précédant dans le tableau
console.log("J'ai push dans le tableau output la string " + string);
string = ""                             // Je remets à zéro la variable string

} else if (arg === ""){
output.push("");

} else { 			       // Si l'élément est un texte normal
string += arg[i];                      // Je l'ajoute à une variable "temporaire" string
console.log("j'ai rajouté à la string la lettre " + arg[i]);

}

}
}
console.log(output);
// Do not change:
//console.log(output);

