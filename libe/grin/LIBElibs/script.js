//add event listener yo button
var button = document.getElementById("submit");
button.addEventListener("click", fillStory, false);

//fill story after button is pressed
function fillStory(e) {
	//prevent story from refreshing
	e.preventDefault();
	//get story
	var story = document.getElementById("story");
	//get error
	var error = document.getElementById("error");
	
	//get values input
	var name = document.getElementById("formName").value;
	var noun1 = document.getElementById("noun1form").value;
	var verb1 = document.getElementById("verb1form").value;
	var verb2 = document.getElementById("verb2form").value;
	//if all are filled in, show the story
	if(name.length > 0 && noun1.length > 0 && verb1.length > 0 && verb2.length >0 ) {
		//change css
		story.className = "visible";
		error.className = "invisible";
	
		
		//add the vars to story
		document.getElementById("storyName").innerHTML = name;
		document.getElementById("noun1story").innerHTML = noun1;
		document.getElementById("verb1story").innerHTML = verb1;
		document.getElementById("verb2story").innerHTML = verb2;
	}
	else {
		story.className = "invisible";
		error.className = "visible";
	}
	
		
	
	
	
	
	
}