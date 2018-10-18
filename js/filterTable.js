function filterTable() {
	// Declare variables 
	var input = document.getElementById("search-input");
	var filter = input.value.toUpperCase();
	var table = document.getElementById("staff-table");
	var row = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (var i = 0; i < row.length; i++) {
		var name = row[i].getElementsByTagName("td")[1];
		var department = row[i].getElementsByTagName("td")[2];
		if (name || department) {
			if (department.innerHTML.toUpperCase().indexOf(filter) > -1 ||
				name.innerHTML.toUpperCase().indexOf(filter) > -1) {
				row[i].style.display = "";
			} else {
				row[i].style.display = "none";
			}
		}
	}
}

function dropdownFilter() {
	// Declare variables 
	var input = document.getElementById("dropdown-input");
	var filter = input.value.toUpperCase();
	var table = document.getElementById("staff-table");
	var row = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (var i = 0; i < row.length; i++) {
		var department = row[i].getElementsByTagName("td")[2];
		if (department) {
			if (department.innerHTML.toUpperCase().indexOf(filter) > -1) {
				console.log("indexof" + department.innerHTML.toUpperCase().indexOf(filter));
				row[i].style.display = "";
			} else {
				row[i].style.display = "none";
			}
		}
	}

	if (filter === "ALL") {
		for (var i = 0; i < row.length; i++) {
			row[i].style.display = "";
		}
	}
}
