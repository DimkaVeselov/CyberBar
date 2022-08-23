gsap.registerPlugin(ScrollTrigger);
const mm = window.gsap.matchMedia();

//MEDIA 501px
mm.add('(min-width: 501px)', () => {
	//HEADER
	ScrollTrigger.create({
		trigger: '.header__wrap',
		start: '50vw',
		end: '250%',
		// markers: true,
		toggleClass: {
			targets: '.left_animation-text, .right_animation-text ',
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

	//phone

	const upPhone = gsap.timeline();
	const downPhone = gsap.timeline();

	upPhone.fromTo(
		'.down_phone',
		{ y: 0, easy: Power3.easeOut },
		{ y: '-150%' }
	);

	ScrollTrigger.create({
		animation: upPhone,
		trigger: '.phone__app',
		start: 'top center',
		end: '150% center',
		scrub: true,
		// markers: true,
	});

	downPhone.fromTo(
		'.up_phone',
		{ y: 0, easy: Power3.easeOut },
		{ y: '150%' }
	);

	ScrollTrigger.create({
		animation: downPhone,
		trigger: '.phone__app',
		start: 'top center',
		end: '150% center',
		scrub: true,
		// markers: true,
	});

	//text

	const left = gsap.timeline();
	const right = gsap.timeline();
	const border = gsap.timeline();

	right.fromTo(
		'.first-text, .sandwich_mini, .third-text',
		{ x: '150%', easy: Power3.easeOut },
		{ x: '-100%' }
	);

	left.fromTo(
		'.beverage_box, .second-text, .bubble_tea',
		{ x: '-150%', easy: Power3.easeOut },
		{ x: '100%' }
	);

	border.fromTo(
		'.first-text_border, .second-text_border, .third-text_border',
		{ width: 0, easy: Power3.easeOut },
		{ width: '100vw' }
	);

	ScrollTrigger.create({
		animation: right,
		trigger: '.advantage',
		start: 'top center',
		end: '150% center',
		scrub: true,
		// markers: true,
	});

	ScrollTrigger.create({
		animation: left,
		trigger: '.advantage',
		start: 'top center',
		end: '150% center',
		scrub: true,
		// markers: true,
	});

	ScrollTrigger.create({
		animation: border,
		trigger: '.advantage',
		start: 'top center',
		end: '150% center',
		scrub: true,
		// markers: true,
	});
	return;
});

//MEDIA 500px
mm.add('(max-width: 501px)', () => {
	//HEADER
	ScrollTrigger.create({
		trigger: '.header__wrap',
		start: '20vw',
		end: '250%',
		// markers: true,
		toggleClass: {
			targets: '.left_animation, .right_animation ',
			className: 'active',
		},
	});

	ScrollTrigger.create({
		trigger: '.header__wrap',
		start: '105vw',
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

	//phone

	const upPhone = gsap.timeline();
	const downPhone = gsap.timeline();

	upPhone.fromTo('.down_phone', { y: 0, easy: Power3.easeOut }, { y: '70%'});

	ScrollTrigger.create({
		animation: upPhone,
		trigger: '.phone__app',
		start: 'top center',
		end: '100% center',
		scrub: true,
		// markers: true,
	});

	downPhone.fromTo('.up_phone', { y: 0, easy: Power3.easeOut }, { y: '-70%'});

	ScrollTrigger.create({
		animation: downPhone,
		trigger: '.phone__app',
		start: 'top center',
		end: '100% center',
		scrub: true,
		// markers: true,
	});

	//text
	const left = gsap.timeline();
	const right = gsap.timeline();
	const border = gsap.timeline();

	right.fromTo(
		'.first-text, .sandwich_mini, .third-text',
		{ x: 0, easy: Power3.easeOut },
		{ x: '-100%' }
	);

	left.fromTo(
		'.beverage_box, .second-text, .bubble_tea',
		{ x: 0, easy: Power3.easeOut },
		{ x: '100%' }
	);

	border.fromTo(
		'.first-text_border, .second-text_border, .third-text_border',
		{ width: 0, easy: Power3.easeOut },
		{ width: '100vw' }
	);

	ScrollTrigger.create({
		animation: right,
		trigger: '.advantage',
		start: 'top center',
		end: 'bottom center',
		scrub: true,
		// markers: true,
	});

	ScrollTrigger.create({
		animation: left,
		trigger: '.advantage',
		start: 'top center',
		end: 'bottom center',
		scrub: true,
		// markers: true,
	});

	ScrollTrigger.create({
		animation: border,
		trigger: '.advantage',
		start: 'top center',
		end: 'bottom center',
		scrub: true,
		// markers: true,
	});
	return;
});
