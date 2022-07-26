// Create book tooltip
const addBook = document.querySelector("#open");
const addBookTip = document.querySelector(".footer-tooltip");

addBook.addEventListener("mouseover",function toolTip() {
  addBookTip.style.visibility = "visible"
  addBookTip.style.opacity = "1"
})

addBook.addEventListener("mouseout",function toolTipout() {
  addBookTip.style.visibility = "hidden"
  addBookTip.style.opacity = "0"
})

// Close Modal tooltip
const closeBtn = document.querySelector("#close");
const closeToolTip = document.querySelector(".close-tooltip")

closeBtn.addEventListener("mouseover",() => {
  closeToolTip.style.visibility = "visible";
  closeToolTip.style.opacity = "1"
})

closeBtn.addEventListener("mouseout",() => {
  closeToolTip.style.visibility = "hidden";
  closeToolTip.style.opacity = "0"
})
