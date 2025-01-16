//Remove hover completely from css 
//and create hover for laptop
//and click for mobile
//hover will be mouseover
//tap will toggle a class and untoggle
//when something else is clicked

let cards = document.querySelectorAll(".card");

function clicks(){
    cards.forEach((card)=>{
        card.addEventListener("click", cardHandler);//adds event for desktop
        card.addEventListener("touchstart", cardHandler, {passive:true});//adds event for mobile
        card.addEventListener("mouseleave", exit);//removes events for desktop
    });
}

function cardHandler(event){
    event.preventDefault();
    cards.forEach((card)=>{
        card.classList.remove("myColor");
    });
    event.currentTarget.classList.add("myColor");
}

function exit(){
    cards.forEach((card)=>{
        card.classList.remove("myColor");
    });
}

clicks();