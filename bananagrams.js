function bananagrams() {
	var txtInput = document.getElementById("topSecret").value;
	var txtArray = txtInput.split(" ");
	var wordArray = [];
	var letterArray = [];
	for(i = 0; i < txtArray.length; i++ ) {
		wordArray.push(txtArray[i]);
		console.log(wordArray);
		for(j = 0; j < wordArray.length; j++) {
			letterArray.push(wordArray[j]);
			console.log(letterArray);
		}
	}
}