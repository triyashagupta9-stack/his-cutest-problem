function sayYes() {
  const song = document.getElementById("loveSong");
  song.play();

  setTimeout(() => {
    window.location.href = "second.html";
  }, 2000);
}


