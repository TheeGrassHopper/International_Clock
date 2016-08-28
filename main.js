$(document).ready(function(){

	var header = document.createElement('header');
		header.setAttribute('class','header');
	var headerText ='A SUPER SMART international clock that automatically adjusts months, days, hours, min, seconds, AM, or PM. Using DOM objects and JavaScript Logic and jQuary methods by - Alwan Mortada :)';
		$('body').append(header);
		$('.header').append(headerText);
		
	var currentTime = new Date();
	var day = ["Sunday", "Monday", "Tuesday", "wednesday","thursday", "friday", "saturday"];
		day = day[currentTime.getDay()];
		day = day.slice(0,3);
		day = day.toUpperCase();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
		months = months[currentTime.getMonth()];
		months = months.slice(0,3);

	function setAustinDiv(){
		var divAustin = document.createElement('div');
			divAustin.setAttribute('id','divAustin');
		var austinTime = document.createElement('div');
			austinTime.setAttribute('class','austinTime');
			$('body').append(divAustin);
			$('#divAustin').append(austinTime);
			$('#divAustin').append('<h2>Austin Time:</h2>');
		function displayTime(){
			var currentTime = new Date();
			var hours = currentTime.getHours();
			var minutes = currentTime.getMinutes();
			var seconds = currentTime.getSeconds();
			var meridiem = 'AM';
			// convert from 24 hours to 12 hour format
			// and keep track of the meridiem
			if(hours > 12){
				hours = hours -12;
				meridiem = 'PM';
			}
			// 0 AM and 0 PM should read as 12
			if(hours === 0){
				hours= 12;
			}

			if(hours < 10){
				hours = '0' + hours;
			}
			if(minutes < 10){
				minutes = '0' + minutes;
			}
			if(seconds < 10){
				seconds = '0' + seconds;
			}
		// 	// Then we set the text inside the clock div
		// 	// to the hours, minutes, seconds
			austinTime.innerText = months + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
		}
		// This calles out displayTime function to run
		setInterval(displayTime, 1000);
	}
	setAustinDiv();

	function setNewYorkDiv(){
		var newYorkDiv = document.createElement('div');
			newYorkDiv.setAttribute('id','NewYorkDiv');
		var newYorkTime = document.createElement('div');
			newYorkTime.setAttribute('class', 'newYorkTime');
			$('body').append(newYorkDiv);
			$('#NewYorkDiv').append(newYorkTime);
			$('#NewYorkDiv').append('<h2>New York Time:</h2>');
	
		function displayNYCTime(){
			var currentTime = new Date();
			var hours = currentTime.getHours();
				hours = hours + 1;
			var minutes = currentTime.getMinutes();
			var seconds = currentTime.getSeconds();
			var meridiem = 'AM';

			// convert from 24 hours to 12 hour format
			// and keep track of the meridiem
			if(hours > 12){
				hours = hours -12;
				meridiem = 'PM';
			}
			// 0 AM and 0 PM should read as 12
			if(hours === 0){
				hours = 12;
			}

			if(hours < 10){
				hours = '0' + hours;
			}
			if(minutes < 10){
				minutes = '0' + minutes;
			}
			if(seconds < 10){
				seconds = '0' + seconds;
			}
		// 	// Then we set the text inside the clock div
		// 	// to the hours, minutes, seconds
			newYorkTime.innerText = months + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
		}
		// This calles out displayTime function to run
		setInterval(displayNYCTime, 1000);
		}
	setNewYorkDiv();


	function setLondonDiv(){
		var currentTime = new Date();
		var londonDiv = document.createElement('div');
			londonDiv.setAttribute('id','londonDiv');
		var londonTime = document.createElement('div');
			londonTime.setAttribute('class', 'londonDivTime');
			$('body').append(londonDiv);
			$('#londonDiv').append(londonTime);
			$('#londonDiv').append('<h2>London Time:</h2>');
	
	
		function londontimeDiv(){
			var currentTime = new Date();
			var hours = currentTime.getHours();
				hours = hours + 6;
			var minutes = currentTime.getMinutes();
			var seconds = currentTime.getSeconds();
			var meridiem = 'AM';

			// convert from 24 hours to 12 hour format
			// and keep track of the meridiem
			if(hours > 12){
				hours = hours -12;
				meridiem = 'PM';
			}
			// 0 AM and 0 PM should read as 12
			if(hours === 0){
				hours = 12;
			}

			if(hours < 10){
				hours = '0' + hours;
			}
			if(minutes < 10){
				minutes = '0' + minutes;
			}
			if(seconds < 10){
				seconds = '0' + seconds;
			}
		// 	// Then we set the text inside the clock div
		// 	// to the hours, minutes, seconds
			londonTime.innerText = months + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
		}
		// This calles out displayTime function to run
		setInterval(londontimeDiv, 1000);
	}
	setLondonDiv();

	function setLaDiv(){
		var laDiv = document.createElement('div');
			laDiv.setAttribute('id','laDiv');
		var laTime = document.createElement('div');
			laTime.setAttribute('class', 'laTime');
			$('body').append(laDiv);
			$('#laDiv').append(laTime);
			$('#laDiv').append('<h2>Los Angeles Time:</h2>');
		function latimeDiv(){
			var currentTime = new Date();
			var hours = currentTime.getHours();
				hours = hours - 2;
			var minutes = currentTime.getMinutes();
			var seconds = currentTime.getSeconds();
			var meridiem = 'AM';

			// convert from 24 hours to 12 hour format
			// and keep track of the meridiem
			if(hours > 12){
				hours = hours - 12;
				meridiem = 'PM';
			}
			// 0 AM and 0 PM should read as 12
			if(hours === 0){
				hours = 12;
			}

			if(hours < 10){
				hours = '0' + hours;
			}
			if(minutes < 10){
				minutes = '0' + minutes;
			}
			if(seconds < 10){
				seconds = '0' + seconds;
			}
		// 	// Then we set the text inside the clock div
		// 	// to the hours, minutes, seconds
			laTime.innerText = months + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
		}
		// This calles out displayTime function to run
		setInterval(latimeDiv, 1000);
		}
	setLaDiv();
});