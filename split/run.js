// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
let  output = [];
let splitString = "";
const dividers = [",",";"];
for (arg of args) {
	// console.log("je suis à l'argument " + arg);
	for (let i=0; i < arg.length; i++){
		console.log("Je suis dans la boucle : " + i + "" + arg[i]);
		if (arg[i] === dividers[0] || arg[i] === dividers[1]){
			output.push(splitString);
			splitString = "";
		} else {
		splitString += arg[i];
		}
	// console.log("La splitString est : " + splitString);
	}
}

// Do not change:
console.log(output);

