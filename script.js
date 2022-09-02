window.onload = function () {
	document.body.classList.add('loaded__hiding');
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded');
	}, 200);
};

gsap.registerPlugin(ScrollTrigger);
const mm = window.gsap.matchMedia();

//MEDIA 501px
mm.add('(min-width: 501px)', () => {
	//HEADER
	ScrollTrigger.create({
		trigger: '.header__wrap',
		start: 'top',
		easy: 'power3.out',
		end: '350%',
		toggleClass: {
			targets: '.left_animation-text, .right_animation-text ',
			className: 'active',
		},
		// markers: true,
	});

	ScrollTrigger.create({
		trigger: '.header__wrap',
		start: '105vw',
		easy: 'power2.out',
		end: '600%',
		toggleClass: {
			targets: '.cup ',
			className: 'active',
		},
		// markers: true,
	});

	ScrollTrigger.create({
		trigger: '.header__wrap',
		start: '195vw',
		easy: 'power1.out',
		end: '400%',
		toggleClass: {
			targets: '.sandwich ',
			className: 'active',
		},
		// markers: true,
	});

	//CONTENT

	//phone

	const upPhone = gsap.timeline();
	const downPhone = gsap.timeline();

	upPhone.fromTo('.down_phone', 5, { y: 0 }, { y: '-50%' });

	ScrollTrigger.create({
		animation: upPhone,
		trigger: '.phone__app',
		start: 'top center',
		easy: 'power3.easeIn',
		end: '150% center',
		scrub: true,
		// markers: true,
	});

	downPhone.fromTo('.up_phone', { y: 0 }, { y: '150%' });

	ScrollTrigger.create({
		animation: downPhone,
		trigger: '.phone__app',
		start: '-=500 top',
		easy: 'power3.out',
		end: '150% top',
		scrub: true,
		markers: true,
	});

	//text

	const left = gsap.timeline();
	const right = gsap.timeline();

	right.fromTo('.advantage__right ', { x: '-375%' }, { x: '275%' });

	left.fromTo('.advantage__left', { x: '375%' }, { x: '-275%' });

	ScrollTrigger.create({
		animation: right,
		trigger: '.advantage',
		start: 'top center',
		easy: 'power1.easeIn',
		end: 'bottom center',
		scrub: true,
		// markers: true,
	});

	ScrollTrigger.create({
		animation: left,
		trigger: '.advantage',
		start: 'top center',
		easy: 'power1.easeIn',
		end: 'bottom center',
		scrub: true,
		// markers: true,
	});
});

//MEDIA 500px
mm.add('(max-width: 500px)', () => {
	//HEADER
	ScrollTrigger.create({
		trigger: '.header__wrap',
		start: 'top',
		easy: 'power2',
		end: '150%',
		toggleClass: {
			targets: '.left_animation-text, .right_animation-text ',
			className: 'active',
		},
		// markers: true,
	});

	ScrollTrigger.create({
		trigger: '.header__wrap',
		start: '95vw',
		end: '300%',
		toggleClass: {
			targets: '.cup ',
			className: 'active',
		},
		// markers: true,
	});

	ScrollTrigger.create({
		trigger: '.header__wrap',
		start: '165vw',
		end: '250%',
		toggleClass: {
			targets: '.sandwich ',
			className: 'active',
		},
		// markers: true,
	});
	//CONTENT

	//phone

	const upPhone = gsap.timeline();
	const downPhone = gsap.timeline();

	upPhone.fromTo('.down_phone', 2, { y: 0 }, { y: '-200%' });

	ScrollTrigger.create({
		animation: upPhone,
		trigger: '.phone__app',
		start: '-=350 center',
		easy: 'power3',
		end: '100% center',
		scrub: true,
		// markers: true,
	});

	downPhone.fromTo('.up_phone', 2, { y: 0 }, { y: '-200%' });

	ScrollTrigger.create({
		animation: downPhone,
		trigger: '.phone__app',
		start: '-=350 center',
		easy: 'power3',
		end: '100% center',
		scrub: true,
		// markers: true,
	});

	//text
	const left = gsap.timeline();
	const right = gsap.timeline();

	right.fromTo('.advantage__right', 2, { x: '-250%' }, { x: '250%' });

	left.fromTo('.advantage__left', 2, { x: '250%' }, { x: '-250%' });

	ScrollTrigger.create({
		animation: right,
		trigger: '.advantage',
		start: '-=200 center',
		easy: 'power3',
		end: '200% center',
		scrub: true,
		// markers: true,
	});

	ScrollTrigger.create({
		animation: left,
		trigger: '.advantage',
		start: '-=200 center',
		easy: 'power3',
		end: '200% center',
		scrub: true,
		// markers: true,
	});
});
