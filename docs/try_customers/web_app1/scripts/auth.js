function loginUser() {
    var email = document.getElementById("login_mail").value;
    var password = document.getElementById("login_password").value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(user) {
        alert('Accesso come admin effettuato con successo')
        window.location.href = 'app_admin.html';
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


