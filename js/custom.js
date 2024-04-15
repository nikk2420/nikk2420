
$(function(){

	'use strict';

	$(".loader").delay(50).fadeOut("slow");
	$("#overlayer").delay(50).fadeOut("slow");	


	var siteGSAPRevealHero = function() {
		var controller = new ScrollMagic.Controller();

		$('.gsap-reveal-hero').each(function() {
			var html = $(this).html();
			$(this).html('<span class="reveal-wrap"><span class="cover"></span><span class="reveal-content">'+html+'</span></span>');
		});
		var grevealhero = $('.gsap-reveal-hero');

		if ( grevealhero.length ) {
			var heroNum = 0;
			grevealhero.each(function() {

				var cover = $(this).find('.cover'),
				revealContent = $(this).find('.reveal-content');

				var tl2 = new TimelineMax();

				setTimeout(function() {

					tl2
					.to(cover, 1, { marginLeft: '0', ease:Expo.easeInOut, onComplete() {
						tl2.set(revealContent, { x: 0 });
						tl2.to(cover, 1, { marginLeft: '102%', ease:Expo.easeInOut });
					} } )
				}, heroNum * 0 );

				var scene = new ScrollMagic.Scene({
					triggerElement: this,
					duration: "0%",
					reverse: false,
					offset: "-300%",
				})
				.setTween(tl2)
				.addTo(controller);

				heroNum++;
			});
		}
	}
	siteGSAPRevealHero();

})







