// init controller
var controller = new ScrollMagic.Controller({
	globalSceneOptions: {
		triggerHook: 'onLeave'
	},
});

// HEADER
//scene left animationText

var leftTween = new TweenLite.to('.left_animation', 1, {
	transform: 'translateX(-80vw)',
	easing: 'easeInOutSine',
	opacity: 0
});

var leftAnimationText = new ScrollMagic.Scene({
	triggerElement: '.triger_one',
	duration: 100
})
	.setTween(leftTween)
	.setClassToggle('.left_animation', 'active')
	// .addIndicators({ name: '1 - add a class' }) // add indicators (requires plugin)
	.addTo(controller);

//scene cup animation

var cupTween = new TweenLite.to('.cup', 1, {
	transform: 'translateX(50deg) translateY(50deg)',
	rotate: '240deg',
	delay: 1
});

var cupAnimation = new ScrollMagic.Scene({
	triggerElement: '.triger_one',
	duration: 800,
})
	.setTween(cupTween)
	.setClassToggle('.cup', 'active')
	.addTo(controller);

//scene sandwich animation

var sandwichTwin = new TweenLite.to('.sandwich', 2, {
	transform: 'translateX(20vw) translateY(20vw) scale(20)',
	easing: 'easeInOutSine',
	delay: 2,
	rotate: '240deg'
});

var sandwichAnimation = new ScrollMagic.Scene({
	triggerElement: '.triger_one',
	duration: 600
})
	.setTween(sandwichTwin)
	.setClassToggle('.sandwich', 'active')
	// .addIndicators({ name: '2 - add a class' }) // add indicators (requires plugin)
	.addTo(controller);

//scene right animationText

var rightTween = new TweenLite.to('.right_animation', 1, {
	transform: 'translateX(80vw)',
	easing: 'easeInOutSine',
	opacity: 0
});

var rightAnimationText = new ScrollMagic.Scene({
	triggerElement: '.triger_one',
	duration: 100
})
	.setTween(rightTween)
	.setClassToggle('.left_animation', 'active')
	.addTo(controller);

// CONTENT
