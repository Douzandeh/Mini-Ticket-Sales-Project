let countrySelectBox = document.querySelector(".countrySelect");
let citySelect = document.querySelector(".citySelect");
let countrysData = {
	Iran: ["Mashhad" , "Tehran" , "Shiraz"],
	Canada: ["Vancover" , "Toronto"],
	US: ["New York" , "Los Angeles"],
}

countrySelectBox.addEventListener("change" , function  () {
	if (countrySelectBox.value === "Please Select") {
		citySelect.innerHTML = '';
		citySelect.innerHTML += `<option>Select City</option>`;
	}else {
		let minCountryName = countrySelectBox.value
		let minCountryCitys = countrysData[minCountryName];
		citySelect.innerHTML = '';
		minCountryCitys.forEach(function  (city) {
			citySelect.innerHTML += `<option>${city}</option>`;
		})	
	}
})