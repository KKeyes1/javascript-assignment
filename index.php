<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Javascript Assignment</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css">

		<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"></script>

		<script type="text/javascript" src="enigma.js"></script>
		<script type="text/javascript" src="anagrams.js"></script>
	</head>
	<body>
		<div class="container">
			<h1>Javascript Functions</h1>
			<form onsubmit="return false;" action="">
				<div class="form-group">
					<input class="form-control form-control-lg mb-3" type = "text" id = "topSecret" placeholder="INPUT" autofocus />
					<div class="row center">
						<div class="col-4">
							<button class="btn btn-success form-control" role="button" onclick="enigma()">ROT13</button>
						</div>
						<div class="col-4">
							<button class="btn btn-success form-control" role="button" onclick="anagrams()">Anagrams</button>
						</div>
					</div>
				</div>
			</form>
			<form action="">
				<div class="form-group">
					<input class="form-control form-control-lg" type="text" id="return" placeholder="OUTPUT" />
				</div>
			</form>
		</div>
	</body>
</html>