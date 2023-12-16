function addProject(){
    if(document.getElementById('project_name1').value !== "") {
      if (document.getElementById('project_end_date1').value !== '') {
  
  const name1 = document.getElementById('project_name1').value;
  const description1 = document.getElementById('project_description1').value;
  const path = db.collection('companies').doc(globalThis.currentCompany.id).collection('projects');
  
  var inputEndDateElement = document.getElementById('project_end_date1');
  var valoreEndDataStringa = inputEndDateElement.value;
  var endData = new Date(valoreEndDataStringa);
  var endDataFormatted = endData.toISOString().split('T')[0];

  const select = document.getElementById('project_owner1');
  const selectedOwnerName = select.options[select.selectedIndex].text;

  
  const data = {
  id : path.doc().id,
  name: name1,
  description: description1,
  owner: document.getElementById('project_owner1').value,
  owner_name: selectedOwnerName,
  estimated_days : document.getElementById('project_day1').value,
  estimated_hours : document.getElementById('project_time1').value,
  end : endDataFormatted,
  };
  
  
  path.add(data)
  .then((docRef) => {
    const newDocId = docRef.id;
    alert(`Progetto aggiunto con successo:`);
    document.getElementById('edit_company1').style.display = "none";
    return path.doc(newDocId).update({ id: newDocId });
  })
  .then(() => {
    getCompanyProjects1();
  })
  .catch((error) => {
    // Gestione degli errori, se necessario
    console.error("Errore durante l'aggiunta del progetto:", error);
  });

  
  
  
  } else {
  alert('Si prega di inserire una data di fine valida')
  }  
  } else {
  alert('Si prega di inserire un nome progetto valido')
  }
  }



function getCompanyProjects1(){
    var table = document.getElementById("tableBody9");
    var taskData = globalThis.currentCompany;
    const db = firebase.firestore();
    const userTasksRef = db.collection('companies').doc(globalThis.currentCompany.id).collection('projects');
  
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
  
      while (table.firstChild) {
        table.removeChild(table.firstChild);
      }
   
  
  function createTableRow(data, taskName) {
    var table = document.getElementById("tableBody9");
  
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
  
    cell1.innerHTML = data.name; 
    cell2.innerHTML = data.description; 
    cell3.innerHTML = data.owner_name; 
    cell4.innerHTML = data.estimated_days;
    cell5.innerHTML = data.estimated_hours;
    cell6.innerHTML = data.end;
    cell7.innerHTML = data.id;
  
    var cell8 = row.insertCell(7);
  
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
  
  
function deleteProject1(data) {
    const db = firebase.firestore();
    const docRef = db.collection('companies').doc(currentCompany.id).collection('projects').doc(data.id)
    
    docRef.delete()
      .then(() => {
        alert("Progetto eliminato con successo");
        getCompanyProjects1(data);
      })
      .catch((error) => {
        alert("Errore durante l'eliminazione del progetto: ", error);
      });
    }
    


    function getProjectToChange() { 
      getAndPopulateTags();
      const db = firebase.firestore();
      const userTasksRef = db.collection('companies').doc(globalThis.currentCompany.id).collection('projects').doc(globalThis.currentProject.id);
  
      userTasksRef.get()
          .then((doc) => {
              if (doc.exists) {
                  const data = doc.data(); // Retrieve project data from the document
                  const changeProjectElement = document.getElementById("change_project");
                  changeProjectElement.style.display = "flex";
  
                  // Update project fields with retrieved data
                  document.getElementById("project_name2").value = data.name;
                  document.getElementById("project_description2").value = data.description;
  
                  // Update select element with company data
                  var selectElement3 = document.getElementById('project_status2');
                  var selectedCompany = data.company;
                  var newOption3 = document.createElement('option');
                  newOption3.text = selectedCompany;
                  newOption3.value = selectedCompany;
                  selectElement3.appendChild(newOption3);
                  selectElement3.value = selectedCompany;
  
                  // Update start and end dates
                  document.getElementById('project_end2').value = data.end;
              } else {
                  alert("Progetto non trovato, si consiglia di riaggiornare la pagina");
              }
          })
          .catch((error) => {
              console.error('Errore durante il recupero del progetto da modificare: ', error);
              alert('Errore durante il recupero del progetto da modificare');
          });
  }
  
  

  function changeProject() {
    const name = document.getElementById('project_name2').value;
    const description = document.getElementById('project_description2').value;
    const owner_id = document.getElementById('project_owner2').value;
    const owner_name = document.getElementById('project_owner2').options[document.getElementById('project_owner2').selectedIndex].textContent;
    const end = document.getElementById('project_end2');
    const status = document.getElementById('project_status2').value;
    const endToStore = new Date(end.value);
    const endFormatted = endToStore.toISOString().split('T')[0];
  
    if (name !== '') {
      const path = db.collection('companies').doc(globalThis.currentCompany.id).collection('projects').doc(globalThis.currentProject.id);
  
      const data = {
        name: name,
        description: description,
        owner_name: owner_name,
        owner_id: owner_id,
        end: endFormatted,
        status: status,
      };
  
      path.update(data)
        .then(() => {
          alert('Progetto modificato con successo');
          getCompanyProjects1();
        })
        .catch((error) => {
          alert("Errore durante l'aggiornamento del progetto: " + error);
        });
    } else {
      alert('Si prega di inserire un nome valido per la modifica');
  }
}
  