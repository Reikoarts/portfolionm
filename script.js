$(document).ready(function(){
	$(window).scroll(function(){
		if (this.scrollY > 20) {
			$('.navbar').addClass("sticky");
			document.getElementById("NP").innerHTML = "Nathan ";
			document.getElementById("NF").innerHTML = "Macaigne";
		}else{
			$('.navbar').removeClass("sticky");
			document.getElementById("NP").innerHTML = "Port";
			document.getElementById("NF").innerHTML = "Folio";
		}
	});

	//toggle menu/navbar
	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		//$('.menu-btn i').toggleClass("active");
	});

	//autowrite animation//
	var typed = new Typed(".typing", {
		strings: ["Ambitieux", "Rigoureux", "Organisé", "et surtout passionné d'informatique !"],
		typeSpeed: 60,
		backSpeed: 20,
		loop: true
	})

	//popup bouton portfolio
	var btnPopup = document.getElementById('btnPopup');
	var overlay = document.getElementById('overlay');
	var btnClose = document.getElementById('btnClose');

	//POPUP 2
	var btnPopup2 = document.getElementById('btnPopup2');
	var overlay2 = document.getElementById('overlay2');
	var btnClose2 = document.getElementById('btnClose2');

	btnPopup.addEventListener('click',openModal);
	btnClose.addEventListener('click',closePopup);

	btnPopup2.addEventListener('click',openModal2);
	btnClose2.addEventListener('click',closePopup2);

	function openModal(){
		overlay.style.display = 'block';
	}

	function closePopup(){
		overlay.style.display = 'none';
	}

	function openModal2(){
		overlay2.style.display = 'block';
	}

	function closePopup2(){
		overlay2.style.display = 'none';
	}
	//Anim SCROLL /
	const sr = ScrollReveal({
		origin: 'top',
		distance: '80px',
		duration: '2000',
		reset: false

	})


	//HOME


	//about

	sr.reveal('.about .title', {})
	sr.reveal('.about .about-content', {delay: 0})
	sr.reveal('.about .text', {delay: 100})
	sr.reveal('.about img', {delay: 300})
	sr.reveal('.about p', {delay: 300})
	sr.reveal('.about .cv', {delay: 500})

	//timeline
	sr.reveal('.timeline .tl-bg', {})
	sr.reveal('#titletime', {})
	sr.reveal('.timeline .f2', {delay: 100})
	sr.reveal('.timeline .tl-item', {delay: 300})

	//portfolio
	sr.reveal('.portfolio .title', {})
	sr.reveal('.portfolio .box-1', {delay: 100})
	sr.reveal('.portfolio .box-2', {delay: 300})
	sr.reveal('.portfolio .box-3', {delay: 500})
	//contact
	//sr.reveal('.contact .title', {})
	//sr.reveal('.contact .icons', {delay: 200})
	//sr.reveal('.contact form', {delay: 400})
	//sr.reveal('.contact .text', {delay: 400})
	sr.reveal('.contact .title', {})
	sr.reveal('.contact-content', {})


});