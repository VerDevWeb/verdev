 


    function loginUser() {
      var email = document.getElementById("login_mail").value;
      var password = document.getElementById("login_password").value;
      
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user) {
          document.getElementById("no_logged").style.display = "none";
          document.getElementById("logged").style.display = "flex";

          document.cookie = "mail=" + user.email + ";";
          document.cookie = "uid=" + user.uid + ";";


        })
      
        .catch(function(error) {
          var errorMessage = error.message;
          if (errorMessage.includes("password")) {
            alert("Wrong password, try again");
          } else {
            alert("Access error: " + errorMessage);
          }
        });
      }

      function registerUser() {
        var email = document.getElementById("register_mail").value;
        var password = document.getElementById("register_password").value;
    
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(userCredential) {
                var user = userCredential.user;
    
                // Imposta i cookie per mail e uid
                document.cookie = "mail=" + user.email + ";";
                document.cookie = "uid=" + user.uid + ";";
    
                console.log(user.uid)
           
                // Ottieni l'uid dai cookie
                const uid = getCookieValue('uid');
    
                // Salva l'utente nella lista utenti generale
                const nameValue = document.getElementById('name_register_input').value;
                saveUserToGeneralList(uid, nameValue);
                document.cookie = "name=" + nameValue + ";";


            })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === "auth/email-already-in-use") {
                    alert("Mail already used");
                } else {
                }
            });
          }


  var resetPasswordForm = document.getElementById("reset_password_form");
  var resetPasswordButton = document.getElementById("reset_password_button");
  var CancelResetPasswordButton = document.getElementById("CancelResetPasswordBtn");
  
  CancelResetPasswordButton.addEventListener("click", function () {
    resetPasswordForm.style.display = "none";
  });


  resetPasswordButton.addEventListener("click", function () {
    resetPasswordForm.style.display = "flex";
  });



 document.getElementById("resetPasswordBtn").addEventListener("click", function () {
    var email = document.getElementById("emailInput").value;
    firebase.auth().sendPasswordResetEmail(email)
      .then(function() {
        alert("Un'email di reset password è stata inviata al tuo indirizzo.");
      })
      .catch(function(error) {
        alert("Si è verificato un errore durante l'invio dell'email di reset password: " + error.message);
      });
  });


document.getElementById("logoutBtn").addEventListener("click", function () {
    firebase.auth().signOut().then(function() {
      document.cookie = 'uid' + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
      document.cookie = 'userEmail' + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
      alert("Disconnesso con successo!");
    }).catch(function(error) {
      alert("Errore durante la disconnessione: " + error.message);
    });
  });


    function deleteAccount() {
        const user = firebase.auth().currentUser;
    
        if (user) {
          user.delete()
            .then(() => {
              alert("Account eliminato definitivamente.");
            })
            .catch((error) => {
              alert("Si è verificato un errore durante l'eliminazione dell'account.");
              console.error(error);
            });
        } else {
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


   