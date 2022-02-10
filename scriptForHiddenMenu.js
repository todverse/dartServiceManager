let button = document.getElementsByClassName('hide_but')[0];
let hiddenMenu = document.getElementsByClassName('hide_nav')[0];


window.addEventListener('click', (e) => {
	if(e.target !== hiddenMenu && e.target !== button) {
		hiddenMenu.style.display = 'none';
	}
});
window.addEventListener('scroll', () => {
	if(hiddenMenu.style.display !== 'none') {
		hiddenMenu.style.display = 'none';
	};
});

function hideBut() {
	if(hiddenMenu.style.display !== 'block') {
		hiddenMenu.style.display = 'block';
	} else {
		hiddenMenu.style.display = 'none';
	};
};


button.addEventListener('click', hideBut);