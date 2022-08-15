window.addEventListener('scroll', function () {
	const left = document.querySelector('.left_animation');
	const right = document.querySelector('.right_animation');
	const down = document.querySelector('.down_animation');
	const up = document.querySelector('.up_animation');
	const sandwich = document.querySelector('.sandwich_animation');
	const cup = document.querySelector('.cup_animation');

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (
				typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()
			) {
				return;
			}

			if (entry.isIntersecting) {
				left.classList.add('.left');
				right.classList.add('.right');
				down.classList.add('.down');
				up.classList.add('.up');
				sandwich.classList.add('.sandwich');
				cup.classList.add('.cup');

				console.log('да');
				return;
			} else {
				left.classList.remove('.left');
				right.classList.remove('.right');
				down.classList.remove('.down');
				up.classList.remove('.up');
				sandwich.classList.remove('.sandwich');
				cup.classList.remove('.cup');

				console.log('нет');
			}
		});
	});

	observer.observe(document.querySelector('.target'));
})();