 // Ottieni il riferimento agli elementi della finestra modale e del pulsante per aprire la finestra
  var resetPasswordForm = document.getElementById("reset_password_form");
  var resetPasswordButton = document.getElementById("reset_password_button");
  var CancelResetPasswordButton = document.getElementById("CancelResetPasswordBtn");
  
  CancelResetPasswordButton.addEventListener("click", function () {
    // Mostra il form per il reset della password
    resetPasswordForm.style.display = "none";
  });


  // Aggiungi un gestore di eventi al pulsante che apre il form per il reset della password
  resetPasswordButton.addEventListener("click", function () {
    // Mostra il form per il reset della password
    resetPasswordForm.style.display = "flex";
  });



 document.getElementById("resetPasswordBtn").addEventListener("click", function () {
    // Ottieni l'indirizzo email inserito dall'utente
    var email = document.getElementById("emailInput").value;

    // Invia l'email di reset password
    firebase.auth().sendPasswordResetEmail(email)
      .then(function() {
        // Email inviata con successo
        alert("Un'email di reset password è stata inviata al tuo indirizzo.");
      })
      .catch(function(error) {
        // Gestisci eventuali errori
        alert("Si è verificato un errore durante l'invio dell'email di reset password: " + error.message);
      });
  });


  // DISCONNESSIONE ACCOUNT


document.getElementById("logoutBtn").addEventListener("click", function () {
    // Disconnetti l'utente da Firebase
    firebase.auth().signOut().then(function() {
      // Operazione di disconnessione riuscita
      alert("Disconnesso con successo!");
    }).catch(function(error) {
      // Gestisci eventuali errori
      alert("Errore durante la disconnessione: " + error.message);
    });
  });


        // ELIMINAZIONE ACCOUNT
      

    function deleteAccount() {
        const user = firebase.auth().currentUser;
    
        if (user) {
          // Elimina l'account dell'utente
          user.delete()
            .then(() => {
              // L'account è stato eliminato con successo
              alert("Account eliminato definitivamente.");
            })
            .catch((error) => {
              // Si è verificato un errore durante l'eliminazione dell'account
              alert("Si è verificato un errore durante l'eliminazione dell'account.");
              console.error(error);
            });
        } else {
          // L'utente non è stato trovato o non è effettuato l'accesso
          alert("Utente non trovato o accesso non effettuato.");
        }
      }
    
      function selectTeam1(){
        var settingsTeamSelector1 = document.getElementById("user_team_selector");
       if (settingsTeamSelector1.style.display === "flex"){
        document.getElementById("user_team_selector").style.display = "none";
        document.getElementById("save_team1").style.display = "none";
        document.getElementById("close_team1").style.display = "none";
       }else{
        document.getElementById("user_team_selector").style.display = "flex";
        document.getElementById("save_team1").style.display = "flex";
        document.getElementById("close_team1").style.display = "flex";
       }
      }

      function saveUserTeam1(){
        const uid = getCookieValue('uid');
        var databaseRef1 = firebase.database().ref('/user_datas/' + uid + '/user_infos/');
        var teamSelectorCHANGE = document.getElementById("user_team_selector");
        
        databaseRef1.update({
            team: teamSelectorCHANGE.value,
        }).then(function() {
            alert("Team cambiato con successo");
        }).catch(function(error) {
            alert("Si è verificato un errore durante il cambio del team: " + error);
        });
    }


    function submitNameRegister() {
      var name = document.getElementById("name_register_input").value;
      const uid = getCookieValue('uid');
      var databaseRef = firebase.database().ref("/user_datas/" + uid + '/user_infos/');
  
      databaseRef.set({
        name: name,

      }).then(function() {
      }).catch(function(error) {
        alert("Si è verificato un errore durante la registrazione del tuo nome " + error);
      });
    }
  