const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/nirvana.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/naruto.jpg", rating: 3, comment: "Rich broth!" },
    { id: 4, name: "Gyukotsu Ramen", restaurant: "Kojiro", image: "images/kojiro.jpg", rating: 4, comment: "Amazing taste!" }
];

let selectedRamen = null;






//<!--ABCDEFGHIJKLMNOPQRSTUVWXYZ-->

function displayRamens(){
    const menu = document.getElementById("ramen-menu");
    menu.innerHTML = "";

    ramens.forEach(ramen =>{
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", ()=> handleClick(ramen));
        menu.appendChild(img);

    });   

    if (ramens.length > 0) {
        handleClick(ramens[0]);
    }

}

function handleClick(ramen){
    selectedRamen = ramen;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-rating").textContent = ramen.rating;
    document.getElementsByClassName("ramen-comment").textContent =ramen.comment;
}



function addSubmitListener() {
    const form = document.getElementById("new-ramen-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const newRamen = {
            id: ramens.length + 1,
            name: document.getElementById("new-name").value,
            restaurant: document.getElementById("new-restaurant").value,
            image: document.getElementById("new-image").value,
            rating: document.getElementById("new-rating").value,
            comment: document.getElementById("new-comment").value
        };

        ramens.push(newRamen);
        displayRamens();
        form.reset();
    });
}




// Initialize the app
function main() {
    displayRamens();
    
}

document.addEventListener("DOMContentLoaded", main);

