const addNew = document.getElementById("popUp");
const container = document.getElementById("container");
const addBook = document.getElementById('addBook');
const cancel = document.getElementById('cancel');
const bookshelf = document.getElementById('bookshelf')


// STYLE FUNCTIONS
function makeVisible() {
    container.style.visibility = "visible";
}

function makeHidden() {
    container.style.visibility = "hidden";
}

function listFunctions(list) {
   for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('dblclick', function () {
            this.style.backgroundColor = 'SandyBrown'; 
        });
        list[i].addEventListener('drag', function () {
            this.remove();
        })
    }
}


// BOOK CONSTRUCTOR 
function Book(title, author, genre, year) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.year = year;
}

// GETS FORM/BOOK INFO
function makeNew() {
    const library = [];
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let genre = document.getElementById('genre').value;
    let year = document.getElementById('year').value;
    
    library.push(new Book(title,author,genre,year));
    addBookToLibrary(library);
}


function addBookToLibrary(library) {
    for (let i = 0; i < library.length; i++) {
        //creates divs
        let bookDiv = document.createElement('div');
        bookDiv.classList.add("book");
        let basicInfo = document.createElement('div');
        basicInfo.classList.add("basicBookInfo");
        let  extraInfo = document.createElement('div');
        extraInfo.classList.add("extraBookInfo");
     
        //creats p, adds class and text for each category
        let bookTitle = document.createElement('p');
        bookTitle.classList.add("title");
        let content = document.createTextNode(library[i].title);
        bookTitle.appendChild(content);
        
        let bookAuthor = document.createElement('p');
        bookAuthor.classList.add("author");
        content = document.createTextNode(library[i].author);
        bookAuthor.appendChild(content);
               
        let  bookGenre = document.createElement('p');
        bookGenre.classList.add("genre");
        content = document.createTextNode(library[i].genre);
        bookGenre.appendChild(content);
        

        let  bookYear = document.createElement('p');
        bookYear.classList.add("date");
        content = document.createTextNode(library[i].year);
        bookYear.appendChild(content);


        basicInfo.appendChild(bookTitle);
        basicInfo.appendChild(bookAuthor);
        bookDiv.appendChild(basicInfo);

        extraInfo.appendChild(bookGenre);
        extraInfo.appendChild(bookYear);
        bookDiv.appendChild(extraInfo);

        bookshelf.appendChild(bookDiv);
    }
    listFunctions(document.getElementsByClassName('book'));
}

listFunctions(document.getElementsByClassName('book'));
addNew.addEventListener('click', makeVisible);
addBook.addEventListener('click', makeNew);
addBook.addEventListener('click', makeHidden);
cancel.addEventListener('click', makeHidden);

