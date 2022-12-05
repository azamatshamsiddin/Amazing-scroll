document.querySelectorAll(".slider").forEach((item, index) => {
	window[`slider${index+1}`] = new Swiper(item, {
		freeMode: true,
		centeredSlides: true,
		mousewheel: true,
		slidesPerView: 1.75,
		direction: "vertical",
    slidesOffsetBefore: -125,
    loop: true
	});
});

bindSwipers(slider1, slider2, slider3, slider4)
