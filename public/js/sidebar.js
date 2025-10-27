// Navbar
let navigation = document.getElementById("nav-mobile");

function showNav(){
    console.log('Tampilkan');
    navigation.classList.remove("nav-hidden");
}

function closeNav(){
    console.log('hilangkan');
    navigation.classList.add("nav-hidden");
}