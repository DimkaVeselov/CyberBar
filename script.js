// init controller
const controller = new ScrollMagic.Controller({
	globalSceneOptions: {
		triggerHook: 'onLeave',
	},
});

// HEADER
//scene left animationText

const leftTween = new TweenLite.to('.left_animation');

const leftAnimationText = new ScrollMagic.Scene({
	triggerElement: '.triger_one',
	offset: 50,
})
	.setTween(leftTween)
	.setClassToggle('.left_animation', 'active')
	.addIndicators({ name: 'text - add a class' }) // add indicators (requires plugin)
	.addTo(controller);

//scene cup animation

const cupTween = new TweenLite.to('.cup', {
	delay: 2,
});

const cupAnimation = new ScrollMagic.Scene({
	triggerElement: '.triger_one',
	offset: 450,
})
	.setTween(cupTween)
	.setClassToggle('.cup', 'active')
	.addIndicators({ name: 'cup - add a class' }) // add indicators (requires plugin)
	.addTo(controller);

//scene sandwich animation

const sandwichTwin = new TweenLite.to('.sandwich', {
	delay: 4,
});

const sandwichAnimation = new ScrollMagic.Scene({
	triggerElement: '.triger_one',
	duration: '115%',
	offset: 800,
})
	.setTween(sandwichTwin)
	.setClassToggle('.sandwich', 'active')
	.addIndicators({ name: 'sandwich - add a class' }) // add indicators (requires plugin)
	.addTo(controller);

//scene right animationText

const rightTween = new TweenLite.to('.right_animation');

const rightAnimationText = new ScrollMagic.Scene({
	triggerElement: '.triger_one',
	offset: 0,
})
	.setTween(rightTween)
	.setClassToggle('.right_animation', 'active')
	.addTo(controller);

// CONTENT
