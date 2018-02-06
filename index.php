<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Javascript Assignment</title>

		<link rel="stylesheet" href="style.css">

		<script type="text/javascript" src="enigma.js"></script>
		<script type="text/javascript" src="bananagrams.js"></script>
	</head>
	<body>
		<h1>Enigma</h1>
		<form action = "">
			<fieldset>
				<label>Enter your the text you need to make super secret, please: </label>
				<input type = "text" id = "topSecret" />
				<input type = "button" value = "Encrypt/Decrypt" onclick = "enigma()" />
				<input type = "button" value = "Anagrams" onclick = "bananagrams()" />
				<label>Super secret, uncrackable text:</label>
				<input type="text" id="return" />
			</fieldset>
		</form>
	</body>
</html>