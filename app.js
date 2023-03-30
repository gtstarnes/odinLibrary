const addNew = document.getElementById("popUp");
const container = document.getElementById("container");
const addBook = document.getElementById('addBook');
const cancel = document.getElementById('cancel');
const book = document.getElementById('book1');

function makeVisible() {
    container.style.visibility = "visible";
}

function makeHidden() {
    container.style.visibility = "hidden";
}

function markRead() {
    book.style.backgroundColor = "SandyBrown";
}

addNew.addEventListener('click', makeVisible);
addBook.addEventListener('click', makeHidden);
cancel.addEventListener('click', makeHidden);
book.addEventListener('dblclick', markRead);
