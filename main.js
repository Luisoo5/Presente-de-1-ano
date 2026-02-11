const targetDate = new Date("March 2, 2026 00:00:00").getTime();

const countdown = setInterval(() => {

  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(countdown);
    document.querySelector(".countdown").style.display = "none";
    document.getElementById("message").innerHTML =
      "💖 Hoje celebramos o nosso amor! Feliz aniversário de namoro! 💖";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

}, 1000);
