const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	const service = document.querySelector('.service');
	const subMenu = document.querySelector('.sub-service-menu');
	const frameOverlay = document.querySelector('.overlay');


	burger.addEventListener('click',() => {
		let list = document.querySelector('.list_service');
		burger.classList.toggle('burgerFixed');

		if(frameOverlay.style.display === ""){
			frameOverlay.style.display = "block";
		}else{
			frameOverlay.style.display = "";
		}
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
		if(subMenu.classList.contains('active')){
			subMenu.removeChild(list);
			subMenu.classList.toggle('active');
		}
	})

	service.addEventListener('click',()=>{
		let links = ["Vigilancia","Mantenimiento","Venta de Accesorios", "Recargas"];
		let list = document.querySelector('.list_service');

		if (list != null) {
			subMenu.removeChild(list);
			subMenu.classList.toggle('active');
		}else{
			const ul = document.createElement("ul");

			for(var link in links){
				let li = document.createElement("li");
				let a = document.createElement("a");
				let contentA = document.createTextNode(links[link]);
				a.appendChild(contentA);
				let textLinkHyper = links[link];
				a.href = `${textLinkHyper.replace(/ /g, "").toLowerCase()}.html`;
				li.appendChild(a);
				ul.appendChild(li);
			}

			ul.classList.add('list_service');
			subMenu.appendChild(ul);
			subMenu.classList.toggle('active');
		}
	})

	document.addEventListener('click', function(e){
		let eleClic = e.target;
		let list = document.querySelector('.list_service');
		let btService = document.querySelector('.service');

		if(eleClic != subMenu && subMenu.classList.contains('active') && eleClic != btService){
			subMenu.removeChild(list);
			subMenu.classList.toggle('active');
		}
	}, false)

}

navSlide();