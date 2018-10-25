/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.transition = "0.5s";
	document.getElementById("main").style.opacity = "0.5";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.transition = "0.5s";
	document.getElementById("main").style.opacity = "1.0";
}

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
for (var i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var dropdownContent = this.nextElementSibling;
		if (dropdownContent.style.display === "block") {
			dropdownContent.style.display = "none";
		} else {
			dropdownContent.style.display = "block";
		}
	});
}