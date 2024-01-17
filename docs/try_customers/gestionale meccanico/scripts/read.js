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
    var cell8 = row.insertCell(8);
    var cell9 = row.insertCell(9);
    var cell17 = row.insertCell(10);
    var cell10 = row.insertCell(11);
    var cell11 = row.insertCell(12);
    var cell12 = row.insertCell(13);
    var cell13 = row.insertCell(14);
    var cell14 = row.insertCell(15);
    var cell16 = row.insertCell(16);
  
    cell12.className = 'description_table_section';
    cell13.className = 'description_table_section';
    cell14.className = 'description_table_section';
  
    cell1.innerHTML = data.schede_number; 
    cell2.innerHTML = data.start; 
    cell3.innerHTML = data.end;
    cell4.innerHTML = data.status;
    cell5.innerHTML = data.customer_name;
    cell6.innerHTML = data.customer_phone;
    cell7.innerHTML = data.brand;
    cell8.innerHTML = data.model;
    cell9.innerHTML = data.type;
    cell17.innerHTML = data.repair_type;
    cell10.innerHTML = data.serial_number;
    cell11.innerHTML = data.serial_number_two;
    cell12.innerHTML = data.accessories;
    cell13.innerHTML = data.reported_defect;
    cell14.innerHTML = data.status_description;
    cell16.innerHTML = data.id;

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
        var cell8 = row.insertCell(8);
        var cell9 = row.insertCell(9);
        var cell17 = row.insertCell(10);
        var cell10 = row.insertCell(11);
        var cell11 = row.insertCell(12);
        var cell12 = row.insertCell(13);
        var cell13 = row.insertCell(14);
        var cell14 = row.insertCell(15);
        var cell16 = row.insertCell(16);
      
        cell12.className = 'description_table_section';
        cell13.className = 'description_table_section';
        cell14.className = 'description_table_section';
      
        cell1.innerHTML = data.schede_number; 
        cell2.innerHTML = data.start; 
        cell3.innerHTML = data.end;
        cell4.innerHTML = data.status;
        cell5.innerHTML = data.customer_name;
        cell6.innerHTML = data.customer_phone;
        cell7.innerHTML = data.brand;
        cell8.innerHTML = data.model;
        cell9.innerHTML = data.type;
        cell17.innerHTML = data.repair_type;
        cell10.innerHTML = data.serial_number;
        cell11.innerHTML = data.serial_number_two;
        cell12.innerHTML = data.accessories;
        cell13.innerHTML = data.reported_defect;
        cell14.innerHTML = data.status_description;
        cell16.innerHTML = data.id;
    
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
        var cell8 = row.insertCell(8);
        var cell9 = row.insertCell(9);
        var cell17 = row.insertCell(10);
        var cell10 = row.insertCell(11);
        var cell11 = row.insertCell(12);
        var cell12 = row.insertCell(13);
        var cell13 = row.insertCell(14);
        var cell14 = row.insertCell(15);
        var cell16 = row.insertCell(16);
      
        cell12.className = 'description_table_section';
        cell13.className = 'description_table_section';
        cell14.className = 'description_table_section';
      
        cell1.innerHTML = data.schede_number; 
        cell2.innerHTML = data.start; 
        cell3.innerHTML = data.end;
        cell4.innerHTML = data.status;
        cell5.innerHTML = data.customer_name;
        cell6.innerHTML = data.customer_phone;
        cell7.innerHTML = data.brand;
        cell8.innerHTML = data.model;
        cell9.innerHTML = data.type;
        cell17.innerHTML = data.repair_type;
        cell10.innerHTML = data.serial_number;
        cell11.innerHTML = data.serial_number_two;
        cell12.innerHTML = data.accessories;
        cell13.innerHTML = data.reported_defect;
        cell14.innerHTML = data.status_description;
        cell16.innerHTML = data.id;
    
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