function getClosedTasks(){
    // Seleziona la tabella
    var table = document.getElementById("tableBody2");

    // Svuota tutte le righe presenti nella tabella
    while (table.rows.length > 0) {
      table.deleteRow(0);
    }
  
const uid = getCookieValue('uid');
var usersRef = firebase.database().ref('/datas/tasks/personal/' + uid + '/');

usersRef.once('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var childData = childSnapshot.val();
    if (childData.status === 'CHIUSA') {
      createTableRow(childData);
    }
  });
});

function createTableRow(data) {
  var table = document.getElementById("tableBody2");

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
  cell2.innerHTML = data.description; 
  cell3.innerHTML = data.owner; 
  cell4.innerHTML = data.company;
  cell5.innerHTML = data.project;
  cell6.innerHTML = data.brand;
  cell7.innerHTML = data.start;
  cell8.innerHTML = data.end;
  cell9.innerHTML = data.status;


var cell10 = row.insertCell(9);
var editButton = document.createElement("button");
editButton.className = "task_actions_button1";
editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
editButton.onclick = function() {
  getTaskToChange1(data);
};
cell10.className = 'cell9';
cell10.style.flexdirection = 'column';
cell10.appendChild(editButton);


var editButton = document.createElement("button");
editButton.className = "task_actions_button1";
editButton.innerHTML = "<i class='material-icons notranslate'>close</i>";
editButton.onclick = function() {
  openTaskGET(data.name);
};
cell10.appendChild(editButton);

var editButton = document.createElement("button");
editButton.className = "task_actions_button1";
editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
editButton.onclick = function() {
  deleteTaskGET(data.name);
};
cell10.appendChild(editButton);
}

}

  
  function getOpenTasks() {
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
        if (childData.status === 'APERTA') {
          createTableRow(childData);
        }
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
      cell2.innerHTML = data.description; 
      cell3.innerHTML = data.owner; 
      cell4.innerHTML = data.company;
      cell5.innerHTML = data.project;
      cell6.innerHTML = data.brand;
      cell7.innerHTML = data.start;
      cell8.innerHTML = data.end;
      cell9.innerHTML = data.status;
    
    
    var cell10 = row.insertCell(9);
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
    editButton.onclick = function() {
      getTaskToChange1(data);
    };
    cell10.className = 'cell9';
    cell10.style.flexdirection = 'column';
    cell10.appendChild(editButton);

    
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>done</i>";
    editButton.onclick = function() {
      closeTaskGET(data.name);
    };
    cell10.appendChild(editButton);

    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
    editButton.onclick = function() {
      deleteTaskGET(data.name);
    };
    cell10.appendChild(editButton);
    }

  }
  

    
  function getOpenTeamTasks() {
      // Seleziona la tabella
      var table = document.getElementById("tableBody1");

      // Svuota tutte le righe presenti nella tabella
      while (table.rows.length > 0) {
        table.deleteRow(0);
      }

    const myTeam = getCookieValue('myTeam');
    const uid = getCookieValue('uid');
    var usersRef = firebase.database().ref('/datas/tasks/team/' + myTeam + '/');
  
    usersRef.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        if (childData.status === 'APERTA') {
          createTableRow(childData);
        }
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
      cell2.innerHTML = data.description; 
      cell3.innerHTML = data.owner; 
      cell4.innerHTML = data.company;
      cell5.innerHTML = data.project;
      cell6.innerHTML = data.brand;
      cell7.innerHTML = data.start;
      cell8.innerHTML = data.end;
      cell9.innerHTML = data.status;
    }
  }
  
    
  function getClosedTeamTasks() {
       // Seleziona la tabella
       var table = document.getElementById("tableBody1");

       // Svuota tutte le righe presenti nella tabella
       while (table.rows.length > 0) {
         table.deleteRow(0);
       }

    const myTeam = getCookieValue('uid');
    const uid = getCookieValue('uid');
    var usersRef = firebase.database().ref('/datas/tasks/team/' + myTeam + '/');
  
    usersRef.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        if (childData.status === 'CHIUSA') {
          createTableRow(childData);
        }
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
  cell2.innerHTML = data.description; 
  cell3.innerHTML = data.owner; 
  cell4.innerHTML = data.company;
  cell5.innerHTML = data.project;
  cell6.innerHTML = data.brand;
  cell7.innerHTML = data.start;
  cell8.innerHTML = data.end;
  cell9.innerHTML = data.status;
    }
  }
  


  function getTeams(){
    var selezionaNodo = document.getElementById("team_selector1");
    var nodiRef = database.ref("/datas/teams");
    nodiRef.once("value").then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var nodeName = childSnapshot.key;
        var option = document.createElement("option");
        option.value = nodeName;
        option.text = nodeName;
        selezionaNodo.appendChild(option);
      });
    });
  }

  function getTeams2(){
    var selezionaNodo = document.getElementById("team_selector2");
    var nodiRef = database.ref("/datas/teams");
    nodiRef.once("value").then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var nodeName = childSnapshot.key;
        var option = document.createElement("option");
        option.value = nodeName;
        option.text = nodeName;
        selezionaNodo.appendChild(option);
      });
    });
  }


  function getTeams3(){
    var selezionaNodo = document.getElementById("user_team_selector");
    var nodiRef = database.ref("/datas/teams");
    nodiRef.once("value").then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var nodeName = childSnapshot.key;
        var option = document.createElement("option");
        option.value = nodeName;
        option.text = nodeName;
        selezionaNodo.appendChild(option);
      });
    });
  }
