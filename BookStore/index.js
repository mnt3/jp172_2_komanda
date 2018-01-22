/*Objekto kurimas */




function knyga(name = "book", author ="noname", price=0 , imgSrc="img-default.jpg", rating=0.0, id){
    this.name=name;
    this.author=author;
    this.price=price;
    this.imgSrc=imgSrc;
    this.rating=rating;
    this.id=id;
}

var knyga1 = new knyga("knyga","autorius",10,"img/book_store/books/book-01.png",5.0,1);
var knyga2 = new knyga("knyga2","autorius2",5,"img/book_store/books/book-02.png",3.0,2);
var knyga3 = new knyga("knyga3","autorius3",15,"img/book_store/books/book-03.png",2.0,3);
var knyga4 = new knyga("knyga4","autorius2",5,"img/book_store/books/book-04.png",4.0,4);
var knyga5 = new knyga("knyga5","autorius",20,"img/book_store/books/book-05.png",5.0,5);
var knyga6 = new knyga("knyga6","autorius2",7,"img/book_store/books/book-06.png",2.0,6);
var knyga7 = new knyga("knyga7","autorius4",10,"img/book_store/books/book-07.png",2.5,7);
var knyga8 = new knyga("knyga8","autorius2",8,"img/book_store/books/book-08.png",3.5,8);
var knyga9 = new knyga("knyga9","autorius6",30,"img/book_store/books/book-09.png",5.0,9);
var knyga10 = new knyga("knyga10","autorius3",1,"img/book_store/books/book-10.png",1.5,10);


//bandymas ideti knyga i div
//var img = document.getElementsByTagName("img");
//img[0].hasAttribute("src");
//img[0].setAttribute("src","img/book_store/books/book-03.png");



/* knygu atvaizdavimas browseryje*/


var i =1;
function sukurtiDiv (knyga){
////var div = document.createElement("div");
////div.className ="book";
//var paveikslas = document.createElement("img");
//paveikslas.setAttribute("src", knyga.imgSrc);
//paveikslas.src = knyga.imgSrc;
//paveikslas.src ="img/book_store/books/book-01.png";
////document.getElementById("knygos").appendChild(div);

//div.appendChild(paveikslas);
////div.innerText=knyga.name;

var ikelimoel="brBook"+i+"";

var ikeltiIDIV = document.getElementById(ikelimoel);

ikeltiIDIV.innerHTML="<div class=\"book\"> <img src="+knyga.imgSrc+" alt=\"cover\"> <h4>"+knyga.name+"</h4> <p>"+knyga.author+"</p> <p class=\"starcreate\">"+knyga.rating+"</p>  </div>";
i++;

}
sukurtiDiv(knyga1);
sukurtiDiv(knyga2);
sukurtiDiv(knyga2);
sukurtiDiv(knyga2);
sukurtiDiv(knyga2);
sukurtiDiv(knyga1);
sukurtiDiv(knyga1);
sukurtiDiv(knyga2);
sukurtiDiv(knyga1);
sukurtiDiv(knyga2);
sukurtiDiv(knyga2);
sukurtiDiv(knyga2);
sukurtiDiv(knyga2);
sukurtiDiv(knyga1);
sukurtiDiv(knyga1);
sukurtiDiv(knyga2);
stargen(5,"starcreate");

/* funkcija isvalanti browser langa*/
function isvalytiEkranaBrowser() {

for (var ii = 1; ii<51;ii++){
    var ikelimoel="brBook"+ii+"";   
    var ikeltiIDIV = document.getElementById(ikelimoel);

    ikeltiIDIV.innerHTML="<div class=\"book\">  </div>";

}

}

//isvalytiEkranaBrowser();


/* funkcija atvaizdavimas knygas buy lange*/
var iii=1;
function sukurtiBuy(knyga){

var ikelimoel2="book"+iii+"";

var ikeltiIDIV2 = document.getElementById(ikelimoel2);


   ikeltiIDIV2.innerHTML="<div class=\"book\" id="+ikelimoel2+"> <img src="+knyga.imgSrc+" alt=\"cover\"> <h4>"+knyga.name+"</h4> <p>"+knyga.author+"</p> <p>"+knyga.rating+"</p> <div class=\"price\"> <p>Price: </p><p id=\"buyBooks-bookprice"+iii+"\">"+knyga.price+" Eur</p> </div> <button class=\"buybook\" id=\"buybook"+iii+"\" onclick=\"wishbuttonpush("+iii+")\">Add to Wishlist</button> </div>"; 
   
iii++;
}

