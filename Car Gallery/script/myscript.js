	/*global document,window,localStorage*/
	
	// let myHeading = document.querySelector('h1')
	// myHeading.textContent = 'Mandai';
	
	let carImage = document.querySelector('img');
	carImage.onclick = function()
	{
		let ndaeImage = carImage.getAttribute('src');
		
		if(ndaeImage === 'images/mustang7.jpg')
		{
			carImage.setAttribute('src','images/mustang2.jpg');
		}
		else if  (ndaeImage === 'images/mustang2.jpg')
		{
			carImage.setAttribute('src','images/mustang3.jpg');
		}
		else if  (ndaeImage === 'images/mustang3.jpg')
		{
			carImage.setAttribute('src','images/mustang5.jpg');
		}
		else 
		{
			carImage.setAttribute('src','images/mustang7.jpg');
		}
		
	}
	
	//Personallized Msg
	
	let  myButton = document.querySelector('button');
	let  myHeading = document.querySelector('h1');
	
	function setName()
	{
		let myName = window.prompt('Enter your name');
		// localStorage.setItem('name',myName);
		myHeading.textContent = 'Welcome '+ myName;
		
	}
	
	if(!localStorage.getItem('name'))
	{
		setName();
	}
	else
	{
		let storedName = localStorage.getItem('name');
		myHeading.textContent = 'Welcome '+ storedName;
	}
	
	myButton.onclick = function()
	{
		 setName();
	};