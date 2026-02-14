function sayYes() {

  var song = document.getElementById("loveSong");

  if (song) {
    song.play().catch(function(error){
      console.log("Music blocked:", error);
    });
  }

  document.body.innerHTML = `
    <div style="text-align:center; padding:40px;">

      <p style="font-size:28px; font-weight:bold;">
        Cheenu loves Chikuuuu 💕
      </p>

      <img src="cute-boy-cheek-pinching-his-girlfriend-happy-valentine-cartoon-character-illustration_56104-367.avif" 
           style="width:280px; margin-top:20px; border-radius:20px; box-shadow:0px 10px 25px rgba(0,0,0,0.2);">

    </div>
  `;
}
