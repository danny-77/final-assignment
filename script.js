// console.log('hello')
//
// let loginButton = document.querySelector('.login-button')
// console.log(loginButton)
// function openModal(){
//  console.log("button clicked")
// }
// loginButton.addEventListener("click", openModal)
//

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
