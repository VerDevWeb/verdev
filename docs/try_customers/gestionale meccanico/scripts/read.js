function getAllRepairs(){
    var table = document.getElementById("tutteLeRiparazioniTableBody");
    const db = firebase.firestore();
    const userTasksRef = db.collection('repairs');
  
    userTasksRef.get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          createTableRow(data);
        });
      })
      .catch((error) => {
        alert('Errore durante il recupero di tutte le riparazioni: ', error);
      });
  
      while (table.firstChild) {
        table.removeChild(table.firstChild);
      }
   
  
  function createTableRow(data, taskName) {
  
    var row = table.insertRow();
    var cell15 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    var cell7 = row.insertCell(7);

    cell2.className = 'data-cell';
  
    cell1.innerHTML = data.schede_number; 
    cell2.innerHTML = data.start; 
    cell3.innerHTML = data.status;
    cell4.innerHTML = data.customer_name;
    cell5.innerHTML = data.type;
    cell6.innerHTML = data.brand;
    cell7.innerHTML = data.model;

    cell15.style.display = 'flex'
    cell15.style.flexdirection = 'column';
  
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
    editButton.onclick = function() {
        getRepairDataToFill(data);
    };
    cell15.appendChild(editButton);
  
  
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
    editButton.onclick = function() {
      deleteRepair(data);
    };
    cell15.appendChild(editButton);
    }

  
}


  
  function getInternalRepairs(){
    var table = document.getElementById("riparazioniInterneTableBody");
    const db = firebase.firestore();
  
    const userTasksRef = db.collection('repairs').where('repair_type', '==', 'INTERNA');

    userTasksRef.get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          createTableRow(data);
        });
      })
      .catch((error) => {
        alert('Errore durante il recupero delle riparazioni interne: ', error);
      });
      function createTableRow(data, taskName) {
  
        var row = table.insertRow();
        var cell15 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);
        var cell7 = row.insertCell(7);
      
    cell1.innerHTML = data.schede_number; 
    cell2.innerHTML = data.start; 
    cell3.innerHTML = data.status;
    cell4.innerHTML = data.customer_name;
    cell5.innerHTML = data.type;
    cell6.innerHTML = data.brand;
    cell7.innerHTML = data.model;
    
        cell15.style.display = 'flex'
        cell15.style.flexdirection = 'column';
      
        var editButton = document.createElement("button");
        editButton.className = "task_actions_button1";
        editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
        editButton.onclick = function() {
          getRepairDataToFill(data);
        };
        cell15.appendChild(editButton);
      
      
        var editButton = document.createElement("button");
        editButton.className = "task_actions_button1";
        editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
        editButton.onclick = function() {
          deleteRepair(data);
        };
        cell15.appendChild(editButton);
        }
  }


  function getWarrantyRepairs(){
    var table = document.getElementById("riparazioniInGaranziaTableBody");
    const db = firebase.firestore();
  
    const userTasksRef = db.collection('repairs').where('repair_type', '==', 'GARANZIA');

    userTasksRef.get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          createTableRow(data);
        });
      })
      .catch((error) => {
        alert('Errore durante il recupero delle riparazioni interne: ', error);
      });
      function createTableRow(data, taskName) {
  
        var row = table.insertRow();
        var cell15 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);
        var cell7 = row.insertCell(7);
        
        cell1.innerHTML = data.schede_number; 
        cell2.innerHTML = data.start; 
        cell3.innerHTML = data.status;
        cell4.innerHTML = data.customer_name;
        cell5.innerHTML = data.type;
        cell6.innerHTML = data.brand;
        cell7.innerHTML = data.model;
    
        cell15.style.display = 'flex'
        cell15.style.flexdirection = 'column';
      
        var editButton = document.createElement("button");
        editButton.className = "task_actions_button1";
        editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
        editButton.onclick = function() {
            getRepairDataToFill(data);
        };
        cell15.appendChild(editButton);
      
      
        var editButton = document.createElement("button");
        editButton.className = "task_actions_button1";
        editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
        editButton.onclick = function() {
          deleteRepair(data);
        };
        cell15.appendChild(editButton);
        }
  }

  getAllRepairs();
  getInternalRepairs();
  getWarrantyRepairs();