console.log("hello");
console.log("hello world");
let header = document.querySelector(".header");

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 1) {
    header.classList.add("header_has-bg");
  } else {
    header.classList.remove("header_has-bg");
  }
});


import Splide from '@splidejs/splide';


document.addEventListener('DOMContentLoaded', () => {

const revSliderSettings = {
		type: "loop",
		gap: "40px",
		classes :{
			arrow : 'splide__arrow review-slider__arrow',
	},
	pagination:false,
	
	breakpoints :{
		560:{
			arrows:false,
			pagination:true,
			classes: {
				pagination: 'splide__pagination review-slider__pagination',
			},
		},
	}
	}

	new Splide( '#review-slider', revSliderSettings ).mount();

	new Splide( '#author-review', revSliderSettings ).mount();

	// mobile menu
	const headerBurger = document.querySelector(".header__burger");
	const headerNav = document.querySelector(".header__nav");
	const headerClose= document.querySelector("header__burger-close");
	const headerLink = document.querySelectorAll(".header__menu-link");


		headerBurger. addEventListener("click", function (event) {
		headerBurger.classList.toggle("burger_closed");
		headerNav.classList.toggle("header__nav_opened");
		headerClose.classList.toggle("header__burger-close_opened");
	});
		
headerLink.forEach(function(menuLink){


		menuLink. addEventListener("click", function (event) {
			event.preventDefault();
			menuLink.classList.toggle("_active");
		});
		
})
})