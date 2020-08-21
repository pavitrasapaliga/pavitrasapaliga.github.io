 function getData(){
	let node = document.createTextNode (localStorage.getItem("fullName"));
	document.getElementById("labelName").appendChild(node);
	
	node = document.createTextNode (localStorage.getItem("gender"));
	document.getElementById("labelGender").appendChild(node);
	
	node = document.createTextNode (localStorage.getItem("address"));
	document.getElementById("labelAddress").appendChild(node);
	
	node = document.createTextNode (localStorage.getItem("email"));
	document.getElementById("labelEmail").appendChild(node);
	
	node = document.createTextNode (localStorage.getItem("phoneNumber"));
	document.getElementById("labelPhoneNumber").appendChild(node);
	
	node = document.createTextNode (localStorage.getItem("hobbies"));
	document.getElementById("labelHobbies").appendChild(node);
	
	document.getElementById("imgPhotos").src = localStorage.getItem("photos");
	
	
	let jsonEducations = localStorage["educationsString"];
	let educations = JSON.parse(jsonEducations);
	if(educations.length !== 0){
		let table = document.getElementById("tableEducation");
			let row = "";
		for(let index = 0;index < educations.length; index++) {
			table.insertRow(index+1).outerHTML = '<tr class="tableRow" >\
						<td></td>\
					<td>'+JSON.parse(educations[index]).level+'</td>\
					<td>'+JSON.parse(educations[index]).year+'</td>\
					<td>'+JSON.parse(educations[index]).grade+'</td>\
					</tr>';
		}
	}
	
	let jsonSkills = localStorage["skillsString"];
	let skills = JSON.parse(jsonSkills);
	if(skills.length !== 0){
		let table = document.getElementById("tableSkill");
			let row = "";
		for(let index = 0;index < skills.length; index++) {
			table.insertRow(index+1).outerHTML = '<tr class="tableRow" >\
						<td></td>\
					<td>'+JSON.parse(skills[index]).skillName+'</td>\
					<td>'+JSON.parse(skills[index]).rating+'</td>\
					</tr>';
		}
	}
	
}

