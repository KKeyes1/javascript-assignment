/**
 *
 * this function gathers the input from the front user
 * then it creates an array from the text string
 * then it loops through the array, passing each word element to the letterArray() function which returns a new array of letters
 * then it passes the new array of letters to the shuffle() function which returns the same array with the letters shuffled
 * this array is stored in finalArray
 *
 * in order to return a string to the user finalArray is passed to remakeWords() that joins the letter elements into one word element
 * then the array of shuffled words is passed to buildAString() to be joined with a space inbetween elements
 *
 * this function DOES NOT currently sanitize the input
 *
 **/
function anagrams() {
/* grabs the output field by id */
	let txtOutput = document.getElementById('return');
/* grabs the value of the input field on the front end by id */
	let txtInput = document.getElementById('topSecret').value;
/* turns string into array by separating by spaces  */
	let wordArray = txtInput.split(" ");
/* sets up an empty array to load */
	let finalArray = [];
/* loops through array of the string */
	for(let i = 0; i < wordArray.length; i++) {
/* for each element in the array, assign the word to word */
		let word = wordArray[i];
/* call letterArray to turn word into array of letters, saves result as newWordArray */
		let newWordArray = letterArray(word);
/* passes letter array to shuffle to shuffle the order, returns array in new order */
		let newShuffledWord = shuffle(newWordArray);
/* stores new shuffle array in finalArray */
		finalArray.push(newShuffledWord);
	}
/* passes the completed finalArray to remake words to concatenate the letter elements of each array to return an array of words */
	let newWordsArray = remakeWords(finalArray);
/* passes the new word array to buildAString to concatenate the elements with a space in between and convert to a string */
	let outputString = buildAString(newWordsArray);
/* sets the value of the output box to the outputString */
	txtOutput.value = outputString;
}
/**
 *
 * function for looping through an array of words and parsing them into a new array of letters, returns array
 *
 **/
function letterArray(word) {
	let newArr = word;
	let tempLetterArray = [];
	for (let j = 0; j < newArr.length; j++ ) {
		tempLetterArray.push(newArr[j]);
}
return tempLetterArray;
}
/**
 *
 *knuth-shuffle taken from coolaj86 on github
 *
 *takes array and re-orders the elements randomly
 *
 **/
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
/**
 *
 * takes an array and joins the elements - used here to take reordered letters and make new "words"
 *
 **/
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
/**
 *
 * takes an array and creates a string out of the elements and adds spaces
 *
 **/
function buildAString(array) {
	let oldArray = array;
	let newString = "";
	for (let i = 0; i < oldArray.length; i++) {
		let arrayString = oldArray[i];
		newString = newString + " " + arrayString;
	}
	return newString;
}