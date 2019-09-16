function Instagram(){
    window.open("https://www.instagram.com/kejson007/", '_blank');
}
function YouTube(){
    window.open("https://www.youtube.com/watch?v=by3yRdlQvzs&list=RDP1tI4VFMRmE&index=23", '_blank');
}
function Twitter(){
    window.open("www.twitter.com", '_blank');
}
function Facebook(){
    window.open("www.facebook.com", '_blank');
}

function Reload(){
    var get = document.getElementById("stream");
    var content = get.innerHTML;
    get.innerHTML = content;
}

var element = document.getElementById("big_box");

function FullSize(){
    if (element.requestFullscreen){
        element.requestFullscreen();  
    }
    else if(element.mozRequestFullScreen){
        element.mozRequestFullScreen(); //Firefox
    }
    else if(element.webkitRequestFullscreen){
        element.webkitRequestFullscreen();  //Chrome
    }
    else if(element.msRequestFullscreen){
        element.requestFullscreen(); //IE EDGE
    }  
}
