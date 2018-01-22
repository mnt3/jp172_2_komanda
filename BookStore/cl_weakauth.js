/*------------------------------------------------------------------+
|     NONE OF THIS IS SECURE. ONLY FOR DEMONSTRATION PURPOSES.      |
|     WHY DO STUPID PEOPLE EXIST?! CALLING THIS SCRIPT A SECURE WAY |
|     TO AUTHENTICATE IS STUPID AND SHOULD NEVER BE DONE.           |
|     So, in turn I just called myself stupid.                      |
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

function cl_weakauth_singin(nick= document.getElementById("cl_formemail").value, pswd= document.getElementById("cl_formpswd").value) {
    var check = cl_weakauth_checks(nick, pswd);
    //console.log("check_nick: " + check[0] + " check_pswd: " + check[1]);
    if(check[0] && check[1]) 
    {
        document.getElementsByClassName("login")[0].innerHTML = "<a href=\"#\" class=\"header-login\" id=\"Loginform\"> " + nick + " </a> <i class=\"fa fa-chevron-circle-down\" aria-hidden=\"true\"></i>";
        browse();
        nav_logedin();
        return true;
    }
    
    return false;
}

function cl_weakauth_cookieman_get(cookie_name= "") {
    var cookies = document.cookie.split("; ");
    
    for (i = 0; i < cookies.length; i++)
    {
        if(cookies[i].indexOf(cookie_name) > -1)
        {
            cookies = cookies[i].split("=");
            return cookies[1];
        }
    }
    
    return false;
}

function cl_weakauth_cookieman_set(cookie_name= "", cookie_val = "") {
    document.cookie = cookie_name + "=" + cookie_val + "; expires=Thu, 01 Jan 2300 00:00:00 UTC; path=/;";
}

function cl_weakauth_cookieman_del(cookie_name= "") {
    document.cookie = cookie_name + "=" + "; expires=Thu, 01 Jan 1300 00:00:00 UTC; path=/;";
}