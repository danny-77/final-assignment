// console.log('hello')
//
// let loginButton = document.querySelector('.login-button')
// console.log(loginButton)
// function openModal(){
//  console.log("button clicked")
// }
// loginButton.addEventListener("click", openModal)


document.getElementsByClassName("login").addEventListener("click", function(){
  document.querySelector(".login-modal").style.display = "flex";
})
