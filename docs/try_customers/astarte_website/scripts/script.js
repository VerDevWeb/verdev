function showForm1(){
    var form = document.getElementById('form1')

    if (form.style.display === 'flex'){
        form.style.display = 'none'
    }else{
        form.style.display = 'flex'
    }
}

const inputDestinazione = document.getElementById('message1');

 
// Selezione di un insieme di input per il monitoraggio
const inputDaMonitorare = document.querySelectorAll('#name1, #phone1, #email1, #portfolio_link1');

// Aggiunta degli event listeners per tutti gli input da monitorare
inputDaMonitorare.forEach(function(input) {
  input.addEventListener('input', function() {

 var name = document.getElementById('name1').value;
 var phone = document.getElementById('phone1').value;
 var email = document.getElementById('email1').value;
 var portfolioLink = document.getElementById('portfolio_link1').value;

    document.getElementById('message1').value = ('Salve mi chiamo ' + name + ', lascio le mie referenze per inviare il mio portfolio artistico ' + 'Numero di telefono ' + phone + ', email ' + email + ' link al mio portfolio ' + portfolioLink);
  });
});




function validateForm() {
    var checkbox = document.getElementById('checkbox1');
    if (!checkbox.checked) {
      alert('Si prega di confermare di voler essere ricontattato tramite i dati inseriti.');
      return false; // Blocca l'invio del form se la checkbox non è spuntata
    }
    return true; // Invia il form se la checkbox è spuntata
  }
