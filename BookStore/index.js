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

ikeltiIDIV.innerHTML="<div class=\"book\"> <img src="+knyga.imgSrc+" alt=\"cover\"> <h4>"+knyga.name+"</h4> <p>"+knyga.author+"</p> <p>"+knyga.rating+"</p> <p>"+stargen(5,knyga.price)+" </p> </div>";
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


   ikeltiIDIV2.innerHTML="<div class=\"book\"> <img src="+knyga.imgSrc+" alt=\"cover\"> <h4>"+knyga.name+"</h4> <p>"+knyga.author+"</p> <p>"+knyga.rating+"</p> <div class=\"price\"> <p>Price: </p><p id=\"buyBooks-bookprice"+iii+"\">"+knyga.price+" Eur</p> </div> <button class=\"buybook\" id=\"buybook"+iii+"\" type=\"button\">Add to Wishlist</button> </div>"; 
   
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


/* funkcija atvaizdavimui wish listui*/

var iiii=1;
function sukurtiWishlist(knyga){

var ikelimoel3="wishbook"+iiii+"";

var ikeltiIDIV3 = document.getElementById(ikelimoel3);
    
ikeltiIDIV3.innerHTML="<div class=\"bookRow\"> <img src="+knyga.imgSrc+" alt=\"cover\"> <h4  id=\"favoriteBooks-title"+iiii+"\">"+knyga.name+"</h4> <p favoriteBooks-author"+iiii+">"+knyga.author+"</p>  </div>";

iiii++;
}
sukurtiWishlist(knyga1);
sukurtiWishlist(knyga1);
sukurtiWishlist(knyga2);
sukurtiWishlist(knyga1);
sukurtiWishlist(knyga1);
sukurtiWishlist(knyga2);
sukurtiWishlist(knyga1);
sukurtiWishlist(knyga1);
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

/*zvaigzduciu kurimas mykolo */

function stargen(star_amount = 5, classname = "rating_star") // Remove // from console.log for extra info while debuging
            {
               // classname = classname.trim();
                
                
                var fullstar = "img/book_store/rating/star_full.svg",
                halfstar = "img/book_store/rating/star_half.svg",
                emptystar = "img/book_store/rating/star_empty.svg",
                starmass = document.getElementsByClassName(classname);                
                
                for (v=0; v < starmass.length; v++) 
                {
                    var tofloat = parseFloat(starmass[v].textContent), triggers = 0, finalout = "";
                    //console.log("Float " + v + " : " + tofloat);
                       
                    if(isNaN(tofloat)) 
                    {
                        //console.log(starmass[v] + " (" + v + ")" + " won't be replaced due to a NaN value." + "         star loop triggers: " + triggers); 
                        continue;
                    }
                    
                    for (i = 0; i < star_amount; i++) 
                    { 
                       //triggers++;
                       //if(isNaN(tofloat)) break;
                       if (tofloat > 0.8) 
                       {
                           finalout = finalout + "<img class=\"img_" + classname + "\" src=" + fullstar + " />";
                           tofloat--;
                       }
                        else if (0.25 < tofloat && tofloat < 0.8) // Ayyy, nice numbers.
                       {
                           finalout = finalout + "<img class=\"img_" + classname + "\" src=" + halfstar + " />";
                           tofloat--;
                       }
                        else if (tofloat < 0.25) 
                       {
                           finalout = finalout + "<img class=\"img_" + classname + "\" src=" + emptystar + " />";
                           //tofloat--; // Adds extra delay to execution time and we don't want that.
                       }
                    }
                    //console.log(starmass[v] + " (" + v + ")" + " star loop triggers: " + triggers);
                    starmass[v].innerHTML = finalout;
                }
            }
  
