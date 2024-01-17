function showCreate(){
    document.getElementById('create_new').style.display = 'flex';
    document.getElementById('riparazioni_in_garanzia').style.display = 'none';
    document.getElementById('change_repairs').style.display = 'none';
    document.getElementById('riparazioni_interne').style.display = 'none';
    document.getElementById('tutte_le_riparazioni').style.display = 'none';
    animate1('create_new');
}

function showRiparazioniInGaranzia(){
    document.getElementById('create_new').style.display = 'none';
    document.getElementById('riparazioni_in_garanzia').style.display = 'flex';
    document.getElementById('change_repairs').style.display = 'none';
    document.getElementById('riparazioni_interne').style.display = 'none';
    document.getElementById('tutte_le_riparazioni').style.display = 'none';
    animate1('riparazioni_in_garanzia');

}

function showRiparazioniInterne(){
    document.getElementById('create_new').style.display = 'none';
    document.getElementById('riparazioni_in_garanzia').style.display = 'none';
    document.getElementById('change_repairs').style.display = 'none';
    document.getElementById('riparazioni_interne').style.display = 'flex';
    document.getElementById('tutte_le_riparazioni').style.display = 'none';
    animate1('riparazioni_interne');
}

function showTutteLeRiparazioni(){
    document.getElementById('create_new').style.display = 'none';
    document.getElementById('riparazioni_in_garanzia').style.display = 'none';
    document.getElementById('change_repairs').style.display = 'none';
    document.getElementById('riparazioni_interne').style.display = 'none';
    document.getElementById('tutte_le_riparazioni').style.display = 'flex';
    animate1('tutte_le_riparazioni');
}

function showChangeRepair(){
    document.getElementById('create_new').style.display = 'none';
    document.getElementById('change_repairs').style.display = 'flex';
    document.getElementById('riparazioni_in_garanzia').style.display = 'none';
    document.getElementById('riparazioni_interne').style.display = 'none';
    document.getElementById('tutte_le_riparazioni').style.display = 'none';
    animate1('change_repairs');
}

function notificate(message, type){
    if (type === 'error'){
      document.getElementById('notification_icon1').style.color = 'red';
      document.getElementById('notification_icon1').innerText = 'error';
    }else if (type === 'normal'){
      document.getElementById('notification_icon1').style.color = 'green';
      document.getElementById('notification_icon1').innerText = 'check_circle';
    }
    animate1('notification1');
    document.getElementById('notification1').style.display = 'flex';
    document.getElementById('notification_display1').innerText = message;
    setTimeout(function() {
      document.getElementById('notification1').style.display = 'none';
    animate1('notification1');
  }, 5000);  
  }


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
  