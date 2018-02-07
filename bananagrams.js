function bananagrams() {

	let txtOutput = document.getElementById('return');

	let txtInput = document.getElementById('topSecret').value;

	let wordArray = txtInput.split(" ");

	let finalArray = [];

	for(let i = 0; i < wordArray.length; i++) {

		let word = wordArray[i];

		let newWordArray = letterArray(word);

		let newShuffledWord = shuffle(newWordArray);

		finalArray.push(newShuffledWord);
	}

	let newWordsArray = remakeWords(finalArray);

	let outputString = buildAString(newWordsArray);

	txtOutput.value = outputString;
}

function letterArray(word) {

	let newArr = word;

	let tempLetterArray = [];

	for (let j = 0; j < newArr.length; j++ ) {

		tempLetterArray.push(newArr[j]);

}

return tempLetterArray;

}





function shuffle(array) {
	let currentIndex = array.length
		, temporaryValue
		, randomIndex
	;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

function anotherFunction (array) {

	let txtOutput = document.getElementById('return');

	let newArray = array;

	let newOutput = "";

	for (let i = 0; i < newArray.length; i++) {
		let sentence = " ";
		let shuffledWord = newArray[i];
		txtOutput.value = shuffledWord.join('');

	}

	return txtOutput.value = newOutput;
}


function remakeWords(array) {

	let oldArray = array;

	let newArray = [];

	for (let i = 0; i < oldArray.length; i++) {
		let arrayElement = oldArray[i];
		let newWord = arrayElement.join('');
		newArray.push(newWord);
	}
	return newArray;
}

function buildAString(array) {

	let oldArray = array;

	let newString = "";

	for (let i = 0; i < oldArray.length; i++) {

		let arrayString = oldArray[i];
		newString = newString + " " + arrayString;
	}
	return newString;
}