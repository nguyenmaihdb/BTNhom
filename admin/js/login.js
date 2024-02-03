const userName = "admin";
const password = "admin";

const successful = document.querySelector(".Successful");
const buttonSuccessful = document.querySelector(".Successful button");

const failed = document.querySelector(".Failed");
const buttonFailed = document.querySelector(".Failed button");

function checkLogin(){
	const inputUserName = document.getElementById("Input-user-name");
	const inputPassword = document.getElementById("Input-password");
	if((inputUserName.value === userName) && (inputPassword.value === password)){
		successful.style.display = "block";
		setTimeout(function(){
			successful.style.opacity = "1";
		},0);
		buttonSuccessful.addEventListener('click', function(){
			successful.style.opacity = "0";
			setTimeout(function(){
				successful.style.display = "none";
			},850);
		});
	}
	else{
		failed.style.display = "block";
		setTimeout(function(){
			failed.style.opacity = "1";
		},0);
		buttonFailed.addEventListener('click', function(){
			failed.style.opacity = "0";
			setTimeout(function(){
				failed.style.display = "none";
			},850);
		});
	}
	return false;
}