window.onscroll = function() {myFunction()};

function myFunction() {
	let heightActivateAnimation = document.querySelector('header').offsetHeight
								+document.querySelector('#Top-main').offsetHeight
								+document.querySelector('#About-main').offsetHeight
								+document.querySelector('.Professional-skills-main-content>h2').offsetHeight
								+64;
	let heightViewport = window.innerHeight;
	if (document.documentElement.scrollTop > (heightActivateAnimation - heightViewport) + 20) {
		let i = 1;
		document.querySelectorAll('.Level-animation>div').forEach((element) => {
			element.style.animation = 'level_skills_animation 1s both';
			element.style.animationDelay = `0.${i}s`;
			i++;
		});
	}
	else{
		document.querySelectorAll('.Level-animation>div').forEach((element) => {
			element.style.animation = 'none';
			element.style.width = '0';
		});
	}
}
