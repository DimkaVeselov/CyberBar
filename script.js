window.addEventListener('DOMContentLoaded', () => {
	gsap.registerPlugin(ScrollTrigger);
	const mm = window.gsap.matchMedia();

	//MEDIA 501px
	mm.add('(min-width: 501px)', () => {
		//HEADER
		ScrollTrigger.create({
			trigger: '.header__wrap',
			start: '50vw',
			easy: 'power1',
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
			easy: 'power2',
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
			easy: 'power3',
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

		upPhone.fromTo('.down_phone', { y: 0 }, { y: '-150%' });

		ScrollTrigger.create({
			animation: upPhone,
			trigger: '.phone__app',
			start: 'top center',
			end: '150% center',
			scrub: true,
			// markers: true,
		});

		downPhone.fromTo('.up_phone', { y: 0 }, { y: '150%' });

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
			{ x: '2000px' },
			{ x: '-3500px' }
		);

		left.fromTo(
			'.beverage_box, .second-text, .bubble_tea',
			2,
			{ x: '-2000px' },
			{ x: '3500px' }
		);

		border.fromTo(
			'.first-text_border, .second-text_border, .third-text_border',
			2,
			{ width: 0 },
			{ width: '150vw' }
		);

		ScrollTrigger.create({
			animation: right,
			trigger: '.advantage',
			start: 'top center',
			easy: 'power3',
			end: '150% center',
			scrub: true,
			// markers: true,
		});

		ScrollTrigger.create({
			animation: left,
			trigger: '.advantage',
			start: 'top center',
			easy: 'power3',
			end: '150% center',
			scrub: true,
			// markers: true,
		});

		ScrollTrigger.create({
			animation: border,
			trigger: '.advantage',
			start: 'top center',
			easy: 'power1',
			end: '150% center',
			scrub: true,
			// markers: true,
		});
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

		upPhone.fromTo('.down_phone', { y: 0 }, { y: '70%' });

		ScrollTrigger.create({
			animation: upPhone,
			trigger: '.phone__app',
			start: 'top center',
			end: '100% center',
			scrub: true,
			// markers: true,
		});

		downPhone.fromTo('.up_phone', { y: 0 }, { y: '-70%' });

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
			3,
			{ x: '1500px' },
			{ x: '-2500px' }
		);

		left.fromTo(
			'.beverage_box, .second-text, .bubble_tea',
			3,
			{ x: '-1500px' },
			{ x: '2500px' }
		);

		border.fromTo(
			'.first-text_border, .second-text_border, .third-text_border',
			{ width: 0 },
			{ width: '130vw' }
		);

		ScrollTrigger.create({
			animation: right,
			trigger: '.advantage',
			start: 'top center',
			easy: 'power3',
			end: '+=200  center',
			scrub: true,
			// markers: true,
		});

		ScrollTrigger.create({
			animation: left,
			trigger: '.advantage',
			start: 'top center',
			easy: 'power3',
			end: '+=200 center',
			scrub: true,
			// markers: true,
		});

		ScrollTrigger.create({
			animation: border,
			trigger: '.advantage',
			start: 'top center',
			easy: 'power1',
			end: '+=200 center',
			scrub: true,
			// markers: true,
		});
	});
})
