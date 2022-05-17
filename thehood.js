


function feedMeBtn(e){
    const restaurants = ['I Am Nacho Mama','Diwan Indian Food', 'La Finca Peruvian', 'Five Guys', 'Burger Village', 'La Taqueria', 'Uncle Dons Kitchen'];
    const random = Math.floor(Math.random() * restaurants.length);

    alert(`Try '${restaurants[random]}' today!`);

}




let foodBtn = document.querySelector('#food-recommend-btn');
foodBtn.addEventListener('click', feedMeBtn);