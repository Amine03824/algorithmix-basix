// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
//const array = args.toString();
//let output = [];
// console.log(array.length);
//for (let i = array.length - 1; i >= 0; i--){
//output.push(array[i]);
// console.log(output);;
//}
//output = output.toString();
// console.log(typeof args);

let output = "";
let str = args[0];
for (let i = str.length -1; i >=0; i--){
output += str[i];
}

// Do not change:
console.log(output);
