function getBrandTasks() {
    const db = firebase.firestore();
    const tasksRef = db.collection('companies').doc(globalThis.currentCompany.id).collection('projects').doc(globalThis.currentProject.id).collection('brands').doc(globalThis.currentBrand.id).collection('tasks');

  
    tasksRef.get()
      .then((tasksQuerySnapshot) => {
        tasksQuerySnapshot.forEach((taskDoc) => {
          const data = taskDoc.data();
          createTableRow(data);
        });
      })
      .catch((error) => {
        console.error('Errore durante il recupero dei task: ', error);
      });
  
      var table = document.getElementById("tableBody2");
      while (table.firstChild) {
        table.removeChild(table.firstChild);
      }
   
    function createTableRow(data) {

      var row = table.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);

      cell1.innerHTML = data.name;
      cell2.innerHTML = data.description;
      cell3.innerHTML = data.owner_name;
      cell4.innerHTML = data.owner_id;
      cell5.innerHTML = data.start;
      cell6.innerHTML = data.end;
      cell7.innerHTML = data.status;
      cell8.innerHTML = data.id;
      
      var cell11 = row.insertCell(8);
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
    editButton.onclick = function() {
      globalThis.currentTask = data;
      getTaskAccountings();
      getTaskToChange();
      renderGraph();
    };
    cell11.className = 'cell11';
    cell11.style.display = 'flex'
    cell11.style.flexdirection = 'row';
    cell11.appendChild(editButton);
    
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>mail</i>";
    editButton.onclick = function() {
      initTaskMail1(data);
    };
    cell11.appendChild(editButton);
    
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
    editButton.onclick = function() {
      globalThis.currentTask = data;
      deleteTask();
    };
    cell11.appendChild(editButton);
    
    }
  }
  





  function getTaskToChange() { 
    getAndPopulateTags();
    const db = firebase.firestore();
    const userTasksRef = db.collection('companies').doc(globalThis.currentCompany.id).collection('projects').doc(globalThis.currentProject.id).collection('brands').doc(globalThis.currentBrand.id).collection('tasks').doc(globalThis.currentTask.id);

    userTasksRef.get()
        .then((doc) => {
            if (doc.exists) {
                const data = doc.data();

                document.getElementById("change_task1").style.display = "flex";
                document.getElementById("change1").value = data.name;
                document.getElementById("change2").value = data.description;
              
            
                var selectElement3 = document.getElementById('change3');
                var selectedCompany = data.company;
                var newOption3 = document.createElement('option');
                newOption3.text = selectedCompany;
                newOption3.value = selectedCompany;
                selectElement3.appendChild(newOption3);
                selectElement3.value = selectedCompany;
              
                var selectedBrand = data.brand;
                var selectElement4 = document.getElementById('change4');
                var newOption4 = document.createElement('option');
                newOption4.text = selectedBrand;
                newOption4.value = selectedBrand;
                selectElement4.appendChild(newOption4);
                selectElement4.value = selectedBrand;
                
                var selectedProject = data.project;
                var selectElement5 = document.getElementById('change5');
                var newOption5 = document.createElement('option');
                newOption5.text = selectedProject;
                newOption5.value = selectedProject;
                selectElement5.appendChild(newOption5);
                selectElement5.value = selectedProject;
                
                var startDateInput = data.start; 
                var inputDate = document.getElementById('change9');
                inputDate.value = startDateInput;
                var endDateInput = data.end; 
                var inputDate1 = document.getElementById('change10');
                inputDate1.value = endDateInput;
                 
                  
            } else {
                alert("Task non trovato, si consiglia di riaggiornare la pagina");
            }
        })
        .catch((error) => {
            console.error('Errore durante il recupero del task da modificare: ', error);
            alert('Errore durante il recupero del task da modificare');
        });
}
  


  
  function getTaskAccountings(){
    var table = document.getElementById("tableBody6");
    var taskData = globalThis.currentCompany;
    const db = firebase.firestore();
    const userTasksRef = db.collection('companies').doc(globalThis.currentCompany.id).collection('projects').doc(globalThis.currentProject.id).collection('brand').doc(globalThis.currentBrand.id).collection('tasks').doc(globalThis.currentTask.id).collection('accounitngs');
  
    userTasksRef.get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          createTableRow(data);
        });
      })
      .catch((error) => {
        alert('Errore durante il recupero delle contabilizzazioni del task: ', error);
      });
  
      while (table.firstChild) {
        table.removeChild(table.firstChild);
      }
   
  
  function createTableRow(data, taskName) {
    var table = document.getElementById("tableBody6");
  
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = data.id; 
    cell2.innerHTML = data.description; 
    cell3.innerHTML = data.owner; 
    cell4.innerHTML = data.start;
    cell5.innerHTML = data.dedicated_time;

    var cell8 = row.insertCell(5);
  
    cell8.className = 'cell9';
    cell8.style.flexdirection = 'column';
  
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
    editButton.onclick = function() {
      globalThis.currentProject = data;
      getProjectToChange();
      getProjectBrands();
    };
    cell8.appendChild(editButton);
  
  
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
    editButton.onclick = function() {
      deleteProject1(data, taskData);
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





  function addTask() {
    if(document.getElementById('name_task_input').value !== "") {
      if (document.getElementById('start_task_date_input').value !== '') {
        if (document.getElementById('end_task_date_input').value !== '') {
  
      const db = firebase.firestore();
      const userTasksRef = db.collection('companies').doc(globalThis.currentCompany.id).collection('projects').doc(globalThis.currentProject.id).collection('brands').doc(globalThis.currentBrand.id).collection('tasks');
      const name = document.getElementById('name_task_input').value;
      const description = document.getElementById('description_task_input').value;
      const owner_id = document.getElementById('select_task_owner').value;
      const owner_name = document.getElementById('select_task_owner').options[document.getElementById('select_task_owner').selectedIndex].textContent;
    
      var inputStartDateElement = document.getElementById('start_task_date_input');
      var valoreStartDataStringa = inputStartDateElement.value;
      var startData = new Date(valoreStartDataStringa);
      var startDataFormatted = startData.toISOString().split('T')[0];
  
      var inputEndDateElement = document.getElementById('end_task_date_input');
      var valoreEndDataStringa = inputEndDateElement.value;
      var endData = new Date(valoreEndDataStringa);
      var endDataFormatted = endData.toISOString().split('T')[0];

  
  // Dati da aggiungere o aggiornare nel documento esistente
  const datiDaAggiornare = {
  name: name,
  description: description,
  owner_id: owner_id,
  owner_name: owner_name,
  start: startDataFormatted,
  end: endDataFormatted,
  status: 'APERTO',
  };
  
  // Aggiungiamo i dati nel documento usando .add()
  userTasksRef.add(datiDaAggiornare)
  .then((docRef) => {
  // Ottieni l'ID del documento appena creato
  const newDocId = docRef.id;
  
  // Aggiungi l'ID nel documento appena creato usando .update()
  return userTasksRef.doc(newDocId).update({
    id: newDocId
  });
  })
  .then(() => {
  alert("Task aggiunto con successo");
  getBrandTasks();
  })
  .catch((error) => {
  alert("Errore durante l'aggiunta del task: ", error);
  });
  
        } else {
          alert('Si prega di inserire una data di fine valida')
        }  
      } else {
        alert('Si prega di inserire una data di inizio valida')
      }
    }else{
      alert('Si prega di inserire un nome valido')
    }
  }



  
function deleteTask() {
    const db = firebase.firestore();
    const docRef = db.collection('companies').doc(globalThis.currentCompany.id).collection('projects').doc(globalThis.currentProject.id).collection('brands').doc(globalThis.currentBrand.id).collection('tasks').doc(globalThis.currentTask.id)
    
    docRef.delete()
      .then(() => {
        alert("Task eliminato con successo");
        getBrandTasks();
      })
      .catch((error) => {
        alert("Errore durante l'eliminazione del task: ", error);
      });
    }



    function writeChangedTask1() {
      const db = firebase.firestore();
    
      const name = document.getElementById('change1').value;
      const description = document.getElementById('change2').value;
      const status = document.getElementById('change6').value;
      
      const formatDate = (elementId) => {
        const inputElement = document.getElementById(elementId);
        const valueString = inputElement.value;
        const date = new Date(valueString);
        return date.toISOString().split('T')[0];
      };
    
      const startDataFormatted = formatDate('change9');
      const endDataFormatted = formatDate('change10');

        if (name !== '') {
          const path = db.collection('companies').doc(globalThis.currentTask.company_id)
          .collection('projects').doc(globalThis.currentProject.id)
          .collection('brands').doc(globalThis.currentBrand.id)
          .collection('tasks').doc(globalThis.currentTask.id);
      
          const data = {
            name,
            description,
            start: startDataFormatted,
            end: endDataFormatted,
            status,
          };
      
          path.update(data)
            .then(() => {
              alert('Task modificato con successo');
              getCompanyProjects1();
            })
            .catch((error) => {
              alert("Errore durante l'aggiornamento del task: " + error);
            });
        } else {
          alert('Si prega di inserire un nome valido per la modifica');
      }
    }
    