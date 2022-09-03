(function ($) {

	"use strict";

	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#eco-loader').length > 0) {
				$('#eco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
	$.Scrollax();


	var carousel = function () {
		$('.carousel-testimony').owlCarousel({
			autoplay: true,
			autoHeight: true,
			center: true,
			loop: true,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			dots: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function () {
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		// timer;
		// timer = setTimeout(function(){
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
		console.log('show');
	});

	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.eco_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();




	var counter = function () {

		$('.eco-counter').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('eco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					// console.log(num);
					$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 7000
					);
				});

			}

		}, { offset: '95%' });

	}
	counter();

	var contentWayPoint = function () {
		var i = 0;
		$('.eco-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('eco-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .eco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn eco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft eco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight eco-animated');
							} else {
								el.addClass('fadeInUp eco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '95%' });
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	$('.appointment_date').datepicker({
		'format': 'm/d/yyyy',
		'autoclose': true
	});
	$('.appointment_time').timepicker();

	// llllllllllllllllllllll

	$("#sendMail")[0].addEventListener("click", function (e) {



		var mailName = document.getElementsByName("mailName")[0].value;
		var mailPhone = document.getElementsByName("mailPhone")[0].value;
		var mailSubject = document.getElementsByName("mailSubject")[0].value;
		var mailMessage = document.getElementsByName("mailMessage")[0].value;
		var mailEmail = document.getElementsByName("mailEmail")[0].value;



		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			"to": "ecovastubuilders@gmail.com",

			"subject": `Enquiry From ${mailName}`,


			"html": `<h1> Customer Contact Details From Ecovastubuilders.com </h1>

					 <h2>Name :: ${mailName}</h2>
					 <h2>Phone Number :: ${mailPhone}</h2>
					 <h2>Subject :: ${mailSubject}</h2>
					 <h2>Message :: ${mailEmail}</h2>
					 <h2>Message :: ${mailMessage}</h2>

					 <h2>ecovastubuilders.com</h2>`




		});

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch("https://us-central1-firetrial-70c6b.cloudfunctions.net/sendMailEcoVastu", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));


		console.log("Test1");
		e.preventDefault();
		e.stopPropagation();

		document.getElementById("myForm").reset();
		$('#exampleModal').modal('show');
		e.preventDefault();
	})


	// CLEAR fORM

	const btn = document.getElementById('submit');

	btn.addEventListener('click', function handleClick(event) {

		event.preventDefault();

		const nameInput = document.getElementsByName('mailName');
		const phoneInput = document.getElementsByName('mailPhone');
		const mailInput = document.getElementsByName('mailEmail');
		const subjectInput = document.getElementsByName('mailSubject');
		const messageInput = document.getElementsByName('mailMessage');





		// Send value to server
		console.log(nameInput.value);
		console.log(phoneInput.value);
		console.log(mailInput.value);
		console.log(subjectInput.value);
		console.log(messageInput.value);


		// 👇️ clear input field
		nameInput.value = '';
		phoneInput.value = '';
		mailInput.value = '';
		subjectInput.value = '';
		messageInput.value = '';

	});



})(jQuery);

