let comments = document.getElementsByClassName('comments_comm_part');
let button_down = document.getElementsByClassName('comments_comm_down')[0];
let button_up = document.getElementsByClassName('comments_comm_up')[0];
for(let i = 0; i < comments.length; i++) {
	if(i === 0 || i === 1) {
		comments[i].style.display = 'block';
	} else {
	comments[i].style.display = 'none';
	};
};

button_down.addEventListener('click', function() {
	for(let i = 0; i < comments.length-2; i++) {
		if(comments[i].style.display === 'block' && comments[i+1].style.display === 'block') {
			comments[i].style.display = 'none';
			comments[i+2].style.display = 'block';
			return;
		};
	};
});
button_up.addEventListener('click', function() {
	for(let i = comments.length-1; i > 1; i--) {
		if(comments[i].style.display === 'block' && comments[i-1].style.display === 'block') {
			console.log(comments[i]);
			comments[i].style.display = 'none';
			comments[i-2].style.display = 'block';
			return;
		};
	};
});