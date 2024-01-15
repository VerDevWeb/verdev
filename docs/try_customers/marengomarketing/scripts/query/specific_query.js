

document.getElementById("company_search1").addEventListener("input", function() {
    getCompanyByName();
    });
    
    function getCompanyByName() {
      var table = document.getElementById("companiesTableBody");
      const myCollection = db.collection('companies');
      const companyName = document.getElementById('company_search1').value.toLowerCase();
    
      myCollection.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = doc.data();
          const companyNameInDoc = data.name.toLowerCase();
          if (companyNameInDoc.includes(companyName)) {
            createTableRow(data);
            
    function createTableRow(data, taskName) {
      table.innerHTML = '';
    
      var row = table.insertRow();
      var cell6 = row.insertCell(0);
      var cell1 = row.insertCell(1);
      var cell2 = row.insertCell(2);
      var cell3 = row.insertCell(3);
      var cell4 = row.insertCell(4);
      var cell5 = row.insertCell(5);
      //saltato cell6 perchè la uso per mettere le actions
      var cell7 = row.insertCell(6);
    
      cell1.innerHTML = data.name; 
      cell2.innerHTML = data.p_iva; 
      cell3.innerHTML = data.start;
      cell4.innerHTML = data.end;
      cell5.innerHTML = data.status;
      cell7.innerHTML = data.id;
    
    
      cell6.className = 'cell9';
      cell6.style.flexdirection = 'column';
    
      var editButton = document.createElement("button");
      editButton.className = "task_actions_button1";
      editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
      editButton.onclick = function() {
        getCompanyDataToFill(data);
      };
      cell6.appendChild(editButton);
    
      var editButton = document.createElement("button");
      editButton.className = "task_actions_button1";
      editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
      editButton.onclick = function() {
        deleteCompany(data);
      };
      cell6.appendChild(editButton);
    
      var editButton = document.createElement("button");
      editButton.className = "task_actions_button1";
      editButton.innerHTML = "<i class='material-icons notranslate'>mail</i>";
      editButton.onclick = function() {
        initAccountingMail1(data, taskName);
      };
      cell6.appendChild(editButton);
    
      }
    
            
          }
        });
      }).catch((error) => {
        console.error('Errore nella query per recuperare una specifica azienda:', error);
      });
    }
    


    function getPersonalProjects(){
      var table = document.getElementById("personalProjectsTableBody");
      const db = firebase.firestore();
    
      const userTasksRef = db.collection('projects').where('owner_id', '==', getCookieValue('uid'));

      userTasksRef.get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            createTableRow(data);
          });
        })
        .catch((error) => {
          alert('Errore durante il recupero dei progetti: ', error);
        });
      
     
    function createTableRow(data) {
      table.innerHTML = '';

      var row = table.insertRow();
      //cell 8 è la cella actions
      var cell8 = row.insertCell(0);
      var cell1 = row.insertCell(1);
      var cell2 = row.insertCell(2);
      var cell3 = row.insertCell(3);
      var cell4 = row.insertCell(4);
      var cell5 = row.insertCell(5);
      var cell6 = row.insertCell(6);
      var cell7 = row.insertCell(7);
      var cell10 = row.insertCell(8);
    
      cell2.className = 'description_table_section'
    
      cell1.innerHTML = data.name; 
      cell2.innerHTML = data.description; 
      cell3.innerHTML = data.owner_name; 
      cell4.innerHTML = data.estimated_days;
      cell5.innerHTML = data.estimated_hours;
      cell6.innerHTML = data.end;
      cell7.innerHTML = data.project_company_name;
      cell10.innerHTML = data.id;
    
    
      cell8.className = 'cell9';
      cell8.style.flexdirection = 'column';
    
      var editButton = document.createElement("button");
      editButton.className = "task_actions_button1";
      editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
      editButton.onclick = function() {
        getProjectDataToFill(data);
      };
      cell8.appendChild(editButton);
    
    
      var editButton = document.createElement("button");
      editButton.className = "task_actions_button1";
      editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
      editButton.onclick = function() {
        deleteProject(data);
      };
      cell8.appendChild(editButton);
    
      var editButton = document.createElement("button");
      editButton.className = "task_actions_button1";
      editButton.innerHTML = "<i class='material-icons notranslate'>mail</i>";
      editButton.onclick = function() {
        initAccountingMail1(data, taskName);
      };
      cell8.appendChild(editButton);
    
      }
    
    }



    
    function getPersonalEndingTasks(){
      var table = document.getElementById("personalEndingTasksTableBody");
      const db = firebase.firestore();

        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); 
        const day = String(today.getDate()).padStart(2, '0');
    
      const userTasksRef = db.collection('tasks').where('owner_id', '==', getCookieValue('uid')).where('end', '==', year + '-' + month + '-' + day);

      userTasksRef.get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            createTableRow(data);
          });
        })
        .catch((error) => {
          alert('Errore durante il recupero dei progetti: ', error);
        });
      
     
    function createTableRow(data) {
      table.innerHTML = '';

      var row = table.insertRow();
      //cell 8 è la cella actions
      var cell8 = row.insertCell(0);
      var cell1 = row.insertCell(1);
      var cell2 = row.insertCell(2);
      var cell3 = row.insertCell(3);
      var cell4 = row.insertCell(4);
      var cell5 = row.insertCell(5);
      var cell6 = row.insertCell(6);
      var cell7 = row.insertCell(7);
      var cell10 = row.insertCell(8);
    
      cell2.className = 'description_table_section'
    
      cell1.innerHTML = data.name; 
      cell2.innerHTML = data.description; 
      cell3.innerHTML = data.owner_name; 
      cell4.innerHTML = data.estimated_days;
      cell5.innerHTML = data.estimated_hours;
      cell6.innerHTML = data.end;
      cell7.innerHTML = data.project_company_name;
      cell10.innerHTML = data.id;
    
    
      cell8.className = 'cell9';
      cell8.style.flexdirection = 'column';
    
      var editButton = document.createElement("button");
      editButton.className = "task_actions_button1";
      editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
      editButton.onclick = function() {
        getTaskDataToFill(data);
      };
      cell8.appendChild(editButton);
    
    
      var editButton = document.createElement("button");
      editButton.className = "task_actions_button1";
      editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
      editButton.onclick = function() {
        deleteTask(data);
      };
      cell8.appendChild(editButton);
    
      var editButton = document.createElement("button");
      editButton.className = "task_actions_button1";
      editButton.innerHTML = "<i class='material-icons notranslate'>mail</i>";
      editButton.onclick = function() {
        initTaskMail1(data, taskName);
      };
      cell8.appendChild(editButton);
    
      }
    
    }