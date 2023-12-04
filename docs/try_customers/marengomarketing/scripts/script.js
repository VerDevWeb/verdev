document.getElementById("dash_button").addEventListener("click", function () {
    document.getElementById("dash").style.display = "flex";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("account_settings").style.display = "none";
    document.getElementById("create1").style.display = "none";
    document.getElementById("company1").style.display = "none";
});

document.getElementById("team_button").addEventListener("click", function () {
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "flex";
    document.getElementById("company1").style.display = "none";
    document.getElementById("account_settings").style.display = "none";
    document.getElementById("create1").style.display = "none";
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
    document.getElementById("create1").style.display = "none";
}

function showNotifications(){
  document.getElementById("dash").style.display = "none";
  document.getElementById("team").style.display = "none";
  document.getElementById("company1").style.display = "none";
  document.getElementById("account_settings").style.display = "none";
  document.getElementById("create1").style.display = "none";
  document.getElementById("notifications").style.display = "flex";
}

function dash_function(){
    document.getElementById("dash").style.display = "flex";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("company1").style.display = "none";
    document.getElementById("account_settings").style.display = "none";
    document.getElementById("create1").style.display = "none";
}


function account_button(){
    document.getElementById("dash").style.display = "none";
    document.getElementById("company1").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("create1").style.display = "none";
    document.getElementById("account_settings").style.display = "flex";
}


function add_function(){
    document.getElementById("dash").style.display = "none";
    document.getElementById("company1").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("account_settings").style.display = "none";
    document.getElementById("create1").style.display = "flex";
}

function company_function(){
  document.getElementById("dash").style.display = "none";
  document.getElementById("notifications").style.display = "none";
  document.getElementById("team").style.display = "none";
  document.getElementById("account_settings").style.display = "none";
  document.getElementById("create1").style.display = "none";
  document.getElementById("company1").style.display = "flex";
}

function show1(){
    document.getElementById("instr_outcome_form").style.display = "none";
    document.getElementById("add_task_form").style.display = "flex";
    document.getElementById("add_selection").style.display = "none";
}

function show2(){
    document.getElementById("instr_outcome_form").style.display = "flex";
    document.getElementById("add_task_form").style.display = "none";
    document.getElementById("add_selection").style.display = "none";
}

function show_default(){
    document.getElementById("instr_outcome_form").style.display = "none";
    document.getElementById("add_task_form").style.display = "none";
    document.getElementById("add_selection").style.display = "flex";
}

function showRegister(){
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "flex";
}

function showLogin(){
    document.getElementById("login").style.display = "flex";
    document.getElementById("register").style.display = "none";
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
      .then(function(user) {
        submitNameRegister();
        document.getElementById("log_interface").style.display = "none";
        document.getElementById("logged_interface").style.display = "block";

        //dopo questa riga i codici javascript di questa funzione non funzionano, credo sia dovuto al salvataggio nei cookie
        var userEmail = user.email;
        document.cookie = "mail=" + userEmail + ";";

        var uid = user.uid;
        document.cookie = "uid=" + uid + ";";
      })

      .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  if (errorCode === "auth/email-already-in-use") {
    alert("Mail already used");
  } else {
    alert("An error occurred signing in, have you inserted credential before signing in?");
  }
 });
  }


    
    var selectElement = document.getElementById('select_task_type1');
    selectElement.addEventListener('change', function() {

      var selection = document.getElementById('select_task_type1').value;
      switch (selection) {
        case 'private':
          document.getElementById("owner_task_input").style.display = "none";
          document.getElementById("team_selector1").style.display = "none";
          break;
        case 'team':
          document.getElementById("team_selector1").style.display = "flex";
          document.getElementById("owner_task_input").placeholder = "Membro del team";
          document.getElementById("owner_task_input").style.display = "flex";
          break;
        case 'general':
          document.getElementById("team_selector1").style.display = "none";
          document.getElementById("owner_task_input").style.display = "flex";
          document.getElementById("owner_task_input").placeholder = "A chi vuoi assegnare il task?";
          break;
        default:
          console.log('Assicurati di aver selezionato un owner');
      }

    });


    
   function refresh1(){
    getOpenTasks();
    getCompanies1();
    animateDash();
    fillSelectionsTeams();
  }

  document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById('logged').style.display === 'flex'){
      refresh1();
    }

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


  document.getElementById('start_task_date_input').addEventListener('change', function() {
    document.getElementById('start_div1').style.display = "block"
  });