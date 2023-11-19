document.getElementById("dash_button").addEventListener("click", function () {
    document.getElementById("dash").style.display = "flex";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("account_settings").style.display = "none";
    document.getElementById("create1").style.display = "none";
});

document.getElementById("team_button").addEventListener("click", function () {
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
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



function notifications_function(){
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "flex";
    document.getElementById("account_settings").style.display = "none";
    document.getElementById("create1").style.display = "none";
}

function showNotifications(){
  document.getElementById("dash").style.display = "none";
  document.getElementById("team").style.display = "none";
  document.getElementById("account_settings").style.display = "none";
  document.getElementById("create1").style.display = "none";
  document.getElementById("notifications").style.display = "flex";
}

function dash_function(){
    document.getElementById("dash").style.display = "flex";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("account_settings").style.display = "none";
    document.getElementById("create1").style.display = "none";
}


function account_button(){
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("create1").style.display = "none";
    document.getElementById("account_settings").style.display = "flex";
}


function add_function(){
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "none";
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
      var selection = document.getElementById('select_task_type1').value;
      switch (selection) {
        case 'private':
          writePrivateTask();
          break;
        case 'team':
          writeTeamTask();
          break;
        case 'general':
          writeGeneralTask();
          break;
        default:
          console.log('Assicurati di aver selezionato un owner');
      }
    }


    function writePrivateTask(){
    var taskName = document.getElementById('name_task_input').value;
    if(taskName !== "") {

      const uid = getCookieValue('uid');
      var databaseRef = firebase.database().ref('/datas/tasks/personal/' + uid + '/');
      var taskName = document.getElementById('name_task_input').value;
      var taskRef = databaseRef.child(taskName);
      
      var inputStartDateElement = document.getElementById('end_task_date_input');
      var valoreStartDataStringa = inputStartDateElement.value;
      var startData = new Date(valoreStartDataStringa);
      var startDataFormatted = startData.toISOString().split('T')[0];

      var inputEndDateElement = document.getElementById('start_task_date_input');
      var valoreEndDataStringa = inputEndDateElement.value;
      var endData = new Date(valoreEndDataStringa);
      var endDataFormatted = endData.toISOString().split('T')[0];


      taskRef.update({
          name : document.getElementById('name_task_input').value,
          description: document.getElementById('description_task_input').value,
          owner: document.getElementById('owner_task_input').value,
          company: document.getElementById('company_task_input').value,
          brand: document.getElementById('brand_task_input').value,
          project: document.getElementById('project_task_input').value,
          start: startDataFormatted,
          end: endDataFormatted,
          status: 'APERTA'

     
      }).then(function() {
          alert("Task aggiunta con successo");
          refresh1();
          dash_function();
      }).catch(function(error) {
          alert("Si è verificato un errore durante l'aggiunta della task: " + error);
      });    

  } else {
      alert("Il nome della task è vuoto. Si prega di inserire un nome valido.");
  }
  }


  function writeGeneralTask(){
    var taskName = document.getElementById('name_task_input').value;
    if(taskName !== "") {

      const uid = getCookieValue('uid');
      var databaseRef = firebase.database().ref('/datas/tasks/general/');
      var taskName = document.getElementById('name_task_input').value;
      var taskRef = databaseRef.child(taskName);
      
      var inputStartDateElement = document.getElementById('end_task_date_input');
      var valoreStartDataStringa = inputStartDateElement.value;
      var startData = new Date(valoreStartDataStringa);
      var startDataFormatted = startData.toISOString().split('T')[0];

      var inputEndDateElement = document.getElementById('start_task_date_input');
      var valoreEndDataStringa = inputEndDateElement.value;
      var endData = new Date(valoreEndDataStringa);
      var endDataFormatted = endData.toISOString().split('T')[0];


      taskRef.update({
          name : document.getElementById('name_task_input').value,
          description: document.getElementById('description_task_input').value,
          owner: document.getElementById('owner_task_input').value,
          company: document.getElementById('company_task_input').value,
          brand: document.getElementById('brand_task_input').value,
          project: document.getElementById('project_task_input').value,
          start: startDataFormatted,
          end: endDataFormatted,
          status: 'APERTA'

     
      }).then(function() {
          alert("Task aggiunta con successo");
          refresh1();
      }).catch(function(error) {
          alert("Si è verificato un errore durante l'aggiunta della task: " + error);
      });    

  } else {
      alert("Il nome della task è vuoto. Si prega di inserire un nome valido.");
  }
  }

  
  function writeTeamTask(){
    var taskName = document.getElementById('name_task_input').value;
    if(taskName !== "") {
      var teamSelector = document.getElementById("team_selector1");
      const uid = getCookieValue('uid');
      var databaseRef = firebase.database().ref('/datas/tasks/team/' + teamSelector.value + '/');
      var taskName = document.getElementById('name_task_input').value;
      var taskRef = databaseRef.child(taskName);
      
      var inputStartDateElement = document.getElementById('end_task_date_input');
      var valoreStartDataStringa = inputStartDateElement.value;
      var startData = new Date(valoreStartDataStringa);
      var startDataFormatted = startData.toISOString().split('T')[0];

      var inputEndDateElement = document.getElementById('start_task_date_input');
      var valoreEndDataStringa = inputEndDateElement.value;
      var endData = new Date(valoreEndDataStringa);
      var endDataFormatted = endData.toISOString().split('T')[0];


      taskRef.update({
          name : document.getElementById('name_task_input').value,
          description: document.getElementById('description_task_input').value,
          owner: document.getElementById('owner_task_input').value,
          company: document.getElementById('company_task_input').value,
          brand: document.getElementById('brand_task_input').value,
          project: document.getElementById('project_task_input').value,
          start: startDataFormatted,
          end: endDataFormatted,
          status: 'APERTA'

     
      }).then(function() {
          alert("Task aggiunta con successo");
          dash_function();
          refresh1();
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
      var databaseRef1 = firebase.database().ref('/datas/tasks/personal/' + uid +'/');
      var taskRef1 = databaseRef1.child(outcomeObject);
      
      taskRef1.update({
          amount: document.getElementById('outcome_amount').value,
          note: document.getElementById('outcome_notes').value,
          date: document.getElementById('outcome_date').value,
      }).then(function() {
          alert("Task aggiunta con successo");
          dash_function();
          refresh1();
      }).catch(function(error) {
          alert("Si è verificato un errore durante l'aggiunta della task: " + error);
      });    
      
  } else {
      alert("Inserisci l'oggetto della spesa strumentale");
  }
  }


function getTasks() {
      // Seleziona la tabella
      var table = document.getElementById("tableBody1");

      // Svuota tutte le righe presenti nella tabella
      while (table.rows.length > 0) {
        table.deleteRow(0);
      }

  const uid = getCookieValue('uid');
  var usersRef = firebase.database().ref('/datas/tasks/personal/' + uid + '/');

  usersRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      createTableRow(childData);
    });
  });

  function createTableRow(data) {
    var table = document.getElementById("tableBody1");

    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);

    cell1.innerHTML = data.name; 
    cell2.innerHTML = data.owner; 
    cell3.innerHTML = data.company;
    cell4.innerHTML = data.project;
    cell5.innerHTML = data.brand;
    cell6.innerHTML = data.start;
    cell7.innerHTML = data.end;
    cell8.innerHTML = data.status;


    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
    editButton.onclick = function() {
      editTask(data.name);
    };
    cell9.className = 'cell9';
    cell9.style.flexdirection = 'column';
    cell9.appendChild(editButton);

    
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>done</i>";
    editButton.onclick = function() {
      deleteTaskGET(data.name);
    };
    cell9.appendChild(editButton);

    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
    editButton.onclick = function() {
      deleteTaskGET(data.name);
    };
    cell9.appendChild(editButton);
  }


  
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
    getTeams2();
    getTeams3();
    getTeams();
    getOpenTasks();
    getClosedTasks();
    getClosedTeamTasks();
    getOpenTeamTasks();
    animateDash();
  }

  document.addEventListener("DOMContentLoaded", function() {
    //refresh1();
  });
  
