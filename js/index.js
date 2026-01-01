document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('meuAudio');
  audio.volume = 0.5; // Define o volume para 50% (0.0 a 1.0)
  audio.play(); // Tenta tocar novamente, mesmo se muted
});
