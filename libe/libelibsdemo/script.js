//add event listener to button
var button = document.getElementById("submit");
button.addEventListener("click", fillStory, false);

//fill the story after the button is pressed
function fillStory(e) {
	//prevent the page from refreshing
	e.preventDefault();
	//get the story paragraph
	var story = document.getElementById("story");
	//get the error paragraph
	var error = document.getElementById("error");
	
	//get the values input by the user
	var name = document.getElementById("formName").value;
	var place = document.getElementById("formPlace").value;
	var activity1 = document.getElementById("formActivity1").value;
	var activity2 = document.getElementById("formActivity2").value;
	
	//the selected food
	var food = "";
	
	//get the selected food
	if (document.getElementById('food1').checked) {
		food = document.getElementById('food1').value;
	}
	else if (document.getElementById('food2').checked) {
		food = document.getElementById('food2').value;
	}
	else if (document.getElementById('food3').checked) {
		food = document.getElementById('food2').value;
	}
	else if (document.getElementById('food4').checked) {
		food = document.getElementById('food2').value;
	}
	
	//if all of the fields are completed, show and fill in the story
	if(name.length > 0 && place.length > 0 && activity1.length > 0 && activity2.length > 0 && food.length > 0) {
		//change the css of the story so it is visible
		story.className = "visible";
		//change the css of the error so it is invisible
		error.className = "invisible";
		
		//add the variables to the story
		document.getElementById("storyName").innerHTML = name;
		document.getElementById("storyPlace").innerHTML = place;
		document.getElementById("storyActivity1").innerHTML = activity1;
		document.getElementById("storyActivity2").innerHTML = activity2;
		document.getElementById("storyFood").innerHTML = food;
	}
	//if the fields are not completed, give an error message
	else {
		story.className = "invisible";
		error.className = "visible";
	}
}