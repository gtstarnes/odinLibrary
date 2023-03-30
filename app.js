const addNew = document.getElementById("popUp");
const container = document.getElementById("container");
const addBook = document.getElementById('addBook');
//const cancel = document.getElementById('cancel');
const bookshelf = document.getElementById('bookshelf')
const library = [];

// STYLE FUNCTIONS
function makeVisible() {
    container.style.visibility = "visible";
}

function makeHidden() {
    container.style.visibility = "hidden";
}

function initial(list) {
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
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let genre = document.getElementById('genre').value;
    let year = document.getElementById('year').value;
    library.push( new Book(title,author,genre,year));
    console.log(library);
    return library;
}
/*
function addBookToLibrary() {
    makeNew();
    console.log(library);

    for (let i = 0; i < library.length; i++) {
        let bookDiv = document.createElement('div');
        bookDiv.classList.add("book");
        bookshelf.appendChild(bookDiv);

        let basicInfo = document.createElement('div');
        basicInfo.classList.add("basicBookInfo");
        bookDiv.appendChild(basicInfo);

        let bookTitle = document.createElement('p');
        bookTitle.classList.add("title");
        bookTitle.appendChild(library[i].title);
        basicInfo.appendChild(bookTitle);

        let bookAuthor = document.createElement('p');
        bookAuthor.classList.add("author");
        bookAuthor.appendChild(library[i].author);
        basicInfo.appendChild(bookAuthor);

        let  extraInfo = document.createElement('div');
        extraInfo.classList.add("extraBookInfo");
        bookDiv.appendChild(extraInfo);

        let  bookGenre = document.createElement('p');
        bookGenre.classList.add("genre");
        bookGenre.appendChild(library[i].genre);
        extraInfo.appendChild(bookGenre);

        let  bookDate = document.createElement('p');
        bookDate.classList.add("date");
        bookDate.appendChild(library[i].date);
        extraInfo.appendChild(bookDate);
    }
    initial(document.getElementsByClassName('book'))
}*/

initial(document.getElementsByClassName('book'));
addNew.addEventListener('click', makeVisible);
addBook.addEventListener('click', makeNew);
//cancel.addEventListener('click', makeHidden);

