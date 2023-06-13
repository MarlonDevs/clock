/*------------------------
-----------RELOJ----------
------------------------*/

function updateClock() {
    var now = new Date();
    var hrs = now.getHours();
    var min = now.getMinutes();
    var seg = now.getSeconds() ;

    var watch = hrs + ':' + min + ':' + seg;
    
    document.getElementById('clock').innerHTML = watch;
}

setInterval(updateClock, 1000);

/*------------------------
-----------FECHA----------
------------------------*/

var today = new Date();
var options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
};

document.getElementById("today").innerHTML = today.toLocaleDateString("es-ES", options);