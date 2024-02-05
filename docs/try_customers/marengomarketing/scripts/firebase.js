const firebaseConfig = {
    apiKey: "AIzaSyC1OehS_NbBUQVp_BIXrS6tWeALPkFADAc",
    authDomain: "mmdb1-c34cb.firebaseapp.com",
    databaseURL: "https://mmdb1-c34cb-default-rtdb.firebaseio.com",
    projectId: "mmdb1-c34cb",
    storageBucket: "mmdb1-c34cb.appspot.com",
    messagingSenderId: "145231893655",
    appId: "1:145231893655:web:9438fb4a6b59528ff645d2",
    measurementId: "G-VF2TPCSJZN"
  };
  
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  var db = firebase.firestore();
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("logged").style.display = "flex";
      document.getElementById("no_logged").style.display = "none";
  
      globalThis.user = user;

      var userEmail = user.email;
      document.cookie = "mail=" + userEmail + ";";
  
      var uid = user.uid;
      document.cookie = "uid=" + uid + ";";
  
      refresh1();

    } else {
      document.getElementById("logged").style.display = "none";
      document.getElementById("no_logged").style.display = "flex";
    }
  });
  })
  .catch(function(error) {
  console.log(error);
  });
  