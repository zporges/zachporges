<?php
	if(isset($_POST['suggestionssubmit']))
	{
		$message = "New message from Comix: ".strip_tags($_POST['suggestions']);
		mail("ascottp120@gmail.com", "New message from Comix", $message);
		echo("<p>Thanks!</p>");
	}
	
	if(isset($_POST['applyingsubmit']))
	{
		$message = "New message from Comix: ".strip_tags($_POST['applying']);
		mail("ascottp120@gmail.com", "New message from Comix", $message);
		echo("<p>Thanks!</p>");
	}
	
	if(isset($_POST['socialmediasubmit']))
	{
		$message = "New message from Comix: ".strip_tags($_POST['socialmedia']);
		mail("ascottp120@gmail.com", "New message from Comix", $message);
		echo("<p>Thanks!</p>");
	}
?>

<html>
	<head>
	
		<title>
			COMIX co.
		</title>
		
		<link rel="stylesheet" type="text/css" href="styles/main.css" />
	
	
	</head>
	
	<body>
		<h1>
			COMIX co.
		</h1>
		
		<h2>
			There is nothing we don't do, except for making jam sandwiches.
		</h2>
		
		<p>
			Here is a list of what we do:
		</p>
		
		<ul>
			<li>
				We make gifting and welcoming cards
			</li>
			<li>
				drawings
			</li>
			<li>
				comics, of course
			</li>
		</ul>
		
		<p>
			COMIX does a lot of things, but we are always happy to take more suggestions! Below, there is a suggestion column for your ideas of improving this special community!
		</p>
		
		<p>
			Visit our company <a href="http://instagram.com/ascott120comix/">Instagram page</a>.
		</p>
		
		<form action = "" method = "post">
			Suggestions: <br />
			<input name = "suggestions" type = "text" /><br />
			<input name = "suggestionssubmit" type = "submit" />
		</form>
		
		<form action = "" method = "post">
			Applying: <br />
			<input name = "applying" type = "text" /><br />
			<input name = "applyingsubmit" type = "submit" />
		</form>
		
		<form action = "" method = "post">
			Social Media page: <br />
			<input name = "socialmedia" type = "text" /><br />
			<input name = "socialmediasubmit" type = "submit" />
		</form>

	</body>

</html>