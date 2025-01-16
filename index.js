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

function adjustSections() {
    let section2 = document.getElementById("section2");
    let section3 = document.getElementById("section3");
    let screenHeight = window.innerHeight;

    // Ensure section2 fits its content or the viewport height
    if (section2.offsetHeight < screenHeight) {
        section2.style.minHeight = `${screenHeight}px`;
    }

    // Add a margin to section3 to prevent overlap
    let section2Height = section2.offsetHeight;
    section3.style.marginTop = `${section2Height}px`;
}

// Adjust on load and resize
adjustSections();
window.addEventListener("resize", adjustSections);

clicks();
