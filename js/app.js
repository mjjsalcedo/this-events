//Secret Menu Challenge!
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var revealSecret = document.getElementsByClassName("name");


for(i = 0; i<revealSecret.length; i++){
revealSecret[i].addEventListener("click", Toggle);
}

function Toggle(){
	var secretItem = this.querySelectorAll(".menu")[0];
	if (secretItem.style.display === "none") {secretItem.style.display = "block";
}else {
	secretItem.style.display = "none";
	}
}
