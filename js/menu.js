const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	const service = document.querySelector('.service');
	const subMenu = document.querySelector('.sub-service-menu');


	burger.addEventListener('click',() => {
		// Toggle Nav
		nav.classList.toggle('nav-active');
		// Animate Links
		navLinks.forEach((link, index)=>{
			if(link.style.animation){
				link.style.animation = '';
			}else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
			}
		})

		burger.classList.toggle('toggle');
	})

	service.addEventListener('click',()=>{
		var links = ["Vigilancia","Mantenimiento","Venta de Accesorios"];
		const ul = document.createElement("ul")
		for(var link in links){
			var li = document.createElement("li");
			var contentLi = document.createTextNode(links[link]);
			li.appendChild(contentLi);
			ul.appendChild(li);
		}
		subMenu.classList.toggle('active');
		console.log(ul);
		subMenu.appendChild(ul);
	})
}

navSlide();