const masterDuration = 150;

function animate1(htmlId){
  var mioElemento = document.getElementById(htmlId);
  
  // Definisci le keyframes per l'animazione di dissolvenza
  var keyframes = [
    { opacity: 0 },
    { opacity: 1 }
  ];
  
  // Opzioni per l'animazione
  var options = {
    duration: masterDuration, // durata in millisecondi
    easing: 'ease-in-out' // tipo di transizione
  };
  
  // Avvia l'animazione
  mioElemento.animate(keyframes, options);
  
  // Puoi anche aggiungere un listener per gestire l'animazione completata
  mioElemento.addEventListener('animationend', function() {
    console.log('Animazione completata!');
  });
  }
  