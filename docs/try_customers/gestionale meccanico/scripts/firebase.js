const firebaseConfig = {
    apiKey: "AIzaSyBK8aB1PhRlX3ls_AAMqxElVLmK5hK9SoA",
    authDomain: "buildable-4e170.firebaseapp.com",
    databaseURL: "https://buildable-4e170-default-rtdb.firebaseio.com",
    projectId: "buildable-4e170",
    storageBucket: "buildable-4e170.appspot.com",
    messagingSenderId: "905693761163",
    appId: "1:905693761163:web:2b9cdad166817b548f8e8e",
    measurementId: "G-8D1HGCRG4B"
  };
  
  
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  var db = firebase.firestore();
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("login").style.display = "none";
      document.getElementById("master_container").style.display = "flex";

      var userEmail = user.email;
      document.cookie = "mail=" + userEmail + ";";
  
      var uid = user.uid;
      document.cookie = "uid=" + uid + ";";
  
    } else {
      document.getElementById("login").style.display = "flex";
      document.getElementById("master_container").style.display = "none";
    }
  });
  })
  .catch(function(error) {
  console.log(error);
  });
  


   


  function login() {
    var email = document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(user) {
        document.getElementById("login").style.display = "none";
        document.getElementById("master_container").style.display = "flex";

        var userEmail = user.email;
        document.cookie = "mail=" + userEmail + ";";

      var uid = user.uid;
      document.cookie = "uid=" + uid + ";";

      })
    
      .catch(function(error) {
        var errorMessage = error.message;
        if (errorMessage.includes("password")) {
          alert("Password errata");
        } else {
          alert("Errore di accesso: " + errorMessage);
        }
      });
    }
