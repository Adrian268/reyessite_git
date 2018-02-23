var open = false;

function handleMenu(){
    var nav = document.getElementById("main_nav");

    if(open == false) {
        nav.style.transition = "height .5s ease-in-out 0s";
        nav.style.height = "175px";
        open = true;
    }else{
        nav.style.transition = "height .5s ease-in-out 0s";
        nav.style.height = "35px";
        open = false;
    }
}

function fixNavMenu(){

    var nav = document.getElementById("main_nav");
    var window_width = document.body.offsetWidth;

    if(window_width > 667){
        nav.style.transition = "none";
        nav.style.height = "70px";
    }
    else{
        nav.style.height = "35px";
    }

    if(window_width > 390)
    document.getElementById("calzone").style.height = "45px";
    else document.getElementById('calzone').style.height = "75px"
}

//window.onresize = fixNavMenu;
