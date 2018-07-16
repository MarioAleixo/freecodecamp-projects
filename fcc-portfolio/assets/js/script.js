$(document).ready(function() {

	$("#home-li a").addClass("active");

	$("a.navbar-toggle").click(function(ev) {
		$("a.navbar-toggle").dropdown("toggle");
		return false;
	});

	$("ul.dropdown-menu a").click(function(ev) {
		$("a.navbar-toggle").dropdown("toggle");
		return false;
	});

	$("#myNameIs").addClass("animated fadeIn");

	$(".personal-detail").addClass("animated fadeInUp");

	$("#home-li").click(function() {
		$('html, body').animate({
			scrollTop: $('#home').offset().top -50
		}, 1500);
	});

	$("#resume-li").click(function() {
		$('html, body').animate({
			scrollTop: $('#resume').offset().top -50
		}, 1500);
	});

	$("#about-contact-li").click(function() {
		$('html, body').animate({
			scrollTop: $('#about-contact').offset().top -50
		}, 1500);
	});

	$("#contact-btn").hover(
		function(){
			$(this).stop().animate({backgroundColor: "#ea8b0b" }, "slow");
			}, function(){
			$(this).stop().animate({backgroundColor: "#2f3742" }, "slow");
		}
	);

	$("#home-name-box").hover(
		function(){
			$(this).stop().animate({borderColor: "#ea8b0b" }, "slow");
			}, function(){
			$(this).stop().animate({borderColor: "#2f3742" }, "slow");
		}
	);

	$(".profile-pic").hover(
		function(){
			$(this).stop().animate({borderColor: "#ea8b0b" }, "slow");
			}, function(){
			$(this).stop().animate({borderColor: "#2f3742" }, "slow");
		}
	);

	$("#home-mousey").click(function() {
		$('html, body').animate({
			scrollTop: $('#resume').offset().top -50
		}, 1500);

		$('.active').removeClass('active');
		$("#resume-li").addClass("active");
	});

	$(".contact-icon").hover(
		function(){
			$(this).stop().animate({backgroundColor: "#ea8b0b" }, "slow");
			}, function(){
			$(this).stop().animate({backgroundColor: "#ebebeb" }, "slow");
		}
	);

	$(".contact-icon").click(
		function(){
			$(this).stop().animate({backgroundColor: "#ebebeb" }, "slow");
			}
	);

	$(".contact-profile-pic").hover(
		function(){
			$(this).stop().animate({borderColor: "#ea8b0b" }, "slow");
			}, function(){
			$(this).stop().animate({borderColor: "#ebebeb" }, "slow");
		}
	);

	(function() {

            Response.create({ mode: 'markup', prefix: 'r', breakpoints: [0,320,480,768,992,1200] });
            Response.create({ mode: 'src',  prefix: 'src', breakpoints: [0,320,480,768,992,1200] });

   })();

	$(".navbar-nav > li > a").click(function() {
		$('.active').removeClass('active');
		$(this).addClass("active");
	});

   //$(".active").css("border-bottom", "5px solid #ffffff");

});


