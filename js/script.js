

	


$(document).ready(function () {

	//карта
	$(".vipusk").on("click", function (event) {
		event.preventDefault;
		$(".card_item").removeClass("active");
		$(".card_item2").addClass("active");
		$(".opp1").removeClass("active");
		$(".opp2").addClass("active");
		$(".referal").addClass("active");
	});


	//меню
	$('.menu__burger').click(function (event) {
		$('.menu__burger,.menu__list').toggleClass('active');
		$('body').toggleClass('lock');
	});

	//видео
	$('.video').parent().click(function () {
		if ($(this).children(".video").get(0).paused) {
			$(this).children(".video").get(0).play(); $(this).children(".playpause").fadeOut();
		} else {
			$(this).children(".video").get(0).pause();
			$(this).children(".playpause").fadeIn();
		}
	});

	
	//сладеры
	$('.product__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false,
				}
			}
		]
	});

	$('.news__wrapper').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false,
				}
			}
		]
	});

	$('.reviews__slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1220,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false,
					variableWidth: false
				}
			}
		]
	});



});