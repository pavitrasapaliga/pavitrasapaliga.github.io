let regexResult = false;
var regex;

document.getElementById("textBoxFullName").onchange = function() {
	regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
	if(!regex.test(document.getElementById("textBoxFullName").value)) {
		document.getElementById("pName").style.visibility = "visible";
		document.getElementById("pName").innerHTML = "Please enter a valid name. eg: firstname lastname";
		regexResult = false;
	} else {
		document.getElementById("pName").style.visibility = "hidden";
		regexResult = true;
	}
}

document.getElementById("textAreaAddress").onchange = function() {
	var regex = /^[\S\s]/;
	if(!regex.test(document.getElementById("textAreaAddress").value)) {
		document.getElementById("pAddress").style.visibility = "visible";
		document.getElementById("pAddress").innerHTML = "Please enter a valid address.";
		regexResult = false;
	} else {
		document.getElementById("pAddress").style.visibility = "hidden";
		regexResult = true;
	}
}

document.getElementById("textBoxEmail").onchange = function() {
	regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!regex.test(document.getElementById("textBoxEmail").value)) {
		document.getElementById("pEmail").style.visibility = "visible";
		document.getElementById("pEmail").innerHTML = "Please enter a valid email. eg: example@mail.com";
		regexResult = false;
	} else {
		document.getElementById("pEmail").style.visibility = "hidden";
		regexResult = true;
	}
}

document.getElementById("textBoxNumber").onchange = function() {
	var regex = /^\d{10}$/;
	if(!regex.test(document.getElementById("textBoxNumber").value)) {
		document.getElementById("pNumber").style.visibility = "visible";
		document.getElementById("pNumber").innerHTML = "Please enter a valid phone number.eg: 1234567890";
		regexResult = false;
	} else {
		document.getElementById("pNumber").style.visibility = "hidden";
		regexResult = true;
	}
}

document.getElementById("textBoxPhotos").onchange = function() {
	var regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
	if(!regex.test(document.getElementById("textBoxPhotos").value)) {
		document.getElementById("pPhotos").style.visibility = "visible";
		document.getElementById("pPhotos").innerHTML = "Please enter a valid url.";
		regexResult = false;
	} else {
		document.getElementById("pPhotos").style.visibility = "hidden";
		regexResult = true;
	} 
}

function validationFunc(value) {
	
	if (value == "" || value == null || value == undefined) {
		
		return false;
	}
	return true;
}

function validateGender() {
	let genderElements = document.getElementsByName("gender");
	for(i = 0; i < genderElements.length; i++) { 
		if(genderElements[i].checked){ 
			return true;
			break;
		}
	} 
	return false;
	
}


function validate() {
	var fullName, address, email, phoneNumber, hobbies, photos ="";
	
	fullName = document.getElementById("textBoxFullName").value;
					
	address = document.getElementById("textAreaAddress").value;
		
	email = document.getElementById("textBoxEmail").value;
		
	phoneNumber = document.getElementById("textBoxNumber").value;
		
	hobbies = document.getElementById("textBoxHobbies").value;

	photos = document.getElementById("textBoxPhotos").value;
		
	if(regexResult && validationFunc(fullName) && validateGender() && validationFunc(address) && validationFunc(email) && validationFunc(phoneNumber) && validationFunc(photos)) {
		redirectFunction();
		return true;
	}
	window.alert("All fields are mandatory.You either have incomplete fields or not entered according to the format. Please check your information before submitting");
	return false;
	
	
	
 
 
}

function redirectFunction() {
	
      window.open("html/profile.html");
   }	