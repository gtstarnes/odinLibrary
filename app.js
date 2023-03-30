const addNew = document.getElementById("popUp");
const container = document.getElementById("container");
const addBook = document.getElementById('addBook');

function makeVisible() {
    container.style.visibility = "visible";
}

function makeHidden() {
    container.style.visibility = "hidden";
}

addNew.addEventListener('click', makeVisible);
addBook.addEventListener('click', makeHidden);