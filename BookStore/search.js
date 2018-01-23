var searchString;

var knyguklases = document.getElementsByClassName('book');

function search() {

    searchString = document.getElementById('browse-search-input').value;

    for (var i = 0; i < knyguklases.length; i++) {
        knyguklases[i].style.display = 'none';
    }

    if (searchString.length >= 3) {
        for (var i = 0; i < bookArray.length; i++) {
            if (bookArray[i].name.indexOf(searchString) > -1 || bookArray[i].author.indexOf(searchString) > -1) {
                sukurtiDiv(bookArray[i]);
                stargen(5, "starcreate");
            }
        }

    }
}