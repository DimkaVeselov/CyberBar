// init controller
const headerController = new ScrollMagic.Controller({
	globalSceneOptions: {
		triggerHook: 'onLeave',
	},
});

// HEADER
//scene left animationText

const leftTween = new TweenMax.to('.left_animation');

const leftAnimationText = new ScrollMagic.Scene({
	triggerElement: '.triger_one',
	offset: 50,
})
	.setTween(leftTween)
	.setClassToggle('.left_animation', 'active')
	.addTo(headerController);

//scene cup animation

const cupTween = new TweenMax.to('.cup', {
	delay: 2,
});

const cupAnimation = new ScrollMagic.Scene({
	triggerElement: '.triger_one',
	offset: 300,
})
	.setTween(cupTween)
	.setClassToggle('.cup', 'active')
	.addTo(headerController);

//scene sandwich animation

const sandwichTwin = new TweenMax.to('.sandwich', 2);

const sandwichAnimation = new ScrollMagic.Scene({
	triggerElement: '.triger_one',
	duration: '225%',
	offset: 400,
})
	.setTween(sandwichTwin)
	.setClassToggle('.sandwich', 'active')
	// .addIndicators({ name: 'sandwich - add a class' }) // add indicators (requires plugin)
	.addTo(headerController);

//scene right animationText

const rightTween = new TweenMax.to('.right_animation');

const rightAnimationText = new ScrollMagic.Scene({
	triggerElement: '.triger_one',
	offset: 0,
})
	.setTween(rightTween)
	.setClassToggle('.right_animation', 'active')
	.addTo(headerController);

// CONTENT

const contentPhoneController = new ScrollMagic.Controller({
	globalSceneOptions: {
		triggerHook: 'onEnter',
		duration: '520%',
		offset: 300
	},
});

const upPhoneScroll = new ScrollMagic.Scene({
	triggerElement: '.content',
})
	.setTween('.up_phone', { y: '350%', ease: Linear.easeNone })
	// .addIndicators({ name: 'phone 1' }) // add indicators (requires plugin)
	.addTo(contentPhoneController);

const downPhoneScroll = new ScrollMagic.Scene({
	triggerElement: '.content',
})
	.setTween('.down_phone', { y: '-650%', ease: Linear.easeNone })
	// .addIndicators({ name: 'phone 2' }) // add indicators (requires plugin)
	.addTo(contentPhoneController);
