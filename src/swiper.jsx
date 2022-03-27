const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	autoHeight: false,
	centeredSlides:true,
	slidesPerView: 1,

	// Responsive breakpoints
	breakpoints: {
	600: {
      slidesPerView:2,
			  spaceBetween: 40,
    },
    1025: {
      slidesPerView: 3,
			  spaceBetween: 40,
    },
	},

	pagination: {
		el: ".swiper-pagination"
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
});
