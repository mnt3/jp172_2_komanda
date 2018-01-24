/* wishlist mygtukas*/
var sum = 0;
var sumVieta = document.getElementById("totalPrice");
/*paspausto mygtuko funkcija*/
var masyvas = [];
var masyvasFavbook=[];
resultfilterbooks=[];
masyvas= bookArray;

function  wishbuttonpush(paspBusena){
    var vardas = "knyga"+paspBusena;
    
    
    sukurtiWishlist(masyvas[paspBusena-1]);
    sumCalculate(masyvas[paspBusena-1]);
    
}

function sumCalculate(knygas){
  sum=sum+Number(knygas.price);
  sumVieta.innerHTML="<p>Eur</p><p>"+sum+"</p>";
}
function minusCalculator(bookID){
    sum=sum-Number(masyvas[bookID-1].price);
    sumVieta.innerHTML="<p>Eur</p><p>"+sum+"</p>";
}
sumVieta.innerHTML="<p>Eur</p><p>"+sum+"</p>";

function  favbuttonpush(paspBusena){
  var vardas = "knyga"+paspBusena;
  sukurtiFavoriteBook(masyvas[paspBusena-1]);
}

function checkoutFunction(){
    location.reload();
    
    // reiks kazkokios pirkimo formos
}
//funkcija kuri favourite books isfiltruoja veikia, bet kartais nuluzta perdaug klikinant
// kolkas netrinti, gal veliau pravers, ziurint ka Mykolas pasiulys
/* 
function  favbuttonpush(paspBusena){
 // var vardas = ""+paspBusena;
 //  resultfilterbooks = masyvasFavbook.filter(word => word.name!=vardas);
 // filterFavbooks(vardas,paspBusena);
   for (i =1 ; i <= masyvasFavbook.length; i++) { 
    detelefvBook(i);
} 
  masyvasFavbook.push(paspBusena);
  masyvasFavbook=filtrerArrayFavourite(masyvasFavbook);

  for (i = 0; i < masyvasFavbook.length; i++) { 
    sukurtiFavoriteBook(masyvas[masyvasFavbook[i]-1]);
}
 function detelefvBook(deleteBok){
    var vardas2 ="fvboon"+deleteBok;
   // document.getElementById(vardas2).innerHTML="";
    document.getElementById(vardas2).remove();
    
}
   
    
    
}
function filtrerArrayFavourite(elementt){
  let Newarray = elementt.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
  });
  return Newarray
}
*/

/*
function filterFavbooks(name, fvbusena){
  var resultfilterbooks = masyvasFavbook.filter(word => word.name!=name);
if (resultfilterbooks.length < 0){
  sukurtiFavoriteBook(masyvas[fvbusena-1]);
}

}
*/





