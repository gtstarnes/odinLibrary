const addNew = document.getElementById("popUp");
const container = document.getElementById("container");
const addBook = document.getElementById('addBook');
const cancel = document.getElementById('cancel');
const books = document.getElementsByClassName('book');

function makeVisible() {
    container.style.visibility = "visible";
}

function makeHidden() {
    container.style.visibility = "hidden";
}

function initial(list) {
   for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('dblclick', function () {
            this.style.backgroundColor = "SandyBrown"; 
        });
        list[i].addEventListener('drag', function () {
            this.remove();
        })
    }
}


initial(books);
addNew.addEventListener('click', makeVisible);
addBook.addEventListener('click', makeHidden);
cancel.addEventListener('click', makeHidden);

