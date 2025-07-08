let cartCount = 0;

$(".nav-cart").click(function () {
    cartCount++;
    alert(`Cart updated! Total items: ${cartCount}`);
});

const heroImages = [
    "./Images/hero-image1.jpg",
    "./Images/hero-image2.jpg",
    "./Images/hero-image3.jpg"
];

let current = 0;

setInterval(function () {
    current = (current + 1) % heroImages.length;
    $(".hero-section").css("background-image", `url('${heroImages[current]}')`);
}, 5000);


$(".search-button").click(function () {
    let query = $(".search-input").val();
    alert(`You searched for: ${query}`);
});


$(".select-country").click(function () {
    alert("Dropdown clicked. (Add actual menu here)");
});
