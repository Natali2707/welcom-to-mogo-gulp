import Splide, { LOOP } from "@splidejs/splide";

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



document.addEventListener("DOMContentLoaded", () => {
	const revSliderSettings = {
		type: "loop",
		gap: "40px",
		classes: {
			arrow: "splide__arrow review-slider__arrow",
		},
		pagination: false,

		breakpoints: {
			560: {
				arrows: false,
				pagination: true,
				classes: {
					pagination: "splide__pagination review-slider__pagination",
				},
			},
		},
	};

	new Splide("#review-slider", revSliderSettings).mount();

	new Splide("#author-review", revSliderSettings).mount();




	// Promo slider
	const promoSlides = document.querySelectorAll("[data-slide-title]");
	let slideTitles = [];

	promoSlides.forEach(function (slide) {
		slideTitles.push(slide.dataset.slideTitle);
	});

	// console.log(slideTitles);

	const promoSlider = new Splide(".promo__slider", {
		speed: 10000,
		slidesToShow: 1,
		adaptiveHeight: true,
		adaptiveWidth: true,

		arrows: false,
		drag: false,
		// autoplay: true,
		type: `loop`,
		classes: {
			pagination: "splide__pagination promo__pagination",
		},
	});

	promoSlider.on("pagination:mounted", function (data) {
		// You can add your class to the UL element
		data.list.classList.add("splide__pagination--custom");

		// `items` contains all dot items
		data.items.forEach(function (item) {
			item.button.textContent = `${slideTitles[item.page]}`;
		});
	});

	promoSlider.mount();


	// 	// Promo slider start

	// 	const promoSlides = document.querySelectorAll(`[data-slide-title]`);
	// 	let slideTitles = [];

	// 	promoSlides.forEach(function (slide) {
	// 		slideTitles.push(slide.dataset.slideTitle);
	// 	});

	// 	console.log(slideTitles);

	// 	const promoSlider = new Splide(".promo__slider", {

	// 		speed: 10000,
	//   slidesToShow: 1,
	//   adaptiveHeight: true,
	//   adaptiveWidth: true,

	// 		arrows: false,
	// 		drag: false,
	// 		// autoplay: true,
	// 		type: `loop`,
	// 		classes: {
	// 			pagination: "splide__pagination promo__pagination",
	// 		},
	// 	});


	// 	promoSlider.on("pagination:mounted", function (data) {
	// 		data.list.classList.add("splide__pagination--custom");

	// 		// `items` contains all dot items
	// 		data.items.forEach(function (item) {
	// 			//   item.button.textContent = String( item.page + 1 );
	// 			item.button.textContent = `${slideTitles[item.page]}`;
	// 		});
	// 	});

	// 	promoSlider.mount();

	// mobile menu
	const headerBurger = document.querySelector(".header__burger");
	const headerNav = document.querySelector(".header__nav");
	const headerClose = document.querySelector("header__burger-close");

	const headerLink = document.querySelectorAll(".header__menu-link");

	headerBurger.addEventListener("click", function (event) {
		headerBurger.classList.toggle("burger_closed");

		headerNav.classList.toggle("header__nav_opened");
		headerClose.classList.toggle("header__burger-close_opened");
	});

	headerLink.forEach(function (menuLink) {
		menuLink.addEventListener("click", function (event) {
			event.preventDefault();
			menuLink.classList.toggle("_active");
		});
	});
});
