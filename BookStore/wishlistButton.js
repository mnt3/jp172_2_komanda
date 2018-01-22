/* wishlist mygtukas*/

/*paspausto mygtuko funkcija*/
var masyvas = [knyga1,knyga2,knyga3,knyga4,knyga5,knyga6,knyga7,knyga8,knyga9,knyga10];

function  wishbuttonpush(paspBusena){
    var vardas = "knyga"+paspBusena;
    
    
    sukurtiWishlist(masyvas[paspBusena-1]);
    
}


/* 2 variantas*/
/*
var paspaustasMygtukas = document.getElementById("buybook1");

paspaustasMygtukas.onclick= function(){
  sukurtiWishlist(knyga1);  
}*/