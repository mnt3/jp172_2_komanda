var browseSection = document.getElementById("browse");
var buyBooksSection = document.getElementById("buyBooks");
var favBooksSection = document.getElementById("favBooks");
var wishlistSection = document.getElementById("wishlist");
var loginSection = document.getElementById("loginSection");
var helpCenterSection = document.getElementById("helpCenter");
var supportCenterSection = document.getElementById("supportCenter");
var settingsSection = document.getElementById("settings");

shutDown();
browse();

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
}

function buyBooks() {
    shutDown();
    buyBooksSection.style.display = "block";
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
    loginSection.style.display = "block";
}

function settings() {
    shutDown();
    settingsSection.style.display = "block";
}