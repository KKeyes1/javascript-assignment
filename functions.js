function enigma() {

	var encrypted = [];

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

	let txtInput = document.getElementById('topSecret').value;
	let txtOutput = document.getElementById('return');
	let upperCase = txtInput.toUpperCase();
	let newString = upperCase.replace(/ /g,"+");
	console.log(txtInput);
	for(var i = 0; i < newString.length; i++) {
		if(rot.hasOwnProperty(newString[i])) {
			encrypted.push(rot[newString[i]]);
		} else {
			encrypted.push(newString[i]);
		}
	}
	txtOutput.value = encrypted.join('');
}


