const elem = document.querySelectorAll('.skills-content-item')
const num = document.getElementById("number-skills")
num.textContent = elem.length


$(document).ready(function(){
	$('.count-project').slick({
		arrows:true,
		dots:true,
		slidesToShow:4,
		slidesToScroll: 1,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		centerMode: true,
		// varibleWidth: true, 
		responsive:[
			{
				breakpoint: 1280,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 990,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

