/*
* enigma function, the most advance encryption technology available - so technologically advanced, it AUTOMAGICALLY converts inputs to UPPERCASE and can even IGNORE strange characters!!!
*
* Will take a string and return a new string of letters ALL UPPERCASE -- seemingly unrelated, and totally uncrackable to the untrained eye, but have no fear, the enigma function can take that
* IMPOSSIBLE TO CRACK encrypted text and DECRYPT it!!
*
* */

function enigma() {

	/* creates empty array to repopulate as we loop through the input string */
	var encrypted = [];

	/* array of TOP SECRET ROT13 super secret codes the first item is the input, the second, the super secret output */

	var rot = {
		'+':' ',
		'A': 'N',
		'B': 'O',
		'C': 'P',
		'D': 'Q',
		'E': 'R',
		'F': 'S',
		'G': 'T',
		'H': 'U',
		'I': 'V',
		'J': 'W',
		'K': 'X',
		'L': 'Y',
		'M': 'Z',
		'N': 'A',
		'O': 'B',
		'P': 'C',
		'Q': 'D',
		'R': 'E',
		'S': 'F',
		'T': 'G',
		'U': 'H',
		'V': 'I',
		'W': 'J',
		'X': 'K',
		'Y': 'L',
		'Z': 'M'
	};
			/* grabbing the input from the form on the front end by Id and assigning it to a new variable */
	let txtInput = document.getElementById('topSecret').value;

			/* grabbing the output from the form on the front end by Id and assigning it to a new variable */
	let txtOutput = document.getElementById('return');

			/* changing all of the character of the input string to UPPERCASE because I was too lazy to add another 26 elements to my array... */
	let upperCase = txtInput.toUpperCase();

			/* then I replace all of the spaces in the new string with + so that I don't misplace them */
	let newString = upperCase.replace(/ /g,"+");

			/* this is how I loop through your top secret text and convert it with my super top secret key */
	for(var i = 0; i < newString.length; i++){

				/* I check if the character you entered is in my super top secret database of characters */
		if(rot.hasOwnProperty(newString[i])) {

					/* if it is, I make my super top secret conversion and save it for later */
			encrypted.push(rot[newString[i]]);

					/* otherwise, if your character is not in my database */
		} else {

					/* then I just leave it there */
			encrypted.push(newString[i]);
		}
	}

	/* finally, I take my new super top secret string that is completely unrecognizable to you and I output it on the front end */
	txtOutput.value = encrypted.join('');
}




