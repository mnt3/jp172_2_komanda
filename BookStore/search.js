var searchString;

var knyguklases = document.getElementsByClassName('book');

function search(e) {
    if(e.keyCode === 13) {
        searchString = document.getElementById('browse-search-input').value;
        if (searchString.length >= 3) {
        hideBook();
            for (var index = 0; index < bookArray.length; index++)
                if (bookArray[index].name.indexOf(searchString) !== -1 || bookArray[index].author.indexOf(searchString) !== -1) {
                    sukurtiDiv(bookArray[index]);
                }
                stargen(5, "starcreate");
        }
    }
}

function allBooks() {
    inactiveButtons();
    var e = document.getElementById('allBooks');
    activeButton(e);
    hideBook();
    for (var index = 0; index < bookArray.length; index++)
        sukurtiDiv(bookArray[index]);
        stargen(5, "starcreate");
}

function recentBooks() {
    inactiveButtons();
    var e = document.getElementById('recentBooks');
    activeButton(e);
    hideBook();

    for (var index = bookArray.length-1; index > bookArray.length - 11; index--)
        sukurtiDiv(bookArray[index]);
        stargen(5, "starcreate");
}

function popularBooks() {
    inactiveButtons();
    var e = document.getElementById('popularBooks');
    activeButton(e);
    hideBook();

    for (var index = 0; index < bookArray.length; index++)
        if (bookArray[index].rating >= 4) {
            sukurtiDiv(bookArray[index]);
        }
    stargen(5, "starcreate");
}

function freeBooks() {
    inactiveButtons();
    var e = document.getElementById('freeBooks');
    activeButton(e);
    hideBook();
    for (var index = 0; index < bookArray.length; index++)
    if (bookArray[index].price === 0) {
        sukurtiDiv(bookArray[index]);
    }
    stargen(5, "starcreate");
}

function hideBook() {
    for (var j = 0; j < knyguklases.length; j++) {
        knyguklases[j].style.display = 'none';
    }
}

function activeButton(e) {
    e.style.backgroundColor = '#97b3ce';
    e.style.color = '#ffffff';
}

function inactiveButtons() {
    var buttons = document.getElementsByClassName('filter-button');
    for (var i = 0; i < buttons.length; i++)
        buttons[i].setAttribute("style","background-color: #eef1f7, color: #8c97b2;");
}