window.addEventListener('scroll', () => {
	const animItems = document.querySelectorAll('.animate');
	for (let index = 0; index < animItems.length; index++) {
		const animItem = animItems[index];
		const animItemHeight = animItem.offsetHeight;
		const animItemOffsetTop = offset(animItem).top;
		const animStart = 4;

		let animItemPoint = window.innerHeight - animItemHeight / animStart;

		if (animItemHeight > window.innerHeight) {
			animItemPoint = window.innerHeight - window.innerHeight / animStart;
		}

		if (
			window.scrollY > animItemOffsetTop - animItemPoint &&
			window.scrollY < animItemOffsetTop + animItemHeight
		) {
			animItem.classList.add('active');
		} else {
			animItem.classList.remove('active');
		}
		return;
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop };
	}
});