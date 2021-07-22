

window.addEventListener('DOMContentLoaded', function() {

 // Log in immitation

 let logInBtn = document.querySelector('.btn-log-in'),
     logOutBtn = document.querySelector('.btn-log-out'),
     userMenu = document.querySelector('.user-menu');
					

	function logIn() {
		logInBtn.classList.remove('btn-log-in-active');
		userMenu.classList.add('user-menu-active');

		console.log("Log in");
	}

	function logOut() {
		userMenu.classList.remove('user-menu-active');
		logInBtn.classList.add('btn-log-in-active');

		console.log("Log out");
	}
 
	logInBtn.addEventListener('click', logIn);
	logOutBtn.addEventListener('click', logOut);
	
	// Slider

	
});