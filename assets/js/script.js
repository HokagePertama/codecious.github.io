(function() {

    var delayMillis = 2000; //1 second
    var d = document.getElementById("time");
    var bl = document.getElementsByClassName("bubble");

    setTimeout(function() {
      d.className += "animated fadeIn";
      setTimeout(function() {
            for(var i=0; i<bl.length; i++) {
                bl[i].className += " animated fadeInUp";
            }
        }, 1000);
    }, delayMillis);

})();
