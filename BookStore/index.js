/*Objekto kurimas */




function knyga(name = "book", author ="noname", price=0 , imgSrc="img-default.jpg", rating=0.0){
    this.name=name;
    this.author=author;
    this.price=price;
    this.imgSrc=imgSrc;
    this.rating=rating;
}

var knyga1 = new knyga("knyga","autorius",10,"img/book_store/books/book-01.png",5);
var knyga2 = new knyga("knyga2","autorius2",5,"img/book_store/books/book-02.png",3);


//bandymas ideti knyga i div
//var img = document.getElementsByTagName("img");
//img[0].hasAttribute("src");
//img[0].setAttribute("src","img/book_store/books/book-03.png");


function sukurtiDiv (knyga){
var div = document.createElement("div");
div.className ="book";
//var paveikslas = document.createElement("img");
//paveikslas.setAttribute("src", knyga.imgSrc);
//paveikslas.src = knyga.imgSrc;
//paveikslas.src ="img/book_store/books/book-01.png";
document.getElementById("knygos").appendChild(div);

//div.appendChild(paveikslas);
div.innerText=knyga.name;

div.innerHTML="<div class=\"book\"> <img src="+knyga.imgSrc+" alt=\"cover\"> <h4>"+knyga.name+"</h4> <p>"+knyga.author+"</p> <p>"+knyga.rating+"</p> </div>";

}
sukurtiDiv(knyga1);
sukurtiDiv(knyga2);
sukurtiDiv(knyga2);
sukurtiDiv(knyga2);
sukurtiDiv(knyga2);







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


  
