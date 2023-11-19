function getTaskToChange1(data){

  document.getElementById("dash").style.display = "none";
  document.getElementById("notifications").style.display = "none";
  document.getElementById("team").style.display = "none";
  document.getElementById("account_settings").style.display = "none";
  document.getElementById("create1").style.display = "none";
  document.getElementById("change_task1").style.display = "flex";


  var taskName = data.name;
  var uid = getCookieValue('uid')
var nodo1Ref = database.ref('/datas/tasks/personal/' + uid + '/' + taskName + '/');

// Recupera i dati e inseriscili nelle textbox
nodo1Ref.once('value', function(snapshot) {
  var data = snapshot.val();
  document.getElementById('change1').value = data.name;
  document.getElementById('change2').value = data.description;
  document.getElementById('change3').value = data.company;
  document.getElementById('change4').value = data.brand;
  document.getElementById('change5').value = data.project;
  document.getElementById('change6').value = data.owner;
  
});


}


function writeChangedTask1(){
  var selection = document.getElementById('change7').value;
  switch (selection) {
    case 'private':
      writeChangedPrivateTask();
      break;
    case 'team':
      writeChangedTeamTask();
      break;
    case 'general':
      writeChangedGeneralTask();
      break;
    default:
      console.log('Assicurati di aver selezionato un owner');
  }
}


function editTask(taskName) {
    document.getElementById("dash").style.display = "none";
    document.getElementById("change_task1").style.display = "flex";


        clearTable();
      
        const uid = getCookieValue('uid');
        var usersRef = firebase.database().ref('/datas/tasks/personal/' + uid + '/' + taskName + '/');
      
        usersRef.once('value', function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            createTableRow(childData);
          });
        });
      
        function createTableRow(data) {
      
          cell1.innerHTML = data.name; 
          cell2.innerHTML = data.description; 
          cell3.innerHTML = data.owner; 
          cell4.innerHTML = data.company;
          cell5.innerHTML = data.project;
          cell6.innerHTML = data.brand;
          cell7.innerHTML = data.start;
          cell8.innerHTML = data.status;
          cell9.innerHTML = data.end;
        }
  }

  function showDashFromTaskChange(taskName) {
    document.getElementById("master_container").style.display = "flex";
    document.getElementById("change_task1").style.display = "none";
  }

  function deleteTaskGET(taskName) {
const uid = getCookieValue('uid');
const databaseRef = firebase.database().ref('/datas/tasks/personal/' + uid + '/' + taskName + '/');

databaseRef.remove()
  .then(function() {
    refresh1();
    alert("Task eliminato con successo");
  })
  .catch(function(error) {
    refresh1();
    alert("Errore nell'eliminazione del task:", error);
  });

  }

  function closeTaskGET(taskName) {
    const uid = getCookieValue('uid');
    const databaseRef = firebase.database().ref('/datas/tasks/personal/' + uid + '/' + taskName + '/');
    
    // Dati che vuoi aggiornare nel database
    const updatedData = {
      status: 'CHIUSA',
    };
    
    // Metodo update per aggiornare solo le parti specificate dei dati
    databaseRef.update(updatedData)
      .then(function() {
        refresh1();
      })
      .catch(function(error) {
        console.error("Errore nell'aggiornamento dei dati nel database:", error);
      });
    
  }


  function openTaskGET(taskName) {
    const uid = getCookieValue('uid');
    const databaseRef = firebase.database().ref('/datas/tasks/personal/' + uid + '/' + taskName + '/');
    
    // Dati che vuoi aggiornare nel database
    const updatedData = {
      status: 'APERTA',
    };
    
    // Metodo update per aggiornare solo le parti specificate dei dati
    databaseRef.update(updatedData)
      .then(function() {
        refresh1();
      })
      .catch(function(error) {
        console.error("Errore nell'aggiornamento dei dati nel database:", error);
      });
    
  }