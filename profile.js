function favColorButton(e){
    alert('My Favortie Color is Purple');
}

function favPlaceButton(e){
    alert('My Favortie Place is my bed');
}

function favRitualButton(e){
    alert('My Favortie Ritual is going for a walk');
}
let favColorBtn = document.querySelector('#color');
favColorBtn.addEventListener('click', favColorButton);
let favPlaceBtn = document.querySelector('#place');
favPlaceBtn.addEventListener('click', favPlaceButton);
let favRitBtn = document.querySelector('#ritual');
favRitBtn.addEventListener('click', favRitualButton);

