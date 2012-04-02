function login(showhide){
    if(showhide == "show"){
        document.getElementById('login').style.visibility="visible";
    }else if(showhide == "hide"){
        document.getElementById('login').style.visibility="hidden"; 
    }
}

function close()
{
	window.close();
}