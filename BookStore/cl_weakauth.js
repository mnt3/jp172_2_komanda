/*------------------------------------------------------------------+
|     NONE OF THIS IS SECURE. ONLY FOR DEMONSTRATION PURPOSES.      |
|     WHY DO STUPID PEOPLE EXIST?! CALLING THIS SCRIPT A SECURE WAY |
|     TO AUTHENTICATE IS STUPID AND SHOULD NEVER BE DONE.           |
|     So, in turn I just called myself stupid.                      |
+------------------------------------------------------------------*/

var auth_nick = [ "aven", "mykl", "andr", "tommy", "divideby" ],
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

function cl_weakauth_logArray_init(reset = false) {
    if(!cl_weakauth_cookieman_get("cl_weakauth_nicks") | reset)
    {
        cl_weakauth_cookieman_set("cl_weakauth_nicks", auth_nick);
        cl_weakauth_cookieman_set("cl_weakauth_pswds", auth_pswd);
    }
    
    if(cl_weakauth_cookieman_get("cl_weakauth_nicks"))
    {
        auth_nick = cl_weakauth_cookieman_get("cl_weakauth_nicks").split(",");
        auth_pswd = cl_weakauth_cookieman_get("cl_weakauth_pswds").split(",");
        return true;
    }
    return false;
}

cl_weakauth_logArray_init();

function cl_weakauth_singup(nick= document.getElementById("cl_singup_formemail").value, pswd= document.getElementById("cl_singup_formpswd").value) { // the email one makes me SAD.
    var check = cl_weakauth_checks(nick);
    if(check[0] | nick.length <= 0)
    {
        text_nicktaken.style.display = "block";
        text_nopswd.style.display = "none";
        return "Nick: failed";
    }
    
    if(pswd.length <= 0)
    {
        text_nicktaken.style.display = "none";
        text_nopswd.style.display = "block";
        return "pswd: Empty!";
    }
    
    //cl_weakauth_cookieman_set("cl_weakauth_nicks", cl_weakauth_cookieman_get("cl_weakauth_nicks") + "," + nick);
    //cl_weakauth_cookieman_set("cl_weakauth_pswds", cl_weakauth_cookieman_get("cl_weakauth_pswds") + "," + pswd);
    
    auth_nick.push(nick);
    auth_pswd.push(pswd);
    
    cl_weakauth_logArray_init(true);
    login();
    
    return true;
}

function cl_weakauth_singin(nick= document.getElementById("cl_formemail").value, pswd= document.getElementById("cl_formpswd").value) {
    var check = cl_weakauth_checks(nick, pswd);
    //console.log("check_nick: " + check[0] + " check_pswd: " + check[1]);
    if(check[0] && check[1]) 
    {
        document.getElementsByClassName("login")[0].innerHTML = "<a href=\"#\" class=\"header-login\" id=\"Loginform\" onclick=\"cl_weakauth_singout();\"> " + nick + " </a> <i class=\"fa fa-chevron-circle-down\" aria-hidden=\"true\"></i>";
        browse();
        nav_logedin();
        cl_weakauth_cookieman_set("catus_users", nick);
        cl_weakauth_cookieman_set("cokb_locked", pswd);
        
        return true;
    }
    
    return false;
}

function cl_weakauth_singout() {
    document.getElementsByClassName("login")[0].innerHTML = "<a href=\"#\" class=\"header-login\" id=\"Loginform\" onclick=\"login()\">Login<i class=\"fa fa-chevron-circle-down\" aria-hidden=\"true\"></i></a>";    
        
    document.getElementById("cl_formemail").value = "";
    document.getElementById("cl_formpswd").value = "";
    
    // CODE RED, CODE RED, BURN THE EVIDANCE AND RUN!
    cl_weakauth_cookieman_del("catus_users");
    cl_weakauth_cookieman_del("cokb_locked");
    
    login();
    nav_logedout();
    return true;
}

function cl_weakauth_chpswd(oldpswd = document.getElementById("field_oldpswd").value, pswd = document.getElementById("field_pswd").value, repswd = document.getElementById("field_repswd").value) {
    var val = cl_weakauth_cookieman_get("catus_users");
    for (itter = 0; auth_nick.length > itter; itter++)
    {        
        if (auth_nick[itter] == val) 
        {            
            if(auth_pswd[itter] == oldpswd)
            {
                if(pswd == repswd && pswd && repswd)
                {
                    if(cl_weakauth_cookieman_get("cl_weakauth_nicks"))
                    {
                        text_pswd_false.style.display = "none";
                        text_new_pswd_false.style.display = "none";
                        text_new_pswd_true.style.display = "block";
                        document.getElementById("field_oldpswd").value = "";
                        document.getElementById("field_pswd").value = "";
                        document.getElementById("field_repswd").value = "";
                        val = cl_weakauth_cookieman_get("cl_weakauth_pswds").split(",");
                        val[itter] = pswd;
                        cl_weakauth_cookieman_set("cl_weakauth_pswds", val);
                        cl_weakauth_cookieman_set("cokb_locked", pswd);
                        cl_weakauth_logArray_init();
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                {
                    text_pswd_false.style.display = "none";
                    text_new_pswd_false.style.display = "block";
                    text_new_pswd_true.style.display = "none";
                    return false;
                }
            }
            else
            {
                text_pswd_false.style.display = "block";
                text_new_pswd_false.style.display = "none";
                text_new_pswd_true.style.display = "none";
                return false;
            }
        }
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