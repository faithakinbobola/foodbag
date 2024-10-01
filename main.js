function changeFunc() {
    var interestp = document.getElementsByName('interestp');
    var interesth3 = document.getElementsByName('interesth3');
    var firstImage = document.getElementById('image');
    var secondImage = document.getElementById('image1');
    var thirdImage = document.getElementById('image2');
    var fourthImage = document.getElementById('image3');
    var link = document.getElementsByName('link');
    
    for (var i = 0, max = interestp.length; i < max; i++) {
        interestp[i].style.color = "#AD4C4C";
    };
    for(var i = 0, max = interesth3.length; i < max; i++) {
        interesth3[i].style.color = "#AD4C4C";
    };
    firstImage.src = "../assets/fast-food.svg";
    secondImage.src = "../assets/Vegetables _ Drinks.svg";
    thirdImage.src = "../assets/Drinks _ Cocktails.svg";
    fourthImage.src = "../assets/resturant.svg";
    [...link].map(elem => {
        elem.setAttribute("href", "vendors.html");
    });
};

var chooseButton = document.querySelectorAll('.cart');
var cartDot = document.getElementById('cart-dot');
[...chooseButton].map(button =>{
    button.addEventListener("click", function (event) {  
        var selectedButton = event.target;
        selectedButton.classList.toggle('hidden');
        var hidden = document.querySelectorAll('.hidden');
        if (hidden.length >= 1) {
            cartDot.innerHTML = `<span class="hidden-span">Cart<i id="hidden" class="fa-solid fa-circle"></i></i></span>`;
        } else {
            cartDot.innerHTML = `<span>Cart</span>`;
        };
        if(selectedButton.classList.contains('hidden')) {
            selectedButton.className = ("hidden");
            selectedButton.innerHTML = `<span><i style="padding-right: 8px;" class="fa-solid fa-circle-minus"></i>Remove</span>`;
        } else {
            selectedButton.className = ("cart");
            selectedButton.innerHTML = `<span>Add to Cart</span>`;
        };
    });
});
