let navigation = {
	init: function() {
		this.testing();
		this.toTop();
	},
	testing: function() {
		let misc = document.querySelector('.misc');
		let buttons = document.querySelectorAll('.button');
		misc.addEventListener('click', highlight);
		let chains = document.querySelectorAll('.chain');
		function highlight(e) {
			let current = e.target;
			if(current.classList.contains('button-active')) {

			} else {
				buttons.forEach( e => {
					e.classList.remove('button-active');
				})
				current.classList.add('button-active');
				chains.forEach( e => {
					e.classList.toggle('active');
				})
			}
		}
	},
	toTop: function() {
		let button = document.querySelector('.toTop');
		button.addEventListener('click', function() {
			window.scrollTo(0,0);
			history.pushState('',document.title, window.location.pathname);
		});
		window.onscroll = function() {
			let currentY = window.scrollY;
			currentY > 0 ? button.classList.add('topActive') : button.classList.remove('topActive');
		}
	}	
}
navigation.init();