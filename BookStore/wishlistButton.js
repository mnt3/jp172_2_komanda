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
sumVieta.innerHTML="<p>Eur</p><p>"+sum+"</p>";

function  favbuttonpush(paspBusena){
  var vardas = "knyga"+paspBusena;
  sukurtiFavoriteBook(masyvas[paspBusena-1]);
}

/*
function  favbuttonpush(paspBusena){
  var vardas = "knyga"+paspBusena;
 //  resultfilterbooks = masyvasFavbook.filter(word => word.name!=vardas);
 // filterFavbooks(vardas,paspBusena);
  masyvasFavbook.push(vardas);
  masyvasFavbook=filtrerArrayFavourite(masyvasFavbook);

  for (i = 0; i < masyvasFavbook.length; i++) { 
    sukurtiFavoriteBook(masyvas[masyvasFavbook.id]);
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





