/*------------------------------------------------------------------+
|     NONE OF THIS IS SECURE. ONLY FOR DEMONSTRATION PURPOSES.      |
+------------------------------------------------------------------*/

var auth_nick = [ "aven", "mykl", "andr", "tommy", "0" ],
auth_pswd = [ "pizza", "jelly", "peanut", "porkchop", "0" ]; 

function cl_weakauth_singin(nick= "0", pswd= "0") {
    for (i = 0; auth_nick.length > i; i++) 
    {
        if (auth_nick[i] == nick) 
        {
            if(auth_pswd[i] == pswd) 
            {
                console.log("Succ.");
            }
        }
    }
}

