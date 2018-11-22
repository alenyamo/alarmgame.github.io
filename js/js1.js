//index1 Alarm Clock----------------------------------------------------

TimeAlarm(document.getElementById("setup"));
function TimeAlarm(b) {
    
    var d = new Date();
    var  h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds();
    document.getElementById("time").innerHTML = Write(h) + ":" + Write(m) + ":" + Write(s);
    d = setTimeout('TimeAlarm()', 500);
    var sh = parseInt(document.getElementById("hour").value);
    var sm = parseInt(document.getElementById("minute").value);
    var ss = parseInt(document.getElementById("second").value);
    
    if ( sh > 23) {
        document.getElementById("message").textContent = "Number of Hours should be up to 24";
    }
    
    if ( sm > 59 ) {
        document.getElementById("message").textContent = "Number of Minutes should be up to 60";
    }
    
    if ( ss > 59) {
        document.getElementById("message").textContent = "Number of Seconds should be up to 60";
    }
    
    if ((h == sh)&&(m == sm)&&(s == ss)) {
           document.getElementById("message").innerHTML = "<iframe width='854' height='480' src='https://www.youtube.com/embed/XD2ZC11pPPQ?autoplay=1' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe><br/><button id='end'>Woke Up</button>";
            console.log (h + " " + sh  + " " + m  + " " + sm + " " + s + " " + ss);
            document.getElementById('end').addEventListener('click', function(){
                document.getElementById("message").innerHTML = "";
                document.getElementById("hour").value="";
                document.getElementById("minute").value="";
                document.getElementById("second").value="";
                }, false);
        }
    
   
    
     function Write(a) {
    if (a < 10) {
        a = "0" + a;
    }
    return a;
   }
    
    
    
}
