
import Splide from '@splidejs/splide';


document.addEventListener('DOMContentLoaded', () => {

	new Splide( '.review-slider', { 
		classes :{
			arrow : 'splide__arrow review-slider__arrow',
	},
	pagination:false,

	} ).mount();
	new Splide( '.review-slider_bg', { 
		classes :{
			arrow : 'splide__arrow review-slider__arrow',
	},
	pagination:false,

	} ).mount();

})
