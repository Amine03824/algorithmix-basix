// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
let output = [];
if (args.length === 2){
	let originalString = args[0];
	let delimiter = args[1];
	let splitString = "";
	for (let i = 0; i < originalString.length; i++){
		if (originalString[i] === delimiter){
			output.push(splitString);
			splitString = "";
		} else {
			splsitString += originalString[i];
		}
	}
	output.push(splitString);
} else {
	output = "2 arguments needed;"
}

// Do not change:
console.log(output);

