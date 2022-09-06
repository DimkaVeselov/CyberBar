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
			scrub: 2,
		});

		ScrollTrigger.create({
			trigger: '.header__wrap',
			start: '105vw',
			easy: 'power2.out',
			end: '600%',
			toggleClass: { targets: '.cup ', className: 'active' },
			scrub: 2,
		});

		ScrollTrigger.create({
			trigger: '.header__wrap',
			start: '207vw',
			easy: 'none',
			end: '400%',
			toggleClass: { targets: '.sandwich ', className: 'active' },
			scrub: 2,
		});

		const upPhone = gsap.timeline({
			scrollTrigger: {
				trigger: '.phone__app',
				start: 'top bottom',
				end: 'bottom center',
				easy: 'power3.easeIn',
				preventOverlaps: true,
				scrub: 2,
			},
		});

		upPhone.fromTo('.down_phone', 3, { y: '50%' }, { y: '-225%' });

		const downPhone = gsap.timeline({
			scrollTrigger: {
				trigger: '.phone__app',
				start: 'top center',
				end: 'bottom center',
				easy: 'power3.easeIn',
				scrub: 2,
			},
		});

		downPhone.fromTo('.up_phone', { y: 0 }, { y: '100%' });

		const advantageRight = gsap.timeline({
			scrollTrigger: {
				trigger: '.advantage',
				start: 'top',
				easy: 'power1.easeIn',
				end: 'bottom',
				scrub: 2,
			},
		});

		advantageRight.fromTo('.advantage__right', 3, { x: '-300%' }, { x: '450%' });

		const advantageLeft = gsap.timeline({
			scrollTrigger: {
				trigger: '.advantage',
				start: 'top',
				easy: 'power1.easeIn',
				end: 'bottom',
				scrub: 2,
			},
		});

		advantageLeft.fromTo('.advantage__left', 3, { x: '250%' }, { x: '-450%'});

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
			scrub: 2,
		});

		ScrollTrigger.create({
			trigger: '.header__wrap',
			start: '115vw',
			end: '300%',
			easy: 'power1.easeIn',
			toggleClass: { targets: '.cup ', className: 'active' },
			scrub: 2,
		});

		ScrollTrigger.create({
			trigger: '.header__wrap',
			start: '245vw',
			end: '200%',
			easy: 'none',
			toggleClass: { targets: '.sandwich ', className: 'active' },
			scrub: 2,
		});

		const phone = gsap.timeline({
			scrollTrigger: {
				trigger: '.phone__app',
				start: 'top center',
				easy: 'power2.easeIn',
				end: 'bottom center',
				scrub: 2
			},
		});

		phone.fromTo('.down_phone, .up_phone', 5, { y: '-50%' }, { y: '-250%' });

		const advantageRight = gsap.timeline({
			scrollTrigger: {
				trigger: '.advantage',
				start: 'top center',
				easy: 'power2.easeIn',
				end: 'bottom center',
				scrub: 1,
			},
		});

		advantageRight.fromTo('.advantage__right', 6, { x: '-300%' }, { x: '375%' });

		const advantageLeft = gsap.timeline({
			scrollTrigger: {
				trigger: '.advantage',
				start: 'top center',
				easy: 'power2.easeIn',
				end: 'bottom center',
				scrub: 1,
			},
		});

		advantageLeft.fromTo('.advantage__left', 6, { x: '250%' }, { x: '-375%' });
	});
});
