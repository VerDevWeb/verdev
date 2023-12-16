const masterDuration = 200;


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
  
  

    
  function animateBox1() {
    const box = document.getElementById('accounting_create1');
    const start = performance.now(); // Tempo di partenza dell'animazione
    const duration = 2000; // Durata dell'animazione in millisecondi (0.5 secondi)
  
    function animate(currentTime) {
      const elapsed = currentTime - start; // Tempo trascorso dall'inizio dell'animazione
      const progress = elapsed / duration; // Progresso dell'animazione da 0 a 1
  
      // Calcola la nuova altezza in base al progresso (da 0 a 100)
      const newHeight = progress * 100;
  
      // Applica la nuova altezza alla casella
      box.style.height = `${newHeight}px`;
  
      // Continua l'animazione se non è ancora completa
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
  
    requestAnimationFrame(animate);
  }


  function animateBox2(){
    var mioElemento = document.getElementById('change_task1');
    
    // Definisci le keyframes per l'animazione di dissolvenza
    var keyframes = [
      { opacity: 0 },
      { opacity: 1 }
    ];
    
    // Opzioni per l'animazione
    var options = {
      duration: 100, // durata in millisecondi
      easing: 'ease-in-out' // tipo di transizione
    };
    
    // Avvia l'animazione
    mioElemento.animate(keyframes, options);
    
    // Puoi anche aggiungere un listener per gestire l'animazione completata
    mioElemento.addEventListener('animationend', function() {
      console.log('Animazione completata!');
    });
    }
    

    function animateALL(){
      var mioElemento = document.getElementById('master_container');
      
      var keyframes = [
        { opacity: 0 },
        { opacity: 1 }
      ];
      
      var options = {
        duration: 500, 
        easing: 'ease-in-out' 
      };
      
      // Avvia l'animazione
      mioElemento.animate(keyframes, options);
      
      mioElemento.addEventListener('animationend', function() {
        console.log('Animazione completata!');
      });
      }