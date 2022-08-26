window.addEventListener('DOMContentLoaded', () => {
	gsap.registerPlugin(ScrollTrigger);
	const mm = window.gsap.matchMedia();

	//MEDIA 501px
	mm.add('(min-width: 501px)', () => {
		//HEADER
		ScrollTrigger.create({
			trigger: '.header__wrap',
			start: '5vw',
			easy: 'power3',
			end: '350%',
			// markers: true,
			toggleClass: {
				targets: '.left_animation-text, .right_animation-text ',
				className: 'active',
			},
		});

		ScrollTrigger.create({
			trigger: '.header__wrap',
			start: '65vw',
			easy: 'power2',
			end: '600%',
			// markers: true,
			toggleClass: {
				targets: '.cup ',
				className: 'active',
			},
		});

		ScrollTrigger.create({
			trigger: '.header__wrap',
			start: '110vw',
			easy: 'power1',
			end: '400%',
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

		upPhone.fromTo('.down_phone', 4, { y: 0 }, { y: '-150%' });

		ScrollTrigger.create({
			animation: upPhone,
			trigger: '.phone__app',
			start: 'top center',
			easy: 'power3',
			end: '150% center',
			scrub: true,
			// markers: true,
		});

		downPhone.fromTo('.up_phone', 4, { y: 0 }, { y: '150%' });

		ScrollTrigger.create({
			animation: downPhone,
			trigger: '.phone__app',
			start: 'top center',
			easy: 'power3',
			end: '150% center',
			scrub: true,
			// markers: true,
		});

		//text

		const left = gsap.timeline();
		const right = gsap.timeline();

		right.fromTo('.advantage__right', 2, { x: '-275%' }, { x: '275%' });

		left.fromTo('.advantage__left', 2, { x: '275%' }, { x: '-275%' });

		ScrollTrigger.create({
			animation: right,
			trigger: '.advantage',
			start: 'top center',
			easy: 'power3',
			end: 'bottom center',
			markers: true,
		});

		ScrollTrigger.create({
			animation: left,
			trigger: '.advantage',
			start: 'top center',
			easy: 'power3',
			end: 'bottom center',
			// markers: true,
		});
	});

	//MEDIA 500px
	mm.add('(max-width: 500px)', () => {
		//HEADER
		ScrollTrigger.create({
			trigger: '.header__wrap',
			start: '15vw',
			easy: 'power3',
			end: '250%',
			// markers: true,
			toggleClass: {
				targets: '.left_animation-text, .right_animation-text ',
				className: 'active',
			},
		});

		ScrollTrigger.create({
			trigger: '.header__wrap',
			start: '100vw',
			end: '250%',
			// markers: true,
			toggleClass: {
				targets: '.cup ',
				className: 'active',
			},
		});

		ScrollTrigger.create({
			trigger: '.header__wrap',
			start: '210vw',
			end: '350%',
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

		right.fromTo('.advantage__right', 2, { x: 0 }, { x: '250%' });

		left.fromTo('.advantage__left', 2, { x: 0 }, { x: '-250%' });

		ScrollTrigger.create({
			animation: right,
			trigger: '.advantage',
			start: 'top center',
			easy: 'power3',
			end: 'bottom center',
			markers: true,
		});

		ScrollTrigger.create({
			animation: left,
			trigger: '.advantage',
			start: 'top center',
			easy: 'power3',
			end: 'bottom center',
			// markers: true,
		});
	});
});
