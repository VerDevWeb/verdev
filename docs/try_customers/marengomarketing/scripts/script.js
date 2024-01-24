function toggleTheme() {
    var body = document.body;
    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        var scadenza = new Date();
        scadenza.setTime(scadenza.getTime() + (365 * 24 * 60 * 60 * 1000));
        var scadenzaUTC = scadenza.toUTCString();
        document.cookie = "theme=dark-theme; expires=" + scadenzaUTC + "; path=/";
        document.cookie = 'apex-text-chart-color' + "=" + 'white' + ";" + scadenza + ";path=/";
        animateALL()
    } else if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        var scadenza = new Date();
        scadenza.setTime(scadenza.getTime() + (365 * 24 * 60 * 60 * 1000));
        var scadenzaUTC = scadenza.toUTCString();
        document.cookie = "theme=light-theme; expires=" + scadenzaUTC + "; path=/";
        document.cookie = 'apex-text-chart-color' + "=" + 'black' + ";" + scadenza + ";path=/";
        animateALL()
    }
}


function notificate(message, type){
  if (type === 'error'){
    document.getElementById('notification_icon1').style.color = 'red';
    document.getElementById('notification_icon1').innerText = 'error';
  }else if (type === 'normal'){
    document.getElementById('notification_icon1').style.color = 'green';
    document.getElementById('notification_icon1').innerText = 'check_circle';
  }
  animate1('notification1');
  document.getElementById('notification1').style.display = 'flex';
  document.getElementById('notification_display1').innerText = message;
  setTimeout(function() {
    document.getElementById('notification1').style.display = 'none';
  animate1('notification1');
}, 5000);  
}



function notifications_function(){
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "flex";
    document.getElementById("account_settings").style.display = "none";
    document.getElementById("company1").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("brands").style.display = "none";
    document.getElementById("accountings").style.display = "none";
    document.getElementById("tasks").style.display = "none";

    animate1('team');
}

function show_dash(){
  document.getElementById("dash").style.display = "flex";
  document.getElementById("notifications").style.display = "none";
  document.getElementById("team").style.display = "none";
  document.getElementById("account_settings").style.display = "none";
  document.getElementById("company1").style.display = "none";
  document.getElementById("projects1").style.display = "none";
  document.getElementById("accountings").style.display = "none";
  document.getElementById("brands").style.display = "none";
  document.getElementById("tasks").style.display = "none";

  animate1('dash');
}


function show_teams(){
  document.getElementById("dash").style.display = "none";
  document.getElementById("notifications").style.display = "none";
  document.getElementById("team").style.display = "flex";
  document.getElementById("account_settings").style.display = "none";
  document.getElementById("company1").style.display = "none";
  document.getElementById("projects1").style.display = "none";
  document.getElementById("accountings").style.display = "none";
  document.getElementById("brands").style.display = "none";
  document.getElementById("tasks").style.display = "none";

  animate1('team');
}

function show_accountings(){
  document.getElementById("dash").style.display = "none";
  document.getElementById("accountings").style.display = "flex";
  document.getElementById("notifications").style.display = "none";
  document.getElementById("team").style.display = "none";
  document.getElementById("account_settings").style.display = "none";
  document.getElementById("company1").style.display = "none";
  document.getElementById("projects1").style.display = "none";
  document.getElementById("brands").style.display = "none";
  document.getElementById("tasks").style.display = "none";

  animate1('accountings');
}

function show_companies(){
  document.getElementById("dash").style.display = "none";
  document.getElementById("notifications").style.display = "none";
  document.getElementById("team").style.display = "none";
  document.getElementById("account_settings").style.display = "none";
  document.getElementById("company1").style.display = "flex";
  document.getElementById("projects1").style.display = "none";
  document.getElementById("accountings").style.display = "none";
  document.getElementById("brands").style.display = "none";
  document.getElementById("tasks").style.display = "none";

  animate1('company1');
}


function show_projects(){
  document.getElementById("dash").style.display = "none";
  document.getElementById("notifications").style.display = "none";
  document.getElementById("team").style.display = "none";
  document.getElementById("account_settings").style.display = "none";
  document.getElementById("accountings").style.display = "none";
  document.getElementById("company1").style.display = "none";
  document.getElementById("projects1").style.display = "flex";
  document.getElementById("brands").style.display = "none";
  document.getElementById("tasks").style.display = "none";

  animate1('projects1');
}


function show_brands(){
  document.getElementById("dash").style.display = "none";
  document.getElementById("notifications").style.display = "none";
  document.getElementById("team").style.display = "none";
  document.getElementById("account_settings").style.display = "none";
  document.getElementById("company1").style.display = "none";
  document.getElementById("projects1").style.display = "none";
  document.getElementById("accountings").style.display = "none";
  document.getElementById("brands").style.display = "flex";
  document.getElementById("tasks").style.display = "none";

  animate1('brands');
}


function show_tasks(){
  document.getElementById("dash").style.display = "none";
  document.getElementById("notifications").style.display = "none";
  document.getElementById("team").style.display = "none";
  document.getElementById("account_settings").style.display = "none";
  document.getElementById("company1").style.display = "none";
  document.getElementById("accountings").style.display = "none";
  document.getElementById("projects1").style.display = "none";
  document.getElementById("brands").style.display = "none";
  document.getElementById("tasks").style.display = "flex";

  animate1('tasks');
}

function show_account(){
  document.getElementById("dash").style.display = "none";
  document.getElementById("notifications").style.display = "none";
  document.getElementById("team").style.display = "none";
  document.getElementById("accountings").style.display = "none";
  document.getElementById("account_settings").style.display = "flex";
  document.getElementById("company1").style.display = "none";
  document.getElementById("projects1").style.display = "none";
  document.getElementById("brands").style.display = "none";
  document.getElementById("tasks").style.display = "none";

  animate1('account_settings');
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
    getProjects();
    getBrands();
    getTasks();
    getAccountings();
    getPersonalProjects();
    getPersonalEndingTasks();
    animateALL()
    fillCompaniesSelections();
    fillBrandsSelections();
    fillTasksSelections();
    populateSelectWithTags();

    document.getElementById('dash_mail_display').innerText = getCookieValue('mail');
    document.getElementById('dash_name_display').innerText = getCookieValue('name');
  }

  document.addEventListener("DOMContentLoaded", function() {

    //NON INSERIRE MAI QUI DELLE FUNZIONI CON FIRESTORE DATABASE, VANNO INSERITE NELLA PARTE DI LOGIN, REGISTRAZIONE E CONTROLLO DEL SE L'UTENTE è LOGGATO, POICHè ALTRIMENTI NON CI SONO I PARAMETRI FONDAMENTALI PER LEGGERE I DATI DAL DATABASE COME UID

    //change task, data di default accountings
let inputDate = document.getElementById('task_start2');
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

  document.getElementById('accounting_end_date_input1').addEventListener('change', function() {
    document.getElementById('end_div2').style.display = "block"
    document.getElementById('accounting_start_date_input1').value = document.getElementById('accounting_end_date_input1').value;
  });



function add_accounting1(){
  if (document.getElementById("accounting_create1").style.display === "flex"){
   document.getElementById("accounting_create1").style.display = "none";
  }else{
   document.getElementById("accounting_create1").style.display = "flex";
  }
 }