sukurtiBuy(knyga1);
sukurtiBuy(knyga2);
sukurtiBuy(knyga1);
sukurtiBuy(knyga2);

sukurtiBuy(knyga1);
sukurtiBuy(knyga2);
sukurtiBuy(knyga1);
sukurtiBuy(knyga2);


/* funkcija atvaizdavimui favorite listui*/

var iiii=1;
function sukurtiFavoriteBook(knyga){

var ikelimoel3="favbook"+iiii+"";

var ikeltiIDIV3 = document.getElementById(ikelimoel3);
    
ikeltiIDIV3.innerHTML=" <img src="+knyga.imgSrc+" alt=\"cover\"> <h4  id=\"favoriteBooks-title"+iiii+"\">"+knyga.name+"</h4> <p favoriteBooks-author"+iiii+">"+knyga.author+"</p>  ";

iiii++;
}
sukurtiFavoriteBook(knyga1);
sukurtiFavoriteBook(knyga1);
sukurtiFavoriteBook(knyga2);
sukurtiFavoriteBook(knyga1);
sukurtiFavoriteBook(knyga1);
sukurtiFavoriteBook(knyga2);
sukurtiFavoriteBook(knyga1);
sukurtiFavoriteBook(knyga1);
sukurtiFavoriteBook(knyga2);
sukurtiFavoriteBook(knyga1);



/* funkcija atvaizdavimui wishlistui listui*/

var iiiii=1;
function sukurtiWishlist(knyga){

var ikelimoel3="wishbook"+iiiii+"";

var ikeltiIDIV3 = document.getElementById(ikelimoel3);
    
ikeltiIDIV3.innerHTML=" <img src="+knyga.imgSrc+" alt=\"cover\"> <h4  id=\"favoriteBooks-title"+iiiii+"\">"+knyga.name+"</h4> <p favoriteBooks-author"+iiiii+">"+knyga.author+"</p> <div class=\"price\"> <p>Price: </p><p id=\"buyBooks-bookprice"+iiiii+"\">"+knyga.price+" Eur</p> </div> ";
    
  

iiiii++;
}

sukurtiWishlist(knyga2);





/* Apatine navigacija */
var b= [document.getElementById("b1"),document.getElementById("b2"),document.getElementById("b3"),document.getElementById("b4"),document.getElementById("b5")];

var b1= document.getElementById("b1");
var b2 =document.getElementById("b2");
var b3=document.getElementById("b3");
var b4= document.getElementById("b4");
var b5 = document.getElementById("b5");

var kintamasis=1;
function push_1() {
atstatyti();
  
    b1.id ="footer-button-active";
    kintamasis=1;
}
function push_2() {
   atstatyti();
   b2.id ="footer-button-active";
   kintamasis=2;
}
function push_3() {
  atstatyti();
  b3.id ="footer-button-active";
  kintamasis=3;
}
function push_4() {
    atstatyti();
   b4.id ="footer-button-active";
            cl_weakauth_singin(cl_weakauth_cookieman_get("catus_users"), cl_weakauth_cookieman_get("cokb_locked"));
   kintamasis=4;
}
function push_5() {
    atstatyti();
   b5.id ="footer-button-active";
   kintamasis=5;
   
}
function atstatyti(){
    for (var i=0, max=b.length; i < max; i++) {
     b[i].id ="footer-button-noactive";

}
}
function push_right() {
  atstatyti();
if(kintamasis == 5){
    push_1();
    kintamsis =1;
}
        else if(kintamasis == 1){
            push_2();
         }
         else if(kintamasis == 2){
            push_3();
         }
         else if(kintamasis == 3){
            push_4();
         }
        else if(kintamasis == 4){
            push_5();
         }
     
 
}
function push_left() {
    atstatyti();
          if(kintamasis == 5){
               push_4();
      
           }
          else if(kintamasis == 4){
              push_3();
           }
           else if(kintamasis == 3){
              push_2();
           }
           else if(kintamasis == 2){
              push_1();
           }
          else if(kintamasis == 1){
              push_5();
           }
       
   
  }