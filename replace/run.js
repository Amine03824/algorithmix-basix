// Do not change, helper to read arguments:

const args = process.argv.slice(2);

// Implement below:
let output = "";
if (args.length === 3){
        const textToReplace = args[0]; 
        const letterToSearch = args[1];   
        const replacementLetter = args[2];
        for (let i=0; i < textToReplace.length; i++){ 
                if (textToReplace[i] === letterToSearch){
                output += replacementLetter;
                } else {
                output += textToReplace[i];
                }
        }

} else {
        output = "Vous devez passer 3 arguments";        
}


// Do not change:

console.log(output);
