document.getElementById("dash_button").addEventListener("click", function () {
    document.getElementById("dash").style.display = "flex";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("account_settings").style.display = "none";
    document.getElementById("company1").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("brands").style.display = "none";

    animate1('dash');
});

document.getElementById("team_button").addEventListener("click", function () {
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "flex";
    document.getElementById("company1").style.display = "none";
    document.getElementById("account_settings").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("brands").style.display = "none";

    animate1('team');
});


function toggleTheme() {
    var body = document.body;
    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        var scadenza = new Date();
        scadenza.setTime(scadenza.getTime() + (365 * 24 * 60 * 60 * 1000));
        var scadenzaUTC = scadenza.toUTCString();
        document.cookie = "theme=dark-theme; expires=" + scadenzaUTC + "; path=/";
        animateALL()
    } else if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        var scadenza = new Date();
        scadenza.setTime(scadenza.getTime() + (365 * 24 * 60 * 60 * 1000));
        var scadenzaUTC = scadenza.toUTCString();
        document.cookie = "theme=light-theme; expires=" + scadenzaUTC + "; path=/";
        animateALL()
    }
}



function notifications_function(){
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "flex";
    document.getElementById("company1").style.display = "none";
    document.getElementById("account_settings").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("brands").style.display = "none";

    animate1('team');
}

function showNotifications(){
  document.getElementById("dash").style.display = "none";
  document.getElementById("team").style.display = "none";
  document.getElementById("company1").style.display = "none";
  document.getElementById("account_settings").style.display = "none";
  document.getElementById("notifications").style.display = "flex";
  document.getElementById("projects").style.display = "none";
  document.getElementById("brands").style.display = "none";

  animate1('notifications');
}

function dash_function(){
    document.getElementById("dash").style.display = "flex";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("company1").style.display = "none";
    document.getElementById("account_settings").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("brands").style.display = "none";

    animate1('dash');
}


function account_button(){
    document.getElementById("dash").style.display = "none";
    document.getElementById("company1").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("account_settings").style.display = "flex";
    document.getElementById("projects").style.display = "none";
    document.getElementById("brands").style.display = "none";

    animate1('account_settings');
}


function company_function(){
  document.getElementById("dash").style.display = "none";
  document.getElementById("notifications").style.display = "none";
  document.getElementById("team").style.display = "none";
  document.getElementById("account_settings").style.display = "none";
  document.getElementById("company1").style.display = "flex";
  document.getElementById("projects").style.display = "none";
  document.getElementById("brands").style.display = "none";

  animate1('company1');
}

function projects_function(){
  document.getElementById("dash").style.display = "none";
  document.getElementById("notifications").style.display = "none";
  document.getElementById("team").style.display = "none";
  document.getElementById("account_settings").style.display = "none";
  document.getElementById("company1").style.display = "none";
  document.getElementById("projects").style.display = "flex";
  document.getElementById("brands").style.display = "none";

  animate1('projects');
}

function brands_function(){
  document.getElementById("dash").style.display = "none";
  document.getElementById("notifications").style.display = "none";
  document.getElementById("team").style.display = "none";
  document.getElementById("account_settings").style.display = "none";
  document.getElementById("company1").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("brands").style.display = "flex";

  animate1('brands');
}


function showRegister(){
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "flex";

    animate1('register');
}

function showLogin(){
    document.getElementById("login").style.display = "flex";
    document.getElementById("register").style.display = "none";

    animate1('login');
}


  function getCookieValue(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  }



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


    function loginUser() {
        var email = document.getElementById("login_mail").value;
        var password = document.getElementById("login_password").value;
        
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(function(user) {
            document.getElementById("no_logged").style.display = "none";
            document.getElementById("logged").style.display = "flex";

            var userEmail = user.email;
            document.cookie = "mail=" + userEmail + ";";

          var uid = user.uid;
          document.cookie = "uid=" + uid + ";";

          refresh1();
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
      
      function getCookieValue(cookieName) {
          const name = cookieName + "=";
          const decodedCookie = decodeURIComponent(document.cookie);
          const cookieArray = decodedCookie.split(';');
      
          for (let i = 0; i < cookieArray.length; i++) {
              let cookie = cookieArray[i];
              while (cookie.charAt(0) === ' ') { 
                  cookie = cookie.substring(1);
              }
              if (cookie.indexOf(name) === 0) {
                  return cookie.substring(name.length, cookie.length);
              }
          }
          return "";
      }
      

      function saveUserToGeneralList(uid, name) {
          const docRef = db.collection('general').doc('users_list');
          docRef.update({
                  [uid]: name
              })
              .then(() => {
                  console.log('L\'utente è stato aggiunto alla lista utenti.');
              })
              .catch((error) => {
                  console.error("Errore nell'aggiunta dell'utente alla lista utenti: ", error);
              });
      }
      

    
   function refresh1(){
    getCompanies1();
    animate1('master_container');
    fillSelectionsTeams();
    populateSelectWithTags();

    document.getElementById('dash_mail_display').innerText = getCookieValue('mail');
    document.getElementById('dash_name_display').innerText = getCookieValue('name');
  }

  document.addEventListener("DOMContentLoaded", function() {

    //NON INSERIRE MAI QUI DELLE FUNZIONI CON FIRESTORE DATABASE, VANNO INSERITE NELLA PARTE DI LOGIN, REGISTRAZIONE E CONTROLLO DEL SE L'UTENTE è LOGGATO, POICHè ALTRIMENTI NON CI SONO I PARAMETRI FONDAMENTALI PER LEGGERE I DATI DAL DATABASE COME UID

    //change task, data di default accountings
let inputDate = document.getElementById('accounting_start_date1');
let today = new Date().toISOString().split('T')[0];
inputDate.value = today;

    //cookie per ricordare al sito quale tema hai scelto
    const selectedTheme1 = getCookieValue('theme');
    if (selectedTheme1 === 'light-theme'){
      document.body.classList.add("light-theme");
    }else{
      if (selectedTheme1 === 'dark-theme'){
        document.body.classList.add("dark-theme");
      }else{
        document.body.classList.add("light-theme");
      }
    }
  });


  document.getElementById('end_task_date_input').addEventListener('change', function() {
    document.getElementById('end_div1').style.display = "block"
    document.getElementById('start_task_date_input').value = document.getElementById('end_task_date_input').value;
  });


function add_accounting1(){
  if (document.getElementById("accounting_create1").style.display === "flex"){
   document.getElementById("accounting_create1").style.display = "none";
  }else{
   document.getElementById("accounting_create1").style.display = "flex";
  }
 }
