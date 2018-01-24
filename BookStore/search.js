var searchString;

var knyguklases = document.getElementsByClassName('book');

function search(e, id) {
    iii = 1;
    i = 1;

    if(e.keyCode === 13) {
        searchString = document.getElementById(id).value;
        if (searchString.length >= 3) {
        hideBook();
            for (var index = 0; index < bookArray.length; index++)
                if (bookArray[index].name.indexOf(searchString) !== -1 || bookArray[index].author.indexOf(searchString) !== -1) {
                    if (id === 'buy-search-input') {
                        sukurtiBuy(bookArray[index]);
                    }
                    else {sukurtiDiv(bookArray[index]);}
                }
                stargen(5, "starcreate");
        }
    }
}

function allBooks(id) {
    i = 1;
    iii = 1;
    inactiveButtons();
    var e = document.getElementById(id);
    activeButton(e);
    hideBook();
    for (index = 0; index < 10; index++)
        if (id === 'buyAllBooks') {
            sukurtiBuy(bookArray[index]);
        }
        else {sukurtiDiv(bookArray[index]);}
        stargen(5, "starcreate");
}
var navLocator;
function navigateBooks(k) {
    i = 1;
    iii = 1;
    var start = ((k*10)-9);
    var stop = k*10;
    hideBook();
    for (start; start <= stop; start++)
        if (navLocator === "browse") {
            sukurtiDiv(bookArray[start-1]);
        }
        else{sukurtiBuy(bookArray[start-1]);}
    stargen(5, "starcreate");
}

function recentBooks(id) {
    i = 1;
    iii = 1;
    inactiveButtons();
    var e = document.getElementById(id);
    activeButton(e);
    hideBook();

    for (var index = bookArray.length-1; index > bookArray.length - 11; index--)
        if (id === 'buyRecentBooks') {
            sukurtiBuy(bookArray[index]);
        }
        else {sukurtiDiv(bookArray[index]);}
        stargen(5, "starcreate");
}

function popularBooks(id) {
    i = 1;
    iii = 1;
    inactiveButtons();
    var e = document.getElementById(id);
    activeButton(e);
    hideBook();

    for (var index = 0; index < bookArray.length; index++)
        if (bookArray[index].rating >= 4) {
        if (id === 'buyPopularBooks') {
            sukurtiBuy(bookArray[index]);
        }
            else{sukurtiDiv(bookArray[index]);}
        }
    stargen(5, "starcreate");
}

function freeBooks(id) {
    i = 1;
    iii = 1;
    inactiveButtons();
    var e = document.getElementById(id);
    activeButton(e);
    hideBook();
    for (var index = 0; index < bookArray.length; index++)
    if (bookArray[index].price === 0) {
        if (id === 'buyFreeBooks') {
            sukurtiBuy(bookArray[index]);
        }
        else {sukurtiDiv(bookArray[index]);}
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