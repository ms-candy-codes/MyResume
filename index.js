//Remove hover completely from css 
//and create hover for laptop
//and click for mobile
//hover will be mouseover
//tap will toggle a class and untoggle
//when something else is clicked

let cards = document.querySelectorAll(".card");

function cardSorter(){
    cards.forEach((individualCard)=>{
        individualCard.addEventListener("click",()=>{

            cards.forEach((card)=>{
                card.classList.remove("myColor")
            });

            individualCard.classList.add("myColor");

            console.log(individualCard.classList);
        });
    });
}

cardSorter();