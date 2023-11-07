document.getElementById("notifications_button").addEventListener("click", function () {
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("manage").style.display = "none";
    document.getElementById("team").style.display = "flex";
    document.getElementById("account_settings").style.display = "none";
    document.getElementById("create1").style.display = "none";
});

document.getElementById("dash_button").addEventListener("click", function () {
    document.getElementById("dash").style.display = "flex";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("manage").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("account_settings").style.display = "none";
    document.getElementById("create1").style.display = "none";
});

document.getElementById("manage_button").addEventListener("click", function () {
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("manage").style.display = "flex";
    document.getElementById("account_settings").style.display = "none";
    document.getElementById("create1").style.display = "none";
});

document.getElementById("team_button").addEventListener("click", function () {
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("manage").style.display = "none";
    document.getElementById("team").style.display = "flex";
    document.getElementById("account_settings").style.display = "none";
    document.getElementById("create1").style.display = "none";
});


document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("light-theme");
});


function toggleTheme() {
    var body = document.body;
    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
    } else if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
    }
}





document.addEventListener("DOMContentLoaded", function () {
 // Dati per il grafico (esempio)
 const options = {
    series: [{
        name: 'Series 1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }],
    chart: {
        height: 350,
        type: 'line',
    },
    xaxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    }
};

// Inizializzazione del grafico utilizzando ApexCharts
const chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();
    
});



function notifications_function(){
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("manage").style.display = "none";
    document.getElementById("team").style.display = "flex";
    document.getElementById("account_settings").style.display = "none";
    document.getElementById("create1").style.display = "none";
}

function dash_function(){
    document.getElementById("dash").style.display = "flex";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("manage").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("account_settings").style.display = "none";
    document.getElementById("create1").style.display = "none";
}


function account_button(){
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("manage").style.display = "none";
    document.getElementById("create1").style.display = "none";
    document.getElementById("account_settings").style.display = "flex";
}

function manage_function(){
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("manage").style.display = "flex";
    document.getElementById("account_settings").style.display = "none";
    document.getElementById("create1").style.display = "none";
}

function add_function(){
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("manage").style.display = "none";
    document.getElementById("account_settings").style.display = "none";
    document.getElementById("create1").style.display = "flex";
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




const firebaseConfig = {
    apiKey: "AIzaSyC1OehS_NbBUQVp_BIXrS6tWeALPkFADAc",
    authDomain: "mmdb1-c34cb.firebaseapp.com",
    projectId: "mmdb1-c34cb",
    storageBucket: "mmdb1-c34cb.appspot.com",
    messagingSenderId: "145231893655",
    appId: "1:145231893655:web:9438fb4a6b59528ff645d2",
    measurementId: "G-VF2TPCSJZN"
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
.then(function() {

firebase.auth().onAuthStateChanged(function(user) {
if (user) {
document.getElementById("logged").style.display = "flex";
document.getElementById("no_logged").style.display = "none";
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
        document.getElementById("log_interface").style.display = "none";
        document.getElementById("logged_interface").style.display = "block";
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


  function writeTask() {
    var taskName = document.getElementById('name_task_input').value;
    if(taskName !== "") {

      const uid = getCookieValue('uid');
      var databaseRef = firebase.database().ref('user_datas/' + uid + '/tasks/');
      var taskName = document.getElementById('name_task_input').value;
      var taskRef = databaseRef.child(taskName);
      
      taskRef.update({
          name : document.getElementById('name_task_input').value,
          owner: document.getElementById('owner_task_input').value,
          company: document.getElementById('company_task_input').value,
          brand: document.getElementById('brand_task_input').value,
          start: document.getElementById('start_task_input').value,
          end: document.getElementById('end_task_input').value
      }).then(function() {
          alert("Task aggiunta con successo");
          manage_function();
          getTasks();
      }).catch(function(error) {
          alert("Si è verificato un errore durante l'aggiunta della task: " + error);
      });    

  } else {
      alert("Il nome della task è vuoto. Si prega di inserire un nome valido.");
  }
  }


  function writeInstrOutcome() {
    var outcomeObject = document.getElementById('outcome_object').value;
    if(outcomeObject !== "") {

      const uid = getCookieValue('uid');
      var databaseRef1 = firebase.database().ref('user_datas/' + uid + '/instrumental_outcome/');
      var taskRef1 = databaseRef1.child(outcomeObject);
      
      taskRef1.update({
          amount: document.getElementById('outcome_amount').value,
          note: document.getElementById('outcome_notes').value,
          date: document.getElementById('outcome_date').value,
      }).then(function() {
          alert("Task aggiunta con successo");
          manage_function();
      }).catch(function(error) {
          alert("Si è verificato un errore durante l'aggiunta della task: " + error);
      });    
      
  } else {
      alert("Inserisci l'oggetto della spesa strumentale");
  }
  }



  function getTasks(){
   // Riferimento al nodo "users"
   const uid = getCookieValue('uid');
   var usersRef = firebase.database().ref('/user_datas/' + uid + '/tasks/');

   // Recupera i dati da Firebase
   usersRef.once('value', function(snapshot) {
     snapshot.forEach(function(childSnapshot) {
       var childData = childSnapshot.val();
       // Manipola i dati come necessario, ad esempio, inseriscili in una tabella HTML
       createTableRow(childData);
     });
   });
 
   function createTableRow(data) {
     // Crea righe della tabella con i dati recuperati
     var table = document.getElementById("tableBody");
 
     var row = table.insertRow();
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);
     var cell4 = row.insertCell(3);
     var cell5 = row.insertCell(4);
     var cell6 = row.insertCell(5);
     
     cell1.innerHTML = data.name; // Supponendo che "nome" sia un campo nel database
     cell2.innerHTML = data.owner; // Supponendo che "email" sia un campo nel database
     cell3.innerHTML = data.company;
     cell4.innerHTML = data.brand;
     cell5.innerHTML = data.start;
     cell6.innerHTML = data.end;
    }

  }