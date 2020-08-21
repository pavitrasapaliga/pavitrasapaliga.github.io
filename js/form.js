var fullName, gender, address, email, phoneNumber, hobbies, photos ="";
let educationCounter = 0, skillCounter = 0;

let educations = [];
let skills = [];

//Adds new row to education table or skill table accordingly 
function addRow(tableId) {
			let table = document.getElementById(tableId);
			let rowCount = table.rows.length;
			let row = "";
			if(tableId === "tableEducation") 
				row = table.insertRow(rowCount-1).outerHTML = addEducation();
			if(tableId === "tableSkill")
				row = table.insertRow(rowCount-1).outerHTML = addSkill();

			

		}

//Deletes the row on button click for both education and skill rows
function deleteRow(rowId) {
	//**********To keep track of number of education rows and skill rows*************************//
	let isEducation = rowId.indexOf("Education");
	let isSkill = rowId.indexOf("Skill");
	if(isEducation !== -1)
		educationCounter--;
		
	
	if(isSkill != -1)
		skillCounter--;
	//******************************************************************************************//
	
	document.getElementById(rowId).outerHTML ="";
	
}

//Adds html code to add a new education row 
function addEducation(){
	educationCounter = educationCounter+1;
	
	return '<tr class="tableRow" id="tableEducationRow'+educationCounter+'" >\
						<td></td>\
					<td>\
						<select id="selectEducationLevel'+educationCounter+'" name="level">\
							<option value="SSC">SSC</option>\
							<option value="HSC">HSC</option>\
							<option value="Diploma">Diploma</option>\
							<option value="BE">BE</option>\
							<option value="BTech">BTech</option>\
							<option value="BCA">BCA</option>\
							<option value="MCA">MCA</option>\
						</select>\
					</td>\
					<td><input type="year" class="textbox input" id="textBoxEducationYear'+educationCounter+'" pattern="19[7-9]{1}[0-9]{1}|20[0-1]{1}[0-9]{1}|2020"></td>\
					<!--Only years from 1970 - 2020 excepted through pattern-->\
					<td><input type="text" class="textbox input" id="textBoxEducationGrade'+educationCounter+'" pattern="[A-F]|O|[0-9]{0,2}|100"></td>\
					<!--Accepts grades from A-F, O or % from 0-100-->\
					<td><button type="button" class="btn" id="btnRemoveEducation'+educationCounter+'" onclick="deleteRow(\'tableEducationRow'+educationCounter+'\')">Remove</button></td>\
					</tr>';
}

//Adds html code to add a new skill row
function addSkill() {
	skillCounter = skillCounter+1;
	
	return '<tr class="tableRow" id="tableSkillRow'+skillCounter+'" >\
					<td></td>\
					<td><input type="text" class="textbox input" id="textBoxSkillName'+skillCounter+'"></td>\
					<td>\
						<select id="selectSkillRating'+skillCounter+'" name="Rating">\
							<option value="0">0</option>\
							<option value="1">1</option>\
							<option value="2">2</option>\
							<option value="3">3</option>\
							<option value="4">4</option>\
							<option value="5">5</option>\
							<option value="6">6</option>\
							<option value="7">7</option>\
							<option value="8">8</option>\
							<option value="9">9</option>\
							<option value="10">10</option>\
						</select>\
					</td>\
					<td>\
						<button type="reset" class="btn" id="btnRemoveEducation'+skillCounter+'" onclick="deleteRow(\'tableSkillRow'+skillCounter+'\')">Remove</button>\
					</td><!--deletes the skill row-->\
				</tr>';
}

//Retrieves all the input data from the user onclick
function onSubmit(){
	
	redirectFunction();
	
	localStorage.setItem("fullName", document.getElementById("textBoxFullName").value);
	
	//Finds which radio button was checked and stores it's value accordingly
	let genderElements = document.getElementsByName("gender");
	for(i = 0; i < genderElements.length; i++) { 
        if(genderElements[i].checked){ 
			gender = genderElements[i].value;
			break;
		}
    } 
	localStorage.setItem("gender", gender);
			
	localStorage.setItem("address", document.getElementById("textAreaAddress").value);
	
	localStorage.setItem("email", document.getElementById("textBoxEmail").value);
	
	localStorage.setItem("phoneNumber", document.getElementById("textBoxNumber").value);
	
	localStorage.setItem("hobbies", document.getElementById("textBoxHobbies").value);

	localStorage.setItem("photos", document.getElementById("textBoxPhotos").value);
	
	debugger;
	//**************************************Education data**********************************//
	for(index = 0; index < educationCounter;index++) {
		let selectEduId = document.getElementById("selectEducationLevel"+(index+1));
		
		
		let education = {
			"level": selectEduId.value,
			"year": document.getElementById("textBoxEducationYear"+(index+1)).value,
			"grade": document.getElementById("textBoxEducationGrade"+(index+1)).value
		};
		//*******************For pushing objects into array******************************//
		if(educations.length == 0)
			educations.unshift(JSON.stringify(education));
		else
			educations.push(JSON.stringify(education));
		//*******************************************************************************//
	}
	
	var jsonEducation = JSON.stringify(educations);
	localStorage.setItem("educationsString", jsonEducation);
	
	//*****************************************Skill data***********************************//
	for(let index = 0; index < skillCounter; index++) {
		let selectSkillId = document.getElementById("selectSkillRating"+(index+1));
		
		let skill ={
			"skillName": document.getElementById("textBoxSkillName"+(index+1)).value,
			"rating": selectSkillId.value
		};
		
		//*******************For pushing objects into array******************************//
		if(skills.length == 0)
			skills.unshift(JSON.stringify(skill));
		else
			skills.push(JSON.stringify(skill));
		//*******************************************************************************//
		
	}
	
	
	
	var jsonSkill = JSON.stringify(skills);
		console.log(jsonSkill);
	localStorage.setItem("skillsString", jsonSkill);
	
	
}


function redirectFunction() {
	
      window.open("html/profile.html");
   }
   