// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
const text = args[0];
const letter = args[1];
let result = 0
for (i = 0; i <= text.length; i++){
// console.log(i);
// console.log(text[i]);

if (text[i] === letter){
result ++;
}
}


const output = result;

// Do not change:
console.log(output);

