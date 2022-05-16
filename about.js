console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been succesfully submitted!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


function mouseoverComp(evt) {
	evt.preventDefault();
	
	alert('You are so good looking')
}


let catCompliment = document.querySelector('#cat-lion-logo')

catCompliment.addEventListener('mouseover', mouseoverComp)