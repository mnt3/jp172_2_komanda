/*------------------------------------------------------------------+
|     NONE OF THIS IS SECURE. ONLY FOR DEMONSTRATION PURPOSES.      |
+------------------------------------------------------------------*/

var auth_nick = [ "aven", "mykl", "andr", "tommy", "0" ],
auth_pswd = [ "pizza", "jelly", "peanut", "porkchop", "0" ]; 

function cl_weakauth_checks(nick= "0", pswd= "0") {
    var checks = [];
    for (i = 0; auth_nick.length > i; i++) 
    {
        if (auth_nick[i] == nick) 
        {
            //console.log("nick Succ.");
            checks.push("nick_true"); 
            
            if(auth_pswd[i] == pswd) 
            {
                //console.log("pswd Succ.");
                checks.push("pswd_true");
                break;
            }
            else 
            {
                //console.log("pswd Fail.");
                checks.push("pswd_false");                
            }
        }
        else
        {
            //console.log("nick Fail.");
            checks.push("nick_false"); 
        }
    }
    
    var rtrn = [];
    if (checks.indexOf("nick_true") > -1) 
    {
        rtrn.push(true);
    }
    else
    {
        rtrn.push(false);
    }
    
    if (checks.indexOf("pswd_true") > -1) 
    {
        rtrn.push(true);
    }
    else
    {
        rtrn.push(false);
    }
    return rtrn;
}

function cl_weakauth_singup(nick= "0", pswd= "0", email= "0", gend= "0") {
    return false;
}

function cl_weakauth_singin(nick= document.getElementsByClassName("email")[0].value, pswd= document.getElementsByClassName("password")[0].value) {
    var check = cl_weakauth_checks(nick, pswd);
    //console.log("check_nick: " + check[0] + " check_pswd: " + check[1]);
    if(check[0] && check[1]) 
    {
        //console.log(document.getElementsByClassName("login")[0].innerHTML);
        return true;
    }
    
    return false;
}