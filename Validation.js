function validateForm() {
	  var t1 = document.forms["myForm"]["pyear"].value;
	  var t2 = document.forms["myForm"]["hticket"].value;
	  var t3 = document.forms["myForm"]["dob"].value;
	  var t4 = document.forms["myForm"]["name"].value;
	  var t5 = document.forms["myForm"]["rollno"].value;
	  var t6 = document.forms["myForm"]["bpoint"].value;
	 // var t7 = document.forms["myForm"]["name"].value;
	  var dob =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
	  var roll =/^(1602-1[0-9]-73[2-7]-[0-3][0-9][0-9])$/;
	  if (t1 == "") {
	    alert("SSC pass of year must be filled out");
	    return false;
	  }
	  if (t2 == "") {
		    alert("Hall ticket must be filled out");
		    return false;
		  }	  
	  if (!dob.test(t3)) {
		    alert("Invalid dob");
		    return false;
		  }
	  if (t4=="") {
		    alert("Name must be filled out");
		    return false;
		  }
	  if (!roll.test(t5)) {
		    alert("Invalid Roll no.");
		    return false;
		  }
	  if (t6=="") {
		    alert("Boarding point must be filled out");
		    return false;
		  }
	}