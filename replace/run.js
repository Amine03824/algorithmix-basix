// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
let text = args[0];
let characterToCheck = args[1];
let characterToAdd = args[2];

let output = ""
  for (let i = 0; i <  text.length; i++){
if (text[i] === characterToCheck){
output += characterToAdd
} 
else {
output +=text[i];
}
}
// Do not change:
console.log(output);

