const ratingFilter = document.getElementById("ratingFilter");
const sortBy = document.getElementById("sortBy");
const products = document.querySelector(".products");

// Store original order
const originalCards = Array.from(document.querySelectorAll(".card"));

// Rating Filter
ratingFilter.addEventListener("change", function () {

    const rating = parseInt(ratingFilter.value);
    const cards = document.querySelectorAll(".card");
    

    cards.forEach(function(card){

        const productRating = parseInt(card.dataset.rating);

        if(rating === 0 || productRating >= rating){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

});

// Sort Products
sortBy.addEventListener("change", function(){

    let cards = Array.from(document.querySelectorAll(".card"));

    if(sortBy.value === "low"){

        cards.sort(function(a,b){
            return parseInt(a.dataset.price) - parseInt(b.dataset.price);
        });

    }

    else if(sortBy.value === "high"){

        cards.sort(function(a,b){
            return parseInt(b.dataset.price) - parseInt(a.dataset.price);
        });

    }

    else if(sortBy.value === "name"){

        cards.sort(function(a,b){
            return a.querySelector("h3").innerText.localeCompare(
                b.querySelector("h3").innerText
            );
        });

    }

    else{

        cards = originalCards;

    }

    cards.forEach(function(card){
        products.appendChild(card);
    });

});
