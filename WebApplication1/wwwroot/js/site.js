// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function myMove() {
    let id = null;
    clearInterval(id);
    const elem = document.getElementById("animate");
    let pos = -0;
    clearInterval(id);
    id = setInterval(frame, 5);
 
    function frame() {
        if (pos == 370) {
            clearInterval(id);
        } else {
            pos++
            elem.style.bottom = pos + "px";
            elem.style.left = pos + "px";
        }
        
    }
}

function play() {
    let frame = document.getElementById("youtube-video");
    frame.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/0atAh63X_sU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}