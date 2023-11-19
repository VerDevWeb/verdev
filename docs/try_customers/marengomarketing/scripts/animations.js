const masterDuration = 200;


function animateDash(){
var mioElemento = document.getElementById('dash');

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


function animateTeam(){
    var mioElemento = document.getElementById('team');
    
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

    function animateCreate1(){
        var mioElemento = document.getElementById('create1');
        
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


function animateSettings(){
    var mioElemento = document.getElementById('account_settings');
    
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
    