// Cart functionality count and add to cart button

let cartCount = 0;
const cartCounter = document.querySelector(".cart-count");
const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach(function(button){

    button.addEventListener("click", function(){
        cartCount++;
        cartCounter.textContent = cartCount;

        const productCard = this.closest(".product-card");
        const productName = productCard.querySelector("h3").textContent;
        alert(productName + " added to cart!");
    });
});


// Search functionality
const foods = [
    { name: "Chicken Burger", price: 249 },
    { name: "Veg Burger", price: 199 },
    { name: "Margherita Pizza", price: 399 },
    { name: "Veg Pizza", price: 349 },
    { name: "White Sauce Pasta", price: 299 },
    { name: "Chicken Pasta", price: 349 },
    { name: "French Fries", price: 149 },
    { name: "Cold Coffee", price: 129 }
];

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// Open Search
searchBtn.addEventListener("click", () => {

    searchInput.classList.toggle("active");

    if(searchInput.classList.contains("active")){
        searchInput.focus();
    }else{
        searchResults.classList.remove("active");
    }

});

// Search Food
searchInput.addEventListener("keyup", () => {

    const keyword = searchInput.value.trim().toLowerCase();

    searchResults.innerHTML = "";

    if(keyword === ""){
        searchResults.classList.remove("active");
        return;
    }

    const filteredFoods = foods.filter(food =>
        food.name.toLowerCase().includes(keyword)
    );

    if(filteredFoods.length === 0){

        searchResults.innerHTML =
            "<div class='result'>No food found</div>";

        searchResults.classList.add("active");
        return;
    }

    filteredFoods.forEach(food => {

        searchResults.innerHTML += `
            <div class="result">
                <h4>${food.name}</h4>
                <p>₹${food.price}</p>
            </div>
        `;

    });

    searchResults.classList.add("active");

});

// Close Search
document.addEventListener("click", (e) => {

    if(!e.target.closest(".search-section")){

        searchInput.classList.remove("active");
        searchResults.classList.remove("active");

    }

});

// Mobile Menu functionality
const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
});



