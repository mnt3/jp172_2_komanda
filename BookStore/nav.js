var browseSection = document.getElementById("browse"),
    buyBooksSection = document.getElementById("buyBooks"),
    favBooksSection = document.getElementById("favBooks"),
    wishlistSection = document.getElementById("wishlist"),
    loginSection = document.getElementById("loginSection"),
    helpCenterSection = document.getElementById("helpCenter"),
    supportCenterSection = document.getElementById("supportCenter"),
    settingsSection = document.getElementById("settings"),
    singupSection = document.getElementById("singupSection"),
    
    nav_browse = document.getElementById("nav_browse"),
    nav_buybooks = document.getElementById("nav_buybooks"),
    nav_favoriteBooks = document.getElementById("nav_favoriteBooks"),
    nav_wishlist = document.getElementById("nav_wishlist"),
    nav_footer_settings = document.getElementById("nav_footer_settings"),

    text_nicktaken = document.getElementById("nicktaken"),
    text_nopswd = document.getElementById("nopswd");

shutDown();
//browse();
login();
cl_weakauth_singin(cl_weakauth_cookieman_get("catus_users"), cl_weakauth_cookieman_get("cokb_locked"));

function navTurnOff() {
    document.getElementById('footer_buttons').style.display = 'none';
}
function navTurnOn() {
    document.getElementById('footer_buttons').style.display = 'block';
}

function shutDown() {
    buyBooksSection.style.display = "none";
    favBooksSection.style.display = "none";
    wishlistSection.style.display = "none";
    loginSection.style.display = "none";
    helpCenterSection.style.display = "none";
    supportCenterSection.style.display = "none";
    settingsSection.style.display = "none";
    browseSection.style.display = "none";
    singupSection.style.display = "none";
    text_nicktaken.style.display = "none";
    text_nopswd.style.display = "none";
}

function browse() {
    shutDown();
    browseSection.style.display = "block";
    allBooks("allBooks");
    navLocator = "browse";
    navTurnOn();
}

function buyBooks() {
    shutDown();
    buyBooksSection.style.display = "block";
    allBooks("buyAllBooks");
    navLocator = "buyBooks";
    navTurnOn();
}

function favoriteBooks() {singupSection
    shutDown();
    favBooksSection.style.display = "block";
    navTurnOff();
}

function wishlist() {
    shutDown();
    wishlistSection.style.display = "block";
    navTurnOff();
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

function singup() {
    shutDown();
    nav_logedout();
    singupSection.style.display = "block";
}

function settings() {
    shutDown();
    settingsSection.style.display = "block";
}

function nav_logedout () {    
    nav_buybooks.style.display = "none";
    nav_favoriteBooks.style.display = "none";
    nav_wishlist.style.display = "none";
    nav_footer_settings.style.display = "none";
}

function nav_logedin () {    
    nav_buybooks.style.display = "block";
    nav_favoriteBooks.style.display = "block";
    nav_wishlist.style.display = "block";
    nav_footer_settings.style.display = "block";
}