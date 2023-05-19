const elem = document.querySelectorAll('.skills-content-item')
const num = document.getElementById("number-skills")
num.textContent = elem.length


$(document).ready(function(){
	$('.count-project').slick({
		arrows:true,
		dots:true,
		// slidesToShow:4,
		infinite: true,
		slidesToScroll: 1,
		autoplay:true,
		speed:1000,
		autoplaySpeed:1000,
		// centerMode: true,
		variableWidth: true, 
		touchThreshold: 7,
		waitForAnimate: false,
		appendArrows:$('.project-buttons-arrows'),
		appendDots:$('.project-buttons-dots'),
		responsive:[
			{
				breakpoint: 1280,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 1040,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 675,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
