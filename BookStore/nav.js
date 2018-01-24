var browseSection = document.getElementById("browse"),
    buyBooksSection = document.getElementById("buyBooks"),
    favBooksSection = document.getElementById("favBooks"),
    wishlistSection = document.getElementById("wishlist"),
    loginSection = document.getElementById("loginSection"),
    helpCenterSection = document.getElementById("helpCenter"),
    supportCenterSection = document.getElementById("supportCenter"),
    settingsSection = document.getElementById("settings"),
    
    nav_browse = document.getElementById("nav_browse"),
    nav_buybooks = document.getElementById("nav_buybooks"),
    nav_favoriteBooks = document.getElementById("nav_favoriteBooks"),
    nav_wishlist = document.getElementById("nav_wishlist");

shutDown();
//browse();
login();
cl_weakauth_singin(cl_weakauth_cookieman_get("catus_users"), cl_weakauth_cookieman_get("cokb_locked"));

function shutDown() {
    buyBooksSection.style.display = "none";
    favBooksSection.style.display = "none";
    wishlistSection.style.display = "none";
    loginSection.style.display = "none";
    helpCenterSection.style.display = "none";
    supportCenterSection.style.display = "none";
    settingsSection.style.display = "none";
    browseSection.style.display = "none";
}

function browse() {
    shutDown();
    browseSection.style.display = "block";
    allBooks("allBooks");
    navLocator = "browse";
}

function buyBooks() {
    shutDown();
    buyBooksSection.style.display = "block";
    allBooks("buyAllBooks");
    navLocator = "buyBooks";
}

function favoriteBooks() {
    shutDown();
    favBooksSection.style.display = "block";
}

function wishlist() {
    shutDown();
    wishlistSection.style.display = "block";
}

function help() {
    shutDown();
    helpCenterSection.style.display = "block";
}

function support() {
    shutDown();
    supportCenterSection.style.display = "block";
}

function login() {
    shutDown();
    nav_logedout();
    loginSection.style.display = "block";
}

function settings() {
    shutDown();
    settingsSection.style.display = "block";
}

function nav_logedout () {    
    nav_buybooks.style.display = "none";
    nav_favoriteBooks.style.display = "none";
    nav_wishlist.style.display = "none";
}

function nav_logedin () {    
    nav_buybooks.style.display = "block";
    nav_favoriteBooks.style.display = "block";
    nav_wishlist.style.display = "block";
}