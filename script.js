(window.onload = function () {
	document.body.classList.add('loaded__hiding'),
		window.setTimeout(function () {
			document.body.classList.add('loaded'),
				document.body.classList.remove('loaded');
		}, 200);
}),
	document.addEventListener('DOMContentLoaded', function () {
		gsap.registerPlugin(ScrollTrigger);
		const e = window.gsap.matchMedia();
		e.add('(min-width: 501px)', () => {
			ScrollTrigger.create({
				trigger: '.header__wrap',
				start: 'top',
				easy: 'power3.out',
				end: '950%',
				toggleClass: {
					targets: '.left_animation-text, .right_animation-text ',
					className: 'active',
				},
				preventOverlaps : true
			}),
				ScrollTrigger.create({
					trigger: '.header__wrap',
					start: '100vw',
					easy: 'power2.out',
					end: '600%',
					toggleClass: { targets: '.cup ', className: 'active' },
					preventOverlaps : true
				}),
				ScrollTrigger.create({
					trigger: '.header__wrap',
					start: '201vw',
					easy: 'power1.easeIn',
					end: '400%',
					toggleClass: { targets: '.sandwich ', className: 'active' },
					preventOverlaps : true
				});
			const e = gsap.timeline(),
				t = gsap.timeline(),
				r =
					(e.fromTo('.down_phone', { y: 0 }, { y: '-50%' }),
					ScrollTrigger.create({
						animation: e,
						trigger: '.phone__app',
						start: 'top center',
						easy: 'power1.easeIn',
						end: '150% center',
						scrub: !0,
						preventOverlaps : true
					}),
					t.fromTo('.up_phone', { y: 0 }, { y: '150%' }),
					ScrollTrigger.create({
						animation: t,
						trigger: '.phone__app',
						start: '-=500 top',
						easy: 'power1.easeIn',
						end: '150% top',
						scrub: !0,
						preventOverlaps : true
					}),
					gsap.timeline()),
				a = gsap.timeline();
			a.fromTo('.advantage__right ', { x: '-350%' }, { x: '475%' }),
				r.fromTo('.advantage__left', { x: '175%' }, { x: '-650%' }),
				ScrollTrigger.create({
					animation: a,
					trigger: '.advantage',
					duration: 3,
					start: '-=75vw top',
					easy: 'none',
					end: '150% center',
					scrub: !0,
					preventOverlaps: true,
				}),
				ScrollTrigger.create({
					animation: r,
					trigger: '.advantage',
					duration: 3,
					start: '-=75vw top',
					easy: 'none',
					end: '150% center',
					scrub: !0,
					preventOverlaps: true,
				});
		}),
			e.add('(max-width: 500px)', () => {
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
					scrub: !0,
				}),
					ScrollTrigger.create({
						trigger: '.header__wrap',
						start: '115vw',
						end: '300%',
						easy: 'power1.easeIn',
						toggleClass: { targets: '.cup ', className: 'active' },
						scrub: !0,
					}),
					ScrollTrigger.create({
						trigger: '.header__wrap',
						start: '245vw',
						end: '200%',
						easy: 'power1.easeIn',
						toggleClass: { targets: '.sandwich ', className: 'active' },
						scrub: !0,
					});
				const e = gsap.timeline(),
					t = gsap.timeline(),
					r =
						(e.fromTo('.down_phone', { y: 0 }, { y: '-200%' }),
						ScrollTrigger.create({
							animation: e,
							trigger: '.phone__app',
							start: '-=350 center',
							easy: 'power1.easeIn',
							end: '100% center',
							scrub: !0,
							preventOverlaps : true
						}),
						t.fromTo('.up_phone', { y: 0 }, { y: '-200%' }),
						ScrollTrigger.create({
							animation: t,
							trigger: '.phone__app',
							start: '-=350 center',
							easy: 'power1.easeIn',
							end: '100% center',
							scrub: !0,
							preventOverlaps : true
						}),
						gsap.timeline()),
					a = gsap.timeline();
				a.fromTo('.advantage__right', 4, { x: '-150%' }, { x: '675%' }),
					r.fromTo('.advantage__left', 4, { x: '150%' }, { x: '-675%' }),
					ScrollTrigger.create({
						animation: a,
						trigger: '.advantage',
						start: '-=200 center',
						easy: 'none',
						end: '200% center',
						scrub: !0,
						preventOverlaps : true
					}),
					ScrollTrigger.create({
						animation: r,
						trigger: '.advantage',
						start: '-=200 center',
						easy: 'none',
						end: '200% center',
						scrub: !0,
						preventOverlaps : true
					});
			});
	});
