/* wishlist mygtukas*/
var sum = 0;
var sumVieta = document.getElementById("totalPrice");
/*paspausto mygtuko funkcija*/
var masyvas = [knyga1,knyga2,knyga3,knyga4,knyga5,knyga6,knyga7,knyga8,knyga9,knyga10];

function  wishbuttonpush(paspBusena){
    var vardas = "knyga"+paspBusena;
    
    
    sukurtiWishlist(masyvas[paspBusena-1]);
    sumCalculate(masyvas[paspBusena-1]);
    
}

function sumCalculate(knygas){
  sum=sum+Number(knygas.price);
  sumVieta.innerHTML="<p>Eur</p><p>"+sum+"</p>";
}


/* 2 variantas*/
/*
var paspaustasMygtukas = document.getElementById("buybook1");

paspaustasMygtukas.onclick= function(){
  sukurtiWishlist(knyga1);  
}*/

/* bendros sumos apskaiciavimas*/ 


sumVieta.innerHTML="<p>Eur</p><p>"+sum+"</p>";
//sum.innerText="20";
