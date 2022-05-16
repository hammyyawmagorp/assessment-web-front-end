function favColorButton(e){
    alert('My Favortie Color is Purple');
}

function favPlaceButton(e){
    alert('My Favortie Place is my bed');
}

function favRitualButton(e){
    alert('My Favortie Ritual is going for a walk');
}
function feedMeBtn(e){
    const restaurants = ['I Am Nacho Mama','Diwan Indian Food', 'La Finca Peruvian', 'Five Guys', 'Burger Village', 'La Taqueria', 'Uncle Dons Kitchen'];
    const random = Math.floor(Math.random() * restaurants.length);

    alert(`Try '${restaurants[random]}' today!`);

}

let favColorBtn = document.querySelector('#color');
favColorBtn.addEventListener('click', favColorButton);

let favPlaceBtn = document.querySelector('#place');
favPlaceBtn.addEventListener('click', favPlaceButton);

let favRitBtn = document.querySelector('#ritual');
favRitBtn.addEventListener('click', favRitualButton);

let foodBtn = document.querySelector('#food-recommend-btn');
foodBtn.addEventListener('click', feedMeBtn);