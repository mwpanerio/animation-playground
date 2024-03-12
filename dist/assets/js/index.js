jQuery(function($) {
    let min = 0,
        max = 1;

    let animationMin = 1,
        animationMax = 2.5;
    
    $('.js-animated-image-steel').each(function() {
        var $this = $(this);
        const timelineMax = new TimelineMax({ repeat: 99 });
        const delay = (Math.random() * (max - min) + min).toFixed(2); 
        const transitionEasing = (Math.random() * (animationMax - animationMin) + animationMin).toFixed(2); 

        console.log($this);

        timelineMax
            .to($this[0], parseFloat(transitionEasing), {
                'top' : '100%',
                // 'ease' : Power2.easeInOut
            }, `+=${delay}`)
    })
})