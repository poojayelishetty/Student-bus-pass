function validateForm() {
	  var p = document.forms["myForm2"]["name"].value;
	  var q = document.forms["myForm2"]["rollno"].value;
	  var roll =/^(1602-1[0-9]-73[2-7]-[0-3][0-9][0-9])$/;
	  if (p=="") {
		    alert("Name must be filled out");
		    return false;
		  }
	  if (!roll.test(q)) {
		    alert("Invalid Roll no.");
		    return false;
		  }
}