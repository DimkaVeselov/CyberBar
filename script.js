gsap.registerPlugin(ScrollTrigger);

//HEADER

ScrollTrigger.create({
	trigger: '.header__wrap',
	start: '50vw',
	end: '250%',
	markers: true,
	toggleClass: {
		targets: '.left_animation, .right_animation ',
		className: 'active',
	},
});

ScrollTrigger.create({
	trigger: '.header__wrap',
	start: '75vw',
	end: '250%',
	// markers: true,
	toggleClass: {
		targets: '.cup ',
		className: 'active',
	},
});

ScrollTrigger.create({
	trigger: '.header__wrap',
	start: '175vw',
	end: '250%',
	// markers: true,
	toggleClass: {
		targets: '.sandwich ',
		className: 'active',
	},
});

//CONTENT

//PHONE

const upPhone = gsap.timeline();

upPhone.fromTo('.down_phone', { y: 0 }, { y: '125%' });

ScrollTrigger.create({
	animation: upPhone,
	trigger: '.phone__app',
	start: 'top center',
	end: '150% center',
	scrub: true,
	// markers: true,
});

const downPhone = gsap.timeline();

downPhone.fromTo('.up_phone', { y: 0 }, { y: '-150%' });

ScrollTrigger.create({
	animation: downPhone,
	trigger: '.phone__app',
	start: 'top center',
	end: '150% center',
	scrub: true,
	// markers: true,
});

//TEXT

