var options = {
    strings: ['Your new Web app', 'Your new website',],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    startDelay: 2000, // Delay di 2 secondi prima di iniziare a scrivere i testi successivi
    onComplete: function (self) {
        self.cursor.classList.add('blinking-cursor');
    },
    onDestroy: function (self) {
        self.cursor.classList.remove('blinking-cursor');
    }
};

var typed = new Typed('#typed', options);



//CECKBOX BUTTON FIVERR

    
// Ottieni la checkbox dal documento
var checkbox = document.getElementById('checkbox');

// Aggiungi un ascoltatore di eventi per controllare quando la checkbox viene selezionata
checkbox.addEventListener('change', function() {
// Controlla se la checkbox è selezionata
if (checkbox.checked) {
    // Ritarda l'apertura della pagina di Google di 2 secondi
    setTimeout(function() {
        window.location.href = 'https://www.fiverr.com/s/3lX8am';
    }, 100); // 2000 millisecondi = 2 secondi
}
});



function openMenu1(){
  var exploreSite1 = document.getElementById('explore_site1');
var currentDisplay = window.getComputedStyle(exploreSite1).getPropertyValue('display');

if (currentDisplay === 'flex') {
    exploreSite1.style.display = 'none';
} else {
    exploreSite1.style.display = 'flex';
}
}