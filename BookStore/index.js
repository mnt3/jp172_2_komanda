








/* footerio funkcijos  */

var b= [document.getElementById("b1"),document.getElementById("b2"),document.getElementById("b3"),document.getElementById("b4"),document.getElementById("b5")];
var p =[push_1(),push_2(),push_3(),push_4(),push_5()];
var b1= document.getElementById("b1");
var b2 =document.getElementById("b2");
var b3=document.getElementById("b3");
var b4= document.getElementById("b4");
var b5 = document.getElementById("b5");


function push_1() {
atstatyti();
  
    b1.id ="footer-button-active";
}
function push_2() {
   atstatyti();
   b2.id ="footer-button-active";
    
}
function push_3() {
  atstatyti();
  b3.id ="footer-button-active";
    
}
function push_4() {
    atstatyti();
   b4.id ="footer-button-active";
    
}
function push_5() {
    atstatyti();
   b5.id ="footer-button-active";
    
}
function atstatyti(){
    for (var i=0, max=b.length; i < max; i++) {
     b[i].id ="footer-button-noactive";
}
}
function push_left() {
   for (var i=0, max=b.length; i < max; i++) {
     if ( b[i].id == "footer-button-active"){
         
     }
} 
}