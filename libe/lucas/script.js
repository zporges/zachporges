//add event listener to button
var button = document.getElementById("submit");
button.addEventListener("click", fillStory, false);
//fill the story after the button is pressed
function fillStory(e) {
	//prevent the page from refreshing
	e.preventDefault();
	//get the story paragraph
	var story=document.getElementById("story");
	//get rthe error paragraph
	var error = document.getElementById("error");
	//get the values input by the user
	var name=document.getElementById("formName").value;
	//if all of the fields are completed, show and fill in the story
	if(name.length > 0){
		//change css of the story so it is visible
		story.className = "visible";
		//change the css of the error so it is invisible
		error.className = "invisible"
		//add the variables to the story
		document.getElementById("storyname").innerHTML = name;
	} 
	//if the fields are not completed, give an error message
	else{
		story.className="invisible";
		error.className="visible";
		
	}
}
