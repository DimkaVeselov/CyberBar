window.onload = function () {
	document.body.classList.add('loaded__hiding'),
		window.setTimeout(function () {
			document.body.classList.add('loaded'),
				document.body.classList.remove('loaded');
		}, 200);
};

document.addEventListener('DOMContentLoaded', function () {
	gsap.registerPlugin(ScrollTrigger);
	const mm = window.gsap.matchMedia();
	mm.add('(min-width: 501px)', () => {
		ScrollTrigger.create({
			trigger: '.header__wrap',
			start: 'top',
			easy: 'power3.out',
			end: '950%',
			toggleClass: {
				targets: '.left_animation-text, .right_animation-text ',
				className: 'active',
			},
			scrub: true,
		});

		gsap.timeline({
			scrollTrigger: {
				trigger: 'header__wrap',
				start: '105vw',
				end: '600%',
				ease: 'power1. easeInOut',
				toggleClass: { targets: '.cup ', className: 'active' },
				scrub: true,
			},
		});

		gsap.to('.sandwich ', {
			scrollTrigger: {
				trigger: '.header__wrap',
				start: '207vw',
				end: '100%',
				easy: 'power4. easeInOut',
				scrub: true,
			},
			keyframes: [
				{ scale: '20 20', rotation: 110 },
				{ scale: '270 270', y: '-350%', x: '150%' },
			],
		});

		const upPhone = gsap.timeline({
			scrollTrigger: {
				trigger: '.phone__app',
				start: 'top center',
				end: '150% center',
				easy: 'power1.easeOut',
				scrub: true,
			},
		});

		upPhone.fromTo('.down_phone', 6, { y: 0 }, { y: '-125%' }, 0.5);

		const downPhone = gsap.timeline({
			scrollTrigger: {
				trigger: '.phone__app',
				start: '-=200 top',
				end: 'bottom center',
				easy: 'power1.easeOut',
				scrub: true,
			},
		});

		downPhone.fromTo('.up_phone', 6, { y: 0 }, { y: '125%' }, 0.5);

		const advantageRight = gsap.timeline({
			scrollTrigger: {
				trigger: '.advantage',
				start: 'top',
				easy: 'power1.easeOut',
				end: '170%',
				scrub: true,
			},
		});

		advantageRight.fromTo('.advantage__right', 6, { x: '-285%' }, { x: '450%' });

		const advantageLeft = gsap.timeline({
			scrollTrigger: {
				trigger: '.advantage',
				start: 'top',
				easy: 'power1.easeOut',
				end: '170%',
				scrub: true,
			},
		});

		advantageLeft.fromTo('.advantage__left', 6, { x: '250%' }, { x: '-450%'});

	});

	mm.add('(max-width: 500px)', () => {

		ScrollTrigger.create({
			trigger: '.header__wrap',
			start: 'top',
			easy: 'power2.easeIn',
			end: '150%',
			easy: 'power3.easeIn',
			toggleClass: {
				targets: '.left_animation-text, .right_animation-text ',
				className: 'active',
			},
			scrub: true,
		});

		ScrollTrigger.create({
			trigger: '.header__wrap',
			start: '115vw',
			end: '300%',
			easy: 'power1.easeIn',
			toggleClass: { targets: '.cup ', className: 'active' },
			scrub: true,
		});

		ScrollTrigger.create({
			trigger: '.header__wrap',
			start: '245vw',
			end: '200%',
			easy: 'none',
			toggleClass: { targets: '.sandwich ', className: 'active' },
			scrub: true,
		});

		const phone = gsap.timeline({
			scrollTrigger: {
				trigger: '.phone__app',
				start: 'top center',
				easy: 'power1',
				end: 'bottom center',
				scrub: true,
			},
		});

		phone.fromTo('.down_phone, .up_phone', 5, { y: '-50%' }, { y: '-250%' });

		const advantageRight = gsap.timeline({
			scrollTrigger: {
				trigger: '.advantage',
				start: 'top center',
				easy: 'power1',
				end: '300% center',
				scrub: true,
			},
		});

		advantageRight.fromTo('.advantage__right', 6, { x: '-300%' }, { x: '375%' });

		const advantageLeft = gsap.timeline({
			scrollTrigger: {
				trigger: '.advantage',
				start: 'top center',
				easy: 'power1',
				end: '300% center',
				scrub: true,
			},
		});

		advantageLeft.fromTo('.advantage__left', 6, { x: '250%' }, { x: '-375%' });
	});
});
