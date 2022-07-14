document.getElementById("regulationsButton").onclick = () => {
  document.getElementById("regulations").classList.add("show");
};
document.getElementById("regulationsButton1").onclick = () => {
  document.getElementById("regulations").classList.add("show");
};

document.querySelector(".closeTerms").onclick = () => {
  document.getElementById("regulations").classList.remove("show");
};

document.getElementById("buttonClick").onclick = () => {
  clickButton();
};

CountDownTimer("02/19/2023 10:1 AM", "countdown");

function CountDownTimer(dt, id) {
  var end = new Date(dt);

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;

  function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById(id).innerHTML = "EXPIRED!";

      return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".min").innerHTML = minutes;
    document.querySelector(".sec").innerHTML = seconds;
  }

  timer = setInterval(showRemaining, 1000);
}

const clickButton = () => {
    const hrefdesktopPages = "./zainwestuj.html";

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      let now = new Date().valueOf();
      setTimeout(function () {
        if (new Date().valueOf() - now > 100) return;
        window.location = hrefdesktopPages;
      }, 50);
        var action =
          `skycash://mars.skycash.com/tags/show?id=spartacus:webview:` +
          new Date().getTime();
        try {
          console.log("redirecting replace to " + action);
          window.location.replace(action);
        } catch (e) {
          console.error("redirecting href to " + action);
          window.location.href = action;
        }

    } else {
      window.location = hrefdesktopPages;
    }
}