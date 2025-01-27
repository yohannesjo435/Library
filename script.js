const MyLibrary = [];

const shelf = document.getElementById("shelf")
const titleInput = document.getElementById("titleInput")
const authorInput = document.getElementById("authorInput")
const pagesInput = document.getElementById("pagesInput")
const textArea = document.getElementById("textArea")
const checkbox = document.getElementById("checkbox")

function Book(title, author, description, pages, read){
  this.title = title;
  this.author = author;
  this.description = description;
  this.pages  = pages;
  this.read = read;
}
function addBookToLibrary(title, author, description, pages, read) {
  const book = new Book(title, author, description, pages, read);
  MyLibrary.push(book)
}

function displayBooks(){
  let HTMLLISTS = []
  for (let i = 0; i < MyLibrary.length; i++){
    const {title, author, description, pages, read} = MyLibrary[i]
    HTMLLISTS += `
      <div class="card">
        <h2>${title}</h2>
        <h3>${author}</h3>
        <p class="descrption">
        ${description}
        </p>
        <h5>${pages}</h5>
        <input type="checkbox" class="checkbox" id="checkbox" ${read? "checked": ""}>      
      </div>
    `  
  }
  shelf.innerHTML = HTMLLISTS
}


function submitInputs(event) {
  event.preventDefault()
  let titleValue = titleInput.value  
  let authorValue = authorInput.value
  let pagesValue = pagesInput.value
  let descriptionValue = textArea.value
  let readValue = checkbox.checked
  addBookToLibrary(titleValue, authorValue, descriptionValue, pagesValue, readValue)
  displayBooks()
  titleInput.value = ""
  authorInput.value = ""
  pagesInput.value = ""
  textArea.value = ""
  checkbox.checked = false
}

