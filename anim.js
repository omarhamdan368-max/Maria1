// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Share, bring me your love", time: 14 },
  { text: "To a broken heart, mend it back up", time: 22 },
  { text: "Show me that you care, show me your worth", time: 29 },
  { text: "To a hundred times of not giving up", time: 38 },
  { text: "I can forgive by sharing my fire with yours", time: 44 },
  { text: "It's easy without the time, that's making us unsure", time: 52 },
  { text: "We're talking on the surface, oh, right where the hurt is", time: 60 },
  { text: "Playing house in broken homes all right in the furnace", time: 68 },
  { text: "Can we just be?", time: 77 },
  { text: "Stay bittersweet", time: 86 },
  { text: "Can we just be?", time: 93 },
  { text: "Stay bittersweet", time: 101 },
  { text: "You swear, you thought that you had me pinned", time: 109 },
  { text: "Uncovered, but I'm still under your skin", time: 117  },
  { text: "Reaching for the finer moments", time: 124 },
  { text: "So we can say the last things over", time: 128 },
  { text: "Again, as you pull me under, under, under", time: 133 },
  { text: "I can forgive by sharing my fire with yours", time: 140 },
  { text: "It's easy without the time, that's making us unsure", time: 148 },
  { text: "We're talking on the surface, oh, right where the hurt is", time: 155 },
  { text: "Playing house in broken homes all right in the furnace", time: 163 },
  { text: "Can we just be?", time: 171 },
  { text: "Stay bittersweet", time: 180 },
  { text: "Can we just be?", time: 187 },
  { text: "Stay bittersweet", time: 195 },
  { text: "In the mood for the flowers", time: 206 },
  { text: "Love.", time: 217 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);