//Remove hover completely from css 
//and create hover for laptop
//and click for mobile
//hover will be mouseover
//tap will toggle a class and untoggle
//when something else is clicked

let cards = document.querySelectorAll(".card");

function clicks() {
    cards.forEach((card) => {
        card.addEventListener("mouseover", cardHandler); // For desktop
        card.addEventListener("touchstart", cardHandler); // For mobile
        card.addEventListener("mouseleave", exit); // For desktop mouse leave
    });
}

function cardHandler(event) {
    event.preventDefault(); 

    let clickedCard = event.currentTarget;
    
    let cardText = clickedCard.querySelector(".cardText");
    
    cards.forEach((card) => {
        card.classList.remove("hoverStyles");
        let text = card.querySelector(".cardText");
        if (text) {
            text.style.display = "none";
        }
    });
    event.currentTarget.classList.add("hoverStyles");

    if (cardText) {
        cardText.style.display = "flex";
    }
}

function exit() {
    cards.forEach((card) => {
        card.classList.remove("hoverStyles");
        let cardText = card.querySelector(".cardText");
        if (cardText) {
            cardText.style.display = "none"; 
        }
    });
}

clicks();
