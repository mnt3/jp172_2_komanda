function stargen(star_amount= 5, classname= "rating_star") // Remove // from console.log for extra info while debuging
{
    classname = classname.trim();
    
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