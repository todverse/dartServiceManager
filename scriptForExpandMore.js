let boxes = document.getElementsByClassName('services_part');
let block = document.getElementsByClassName('services')[0];
let images = document.getElementsByClassName('services_hideImg');
let expand = document.getElementsByClassName('s_expand');
let hideText = document.getElementsByClassName('services_hideText');

block.style.height = '600px';
for(let i = 0; i< boxes.length; i++) {
	boxes[i].style.height = '60px';
	images[i].style.display = 'none';
	hideText[i].style.display = 'none';
};


for(let i = 0; i < boxes.length; i++) { 
	boxes[i].addEventListener('click', function(){
		if(boxes[i].style.height === '60px') {
			boxes[i].style.height = '130px';
			boxes[i].style.animation = 'expa 0.6s';
			let block_height = block.style.height;
			block_height = +block_height.slice(0,-2);
			block_height += 70;
			block.style.height = block_height + 'px';
			images[i].style.display = '';
			expand[i].setAttribute('src', 'images/expand_more.png');
			hideText[i].style.display = '';
		} else if(boxes[i].style.height === '130px') {
			boxes[i].style.height = '60px';
			let block_height = block.style.height;
			block_height = +block_height.slice(0,-2);
			block_height = block_height - 70;
			block.style.height = block_height + 'px';
			images[i].style.display = 'none';
			expand[i].setAttribute('src', 'images/expand_more_dis.png');
			hideText[i].style.display = 'none';
			boxes[i].style.animation = '';
		};	
	});
};