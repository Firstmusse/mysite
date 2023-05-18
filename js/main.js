const elem = document.querySelectorAll('.skills-content-item')
const num = document.getElementById("number-skills")
num.textContent = elem.length


$(document).ready(function(){
	$('.count-project').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		slidesToScroll: 1,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		// centerMode: true,
		// varibleWidth: true, 
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

