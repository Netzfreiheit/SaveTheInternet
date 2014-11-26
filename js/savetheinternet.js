// Opens a popup window at target url 
function loadShareWindow(url)
{
	var left = (screen.width/2)-(660/2);
	var top = (screen.height/2)-(300/2);
	var sharingWindowReference = window.open(url, '_blank','width=660,height=300,left='+left+',top='+top);
}

// Sets header height to 100% height
function configureHeaderHeight()
{
	var autoHeight = $('#home-header-wrap').height();
	autoHeight += 200;
	var res = getWindowResolution();
	var optimalHeight = res.h; // Accounting for navigation

	if (autoHeight < optimalHeight)
	{
		$('#home-header-wrap').css('height',optimalHeight+'px');

		contentHeight = $('#home-header-valign-wrap').height();
		heightDiff = optimalHeight - 132 - contentHeight;

		$('#home-header-valign-wrap').css('padding-top',(heightDiff/2)+'px');
	}
}

// Detects then returns window resolution 
function getWindowResolution() 
{
	var windowWidth, windowHeight; // store window resolution and height
	if (document.body) 
	{
		if (document.body.offsetHeight && document.body.offsetWidth) 
		{
			windowWidth = document.body.offsetWidth;
			windowHeight = document.body.offsetHeight;
		}
	}
	if (document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.offsetWidth ) 
	{
		windowWidth = document.documentElement.offsetWidth;
		windowHeight = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) 
	{
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
	}
	var resolution = {w:windowWidth,h:windowHeight};
	return resolution;
}

// Gathers what url vars are present and puts them in the take action form
// This function should only be called on the take action page
function updateFormVars()
{
	// Collect first name GET var iff exists and assign it to the first name field.
	var firstName = getUrlVars()["first-name"];
	if (typeof firstName !== 'undefined')
	{
		firstName = firstName.replace(/\+/g,' ');
		//firstName = decodeURIComponent(firstName);
		
		$('#firstName').val(firstName);
	}

	// Collect last name GET var iff exists and assign it to the last name field.
	var lastName = getUrlVars()["last-name"];
	if (typeof lastName !== 'undefined')
	{
		lastName = decodeURIComponent(lastName);
		lastName = lastName.replace(/\+/g,' ');
		$('#lastName').val(lastName);
	}

	// Collect email GET var iff exists and assign it to the email field.
	var email = getUrlVars()["email"];
	if (typeof email !== 'undefined')
	{
		email = email.replace(/\+/g,' ');
		email = decodeURIComponent(email);
		
		$('#email').val(email);
	}

	// Collect country GET var iff exists and assign it to the country dropdown.
	var country = getUrlVars()["country"];
	if (typeof country !== 'undefined')
	{
		country = country.replace(/\+/g,' ');
		country = decodeURIComponent(country);
		$('#country').val(country);
	}
}

// Reads the window URL and returns an object of GET vars
function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}



