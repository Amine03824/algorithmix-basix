// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
let output = [];
let string = "";
for (arg of args){
	for (i = 0; i < arg.length; i++){
		if (arg[i] != ",") {
			string += arg[i];
			console.log(string);	
		} else {
			output.push(string);
			string = "" ;
		}
	}
}

// Do not change:
console.log(output);






