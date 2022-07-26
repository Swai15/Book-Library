// add a function to the script(not the constructor) that can take user’s input and store the new book objects into an array


// Add book tooltip
const addBook = document.querySelector(".fa-plus");
const addBookTip = document.querySelector(".footer-tooltip");

addBook.addEventListener("mouseover",function toolTip() {
  addBookTip.style.visibility = "visible"
  addBookTip.style.opacity = "1"
})

addBook.addEventListener("mouseout",function toolTipout() {
  addBookTip.style.visibility = "hidden"
})
