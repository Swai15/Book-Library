// Create book tooltip
const addBook = document.querySelector("#open");
const addBookTip = document.querySelector(".footer-tooltip");

addBook.addEventListener("mouseover",function toolTip() {
  addBookTip.style.visibility = "visible"
  addBookTip.style.opacity = "0.8"
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

// Open and close modal popup
const modal = document.querySelector(".background-modal")

addBook.addEventListener("click",() => {
  modal.style.visibility = "visible";
})

closeBtn.addEventListener("click",function closeModal() {
  modal.style.visibility = "hidden";
})



//TAKE USER INPUT
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const statuss = document.getElementById("read");
const checkbox = document.querySelector(".checkbox");
const createBtn = document.querySelector(".create");
const container = document.querySelector(".container");
const deleteCard = document.getElementById("delete");
let position = 0;

let myLibrary = [
  { title: "Harry Potter and the Half Blood Prince",author: "J.K. Rowling",pages: 364,status: "checked",dataKey: position }
]



//ADD INPUT ITEMS TO ARRAY
let newInfo;

function addBookArray() {
  myLibrary.push(newInfo)
}



//POPULATE CARDS WITH INPUT
createBtn.addEventListener("click",function () {
  modal.style.visibility = "hidden";
  position++;

  newInfo = { title: title.value,author: author.value,pages: pages.value,status: statuss.value,dataKey: position };
  addBookArray()

  //checkbox completed/!
  let checked = "";
  function checkstatus() {
    if (statuss.value === "Yes") {
      checked = "checked"
      return checked

    } else {
      checked = ""
      return checked
    }
  }
  checkstatus()


  //Create new card
  let newCards = `    
      <div class="card">

        <div id="title" class="inner-card">
          <span class="heading">Title:</span> <span class="card-content">${myLibrary[position].title}</span>
        </div>
        <div id="author" class="inner-card">
          <span class="heading">Author:</span> <span class="card-content">${myLibrary[position].author}</span>
        </div>
        <div id="pages" class="inner-card">
          <span class="heading">Pages:</span> <span class="card-content">${myLibrary[position].pages}</span>
        </div>
        <div id="read-card" class="inner-card">
          <span class="heading">Completed?</span>
          <input class="checkbox" ${checked} type="checkbox">
        </div>
        <div id="delete-card" class="inner-card button">
          <button>
            <span class="heading">Delete</span>
            <span class="delete"><i class="fa-solid fa-trash-can"></i></span>
          </button>
        </div>

      </div>
  `;
  container.innerHTML += newCards
  console.log(myLibrary)

  setBackToDefault()

})



// *******FUNCTIONS********

//delete book
// deleteCard.addEventListener("click",function (e) {
//   let number = myLibrary[position].dataKey;
//   console.log(e.target);
//   myLibrary.splice((number - 1),number)
// })

// set back to default
function setBackToDefault() {
  title.value = '';
  author.value = '';
  pages.value = '';
}



// Use a data akey identifier.
// Use the key to delete clicked


// Element.parentNode.removeChild
// Element.setAttribute() then append the child




























// Remove value content of inputs 










