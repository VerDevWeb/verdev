
function writeChangedPrivateTask(){
    var taskName = document.getElementById('change1').value;
    if(taskName !== "") {

      const uid = getCookieValue('uid');
      var databaseRef = firebase.database().ref('/datas/tasks/personal/' + uid + '/');
      var taskName = document.getElementById('change1').value;
      var taskRef = databaseRef.child(taskName);
      
      var inputStartDateElement = document.getElementById('change9');
      var valoreStartDataStringa = inputStartDateElement.value;
      var startData = new Date(valoreStartDataStringa);
      var startDataFormatted = startData.toISOString().split('T')[0];

      var inputEndDateElement = document.getElementById('change10');
      var valoreEndDataStringa = inputEndDateElement.value;
      var endData = new Date(valoreEndDataStringa);
      var endDataFormatted = endData.toISOString().split('T')[0];


      taskRef.update({
          name : document.getElementById('change1').value,
          description: document.getElementById('change2').value,
          company: document.getElementById('change3').value,
          brand: document.getElementById('change4').value,
          project: document.getElementById('change5').value,
          owner: document.getElementById('change6').value,
          start: startDataFormatted,
          end: endDataFormatted,

     
      }).then(function() {
          alert("Task aggiunta con successo");
          refresh1();
  document.getElementById("dash").style.display = "flex";
  document.getElementById("notifications").style.display = "none";
  document.getElementById("team").style.display = "none";
  document.getElementById("account_settings").style.display = "none";
  document.getElementById("create1").style.display = "none";
  document.getElementById("change_task1").style.display = "none";

      }).catch(function(error) {
          alert("Si è verificato un errore durante l'aggiunta della task: " + error);
      });    

  } else {
      alert("Il nome della task è vuoto. Si prega di inserire un nome valido.");
  }
  }

  
  function writeChangedGeneralTask(){
    var taskName = document.getElementById('change1').value;
    if(taskName !== "") {

      const uid = getCookieValue('uid');
      var databaseRef = firebase.database().ref('/datas/tasks/general/');
      var taskName = document.getElementById('change1').value;
      var taskRef = databaseRef.child(taskName);
      
      var inputStartDateElement = document.getElementById('change9');
      var valoreStartDataStringa = inputStartDateElement.value;
      var startData = new Date(valoreStartDataStringa);
      var startDataFormatted = startData.toISOString().split('T')[0];

      var inputEndDateElement = document.getElementById('change10');
      var valoreEndDataStringa = inputEndDateElement.value;
      var endData = new Date(valoreEndDataStringa);
      var endDataFormatted = endData.toISOString().split('T')[0];


      taskRef.update({
          name : document.getElementById('change1').value,
          description: document.getElementById('change2').value,
          company: document.getElementById('change3').value,
          brand: document.getElementById('change4').value,
          project: document.getElementById('change5').value,
          owner: document.getElementById('change6').value,
          start: startDataFormatted,
          end: endDataFormatted,

     
      }).then(function() {
          alert("Task aggiunta con successo");
          refresh1();
  document.getElementById("dash").style.display = "flex";
  document.getElementById("notifications").style.display = "none";
  document.getElementById("team").style.display = "none";
  document.getElementById("account_settings").style.display = "none";
  document.getElementById("create1").style.display = "none";
  document.getElementById("change_task1").style.display = "none";
      }).catch(function(error) {
          alert("Si è verificato un errore durante l'aggiunta della task: " + error);
      });    

  } else {
      alert("Il nome della task è vuoto. Si prega di inserire un nome valido.");
  }
  }



  function writeTeamTask(){
      var taskName = document.getElementById('change1').value;
    if(taskName !== "") {
      var teamSelector = document.getElementById("team_selector1");
      const uid = getCookieValue('uid');
      var databaseRef = firebase.database().ref('/datas/tasks/team/' + teamSelector.value + '/');
      var taskName = document.getElementById('change1').value;
      var taskRef = databaseRef.child(taskName);
      
      var inputStartDateElement = document.getElementById('change9');
      var valoreStartDataStringa = inputStartDateElement.value;
      var startData = new Date(valoreStartDataStringa);
      var startDataFormatted = startData.toISOString().split('T')[0];

      var inputEndDateElement = document.getElementById('change10');
      var valoreEndDataStringa = inputEndDateElement.value;
      var endData = new Date(valoreEndDataStringa);
      var endDataFormatted = endData.toISOString().split('T')[0];


      taskRef.update({
        name : document.getElementById('change1').value,
        description: document.getElementById('change2').value,
        company: document.getElementById('change3').value,
        brand: document.getElementById('change4').value,
        project: document.getElementById('change5').value,
        owner: document.getElementById('change6').value,
        start: startDataFormatted,
        end: endDataFormatted,

   
      }).then(function() {
          alert("Task aggiunta con successo");
          refresh1();
  document.getElementById("dash").style.display = "flex";
  document.getElementById("notifications").style.display = "none";
  document.getElementById("team").style.display = "none";
  document.getElementById("account_settings").style.display = "none";
  document.getElementById("create1").style.display = "none";
  document.getElementById("change_task1").style.display = "none";
      }).catch(function(error) {
          alert("Si è verificato un errore durante l'aggiunta della task: " + error);
      });    

  } else {
      alert("Il nome della task è vuoto. Si prega di inserire un nome valido.");
  }
  }