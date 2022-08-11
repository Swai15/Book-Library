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
let position = 0;

let myLibrary = [
  { title: "Harry Potter and the Half Blood Prince",author: "J.K. Rowling",pages: 364,status: "checked" }
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
  newInfo = { title: title.value,author: author.value,pages: pages.value,status: statuss.value };
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
          <span class="heading">Title:</span> <span class="card-content">${title.value}</span>
        </div>
        <div id="author" class="inner-card">
          <span class="heading">Author:</span> <span class="card-content">${author.value}</span>
        </div>
        <div id="pages" class="inner-card">
          <span class="heading">Pages:</span> <span class="card-content">${pages.value}</span>
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

})



//new card should access info from the array





// Remove value content of inputs 










function Book() {
  // the constructor...
}


//Array to hold the objects, 
//objects to hold the data,
//object constructor to make a template for the data

function addBookToLibrary() {

}

// First understand how object constructors work
// learn how to push and access objects in an array


// let books = [
//   { title: "Harry Potter",author: "J.k Rowling",pages: 365 }
// ]

// books.push({ title: "Joe Bottom",author: "Nikki French",pages: 56 })
// console.log(books);
// console.log(books[0].pages);