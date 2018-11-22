//index Game----------------------------------------------------

document.getElementById("start").addEventListener('click', function(){
    document.getElementById("instruction").innerHTML = "<h2>Choose your Fighter</h2><h3>Spaceship beats Star and dies from Ufo. Ufo dies from Star. Star dies from Ship.</h3>";
    document.getElementById("game").innerHTML = "";
    document.getElementById("game").innerHTML = "<div id='img_btn'><img id='ship'  src='images/spaceship.png' value='1'/><img id='star' src='images/star.png' value='2' /><img id='ufo'  src='images/ufo.png' value='3' /></div><div id='computer'></div><div id='answer'></div>";
    document.getElementById("sound").innerHTML = "<audio src='music/ppk.mp3' autoplay></audio>";
    document.getElementById("stop_btn").innerHTML = "<button class='btn btn-danger' id='stop'>Stop</button>";
    
    var d1 = 0;
    
    document.getElementById("ship").addEventListener('click', function() {
  
         
        var a = document.getElementById("ship").getAttribute('value');
         var b = Math.round((Math.random() * 2) + 1);
        if (a == b) {
            document.getElementById("computer").innerHTML = "<img id='ship'  src='images/spaceship.png' value='1'/>";
            document.getElementById("answer").innerHTML = "<div class='alert alert-warning'>Same!</div>";
        };
        if (b == 2) {
            d1++;
            document.getElementById("computer").innerHTML = "<img id='star'  src='images/star.png' value='2'/>";
            if (d1 == 1){
                document.getElementById("answer").innerHTML = "<div class='alert alert-success'>Star! You won " + d1 + " time!</div>";
            } else {
            document.getElementById("answer").innerHTML = "<div class='alert alert-success'>Star! You won " + d1 + " times!</div>";
                }
        };
        if (b == 3) {
            document.getElementById("computer").innerHTML = "<img id='ufo'  src='images/ufo.png' value='3'/>";
            document.getElementById("answer").innerHTML = "<div class='alert alert-danger'>Oops! You lost!</div>";
        };
               
   
   }
, false);
    
      document.getElementById("star").addEventListener('click', function() {
  
                var a = document.getElementById("star").getAttribute('value');
                var b = Math.round((Math.random() * 2) + 1);
        if (b == 1) {
            document.getElementById("computer").innerHTML = "<img id='ship'  src='images/spaceship.png' value='1'/>";
            document.getElementById("answer").innerHTML = "<div class='alert alert-danger'>Oops! You lost!</div>";
            
        };
        if (b == a) {
            document.getElementById("computer").innerHTML = "<img id='star'  src='images/star.png' value='2'/>";
            document.getElementById("answer").innerHTML = "<div class='alert alert-warning'>Same!</div>";
            
        };
        if (b == 3) {
            d1++;
            document.getElementById("computer").innerHTML = "<img id='ufo'  src='images/ufo.png' value='3'/>";
            if (d1 == 1){
                document.getElementById("answer").innerHTML = "<div class='alert alert-success'>Ufo! You won " + d1 + " time!</div>";
            } else {
            document.getElementById("answer").innerHTML = "<div class='alert alert-success'>Ufo! You won " + d1 + " times!</div>";
                }
            
        };
               
   
   }
, false);
    
        document.getElementById("ufo").addEventListener('click', function() {
  
                var a = document.getElementById("ufo").getAttribute('value');
                var b = Math.round((Math.random() * 2) + 1);
        if (b == 1) {
            d1++;
            document.getElementById("computer").innerHTML = "<img id='ship'  src='images/spaceship.png' value='1'/>";
           if (d1 == 1){
                document.getElementById("answer").innerHTML = "<div class='alert alert-success'>Ship! You won " + d1 + " time!</div>";
            } else {
            document.getElementById("answer").innerHTML = "<div class='alert alert-success'>Ship! You won " + d1 + " times!</div>";
                }
            
            
        };
        if (b == a) {
            document.getElementById("computer").innerHTML = "<img id='ufo'  src='images/ufo.png' value='2'/>";
            document.getElementById("answer").innerHTML = "<div class='alert alert-warning'>Same!</div>";
            
        };
        if (b == 2) {
            document.getElementById("computer").innerHTML = "<img id='star'  src='images/star.png' value='3'/>";
            document.getElementById("answer").innerHTML = "<div class='alert alert-danger'>Oops! You lost!</div>";
            
        };
               
   
   }
, false);
    
    
    document.getElementById("stop").addEventListener('click', function(){
    document.getElementById("game").innerHTML = "";
    document.getElementById("game").innerHTML = "<div class='alert stop alert-warning'>You Stopped the Game. Your Score is " + d1 + ". To Restart Reload the Page.</div>";
    
   }, false);



}, false);

