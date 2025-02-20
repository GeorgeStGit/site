document.addEventListener("DOMContentLoaded", function() {
    var vid = document.getElementById('v0');

    vid.pause();
    
    window.onscroll = function(){
        vid.pause();
    };
    
    setInterval(function(){
        vid.currentTime = window.scrollY/400;
    }, 40);
});
