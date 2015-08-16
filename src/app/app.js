(function(){
  var duration = 25 * 60 * 1000; //25 minutes
  var timerDiv = document.getElementsByClassName("timer")[0];

  function startTimer() {
    start = Date.now();

    function timer(){
      var timeLeft = duration - (Date.now() - start);
      if(timeLeft > 0){
        timerDiv.innerHTML = Math.floor(timeLeft / 1000 / 60) +
          " minutes " + Math.floor(timeLeft / 1000 % 60) + " seconds left";
        setTimeout(timer, 1000);
      } else {
        alert("Pomodoro complete! Take a break!");
      }
    }

    timer();
  }

  var button = document.getElementById("startTimer");
  button.onclick = startTimer;
})();
