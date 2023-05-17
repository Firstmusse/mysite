const elem = document.querySelectorAll('.skills-content-item')
const num = document.getElementById("number-skills")
num.textContent = elem.length


$(document).ready(function(){
	$('.count-project').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

