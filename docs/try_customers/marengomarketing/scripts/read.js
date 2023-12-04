function getOpenTasks() {
    const uid = getCookieValue('uid');
    const db = firebase.firestore();
    const userTasksRef = db.collection('users').doc(uid).collection('tasks');
  
    userTasksRef.get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          createTableRow(data);
        });
      })
      .catch((error) => {
        console.error('Errore durante il recupero dei dati:', error);
      });
  
      var table = document.getElementById("tableBody1");
      while (table.firstChild) {
        table.removeChild(table.firstChild);
      }
   
    function createTableRow(data) {
      // Qui popoli la tua tabella HTML usando i dati recuperati da Firestore
      // Ad esempio:
      var row = table.insertRow();
    
      // Aggiungi i valori dei campi nei singoli elementi della riga della tabella
      // Ad esempio:
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);
      var cell9 = row.insertCell(8);
      var cell10 = row.insertCell(9);
      
      cell1.innerHTML = data.name;
      cell2.innerHTML = data.description;
      cell3.innerHTML = data.owner;
      cell4.innerHTML = data.company;
      cell5.innerHTML = data.project;
      cell6.innerHTML = data.brand;
      cell7.innerHTML = data.start;
      cell8.innerHTML = data.end;
      cell9.innerHTML = data.status;
      cell10.innerHTML = data.id;
      
      var cell11 = row.insertCell(10);
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
    editButton.onclick = function() {
      getTaskToChange1(data);
      getAccountings1(data);
      animateBox2();
      globalThis.currentTask1 = data;
      renderGraph1();
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
      deleteTaskGET(data);
    };
    cell11.appendChild(editButton);
    
    }
  }
  
  
  
  
  
    function getAccountings1(data){
      var table = document.getElementById("tableBody6");
      var taskData = data;
  
  
      const uid = getCookieValue('uid');
      const db = firebase.firestore();
      const userTasksRef = db.collection('users').doc(uid).collection('tasks').doc(data.id).collection('accountings');
    
      userTasksRef.get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            createTableRow(data);
          });
        })
        .catch((error) => {
          alert('Errore durante il recupero delle contabilizzazioni: ', error);
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
  
      var cell6 = row.insertCell(5);
  
      cell6.className = 'cell9';
      cell6.style.flexdirection = 'column';
      var editButton = document.createElement("button");
      editButton.className = "task_actions_button1";
      editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
      editButton.onclick = function() {
        deleteAccounting1(data, taskData);
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
  
  
  
    function getCompanies1(data){
      var table = document.getElementById("tableBody8");
      var taskData = data;
  
      const uid = getCookieValue('uid');
      const db = firebase.firestore();
      const userTasksRef = db.collection('companies');
    
      userTasksRef.get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            createTableRow(data);
          });
        })
        .catch((error) => {
          alert('Errore durante il recupero delle contabilizzazioni: ', error);
        });
    
        while (table.firstChild) {
          table.removeChild(table.firstChild);
        }
     
  
    function createTableRow(data, taskName) {
      var table = document.getElementById("tableBody8");
  
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      //saltato cell6 perchè la uso per mettere le actions
      var cell7 = row.insertCell(5);
  
      cell1.innerHTML = data.name; 
      cell2.innerHTML = data.p_iva; 
      cell3.innerHTML = data.start;
      cell4.innerHTML = data.end;
      cell5.innerHTML = data.status;
      cell7.innerHTML = data.id;
  
      var cell6 = row.insertCell(6);
  
      cell6.className = 'cell9';
      cell6.style.flexdirection = 'column';
      var editButton = document.createElement("button");
      editButton.className = "task_actions_button1";
      editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
      editButton.onclick = function() {
        deleteCompanyGET1(data);
      };
      cell6.appendChild(editButton);
  
      var editButton = document.createElement("button");
      editButton.className = "task_actions_button1";
      editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
      editButton.onclick = function() {
        globalThis.currentCompany1 = data;
        getCompanyToChange1(data);
        getCompanyProjects1(data)
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





    function getTaskToChange1(data) { 
      getAndPopulateTags();
      const uid = getCookieValue('uid');
      const db = firebase.firestore();

      
      // Riferimento alla collezione delle attività dell'utente
      const userTasksRef = db.collection('users').doc(uid).collection('tasks').doc(data.id);
      
      userTasksRef.get()
      .then((doc) => {
        if (doc.exists) {
      document.getElementById("change_task1").style.display = "flex";
      document.getElementById("change1").value = data.name;
      document.getElementById("change2").value = data.owner;
    

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
          alert("Task non trovato");
        }
      })
      .catch((error) => {
        alert('Errore durante il recupero dei dati:', error);
      });
    }
    
  
    


function getCompanyToChange1(data) { 
   
  const db = firebase.firestore();
  
  // Riferimento alla collezione delle attività dell'utente
  const userTasksRef = db.collection('companies').doc(data.id);
  
  userTasksRef.get()
  .then((doc) => {
    if (doc.exists) {
  document.getElementById("change_company1").style.display = "flex";
  globalThis.currentCompany1 = data;
  document.getElementById("change_company_name_input1").value = data.name;
  document.getElementById("change_company_p_iva_input1").value = data.p_iva;

  var selectedCompany = data.company;
  var selectElement3 = document.getElementById('change_company_status_input1');
  var newOption3 = document.createElement('option');
  newOption3.text = selectedCompany;
  newOption3.value = selectedCompany;
  selectElement3.appendChild(newOption3);
  selectElement3.value = selectedCompany;

  
    var startDateInput = data.start; 
    var inputDate = document.getElementById('change_company_start_input1');
    inputDate.value = startDateInput;

    var endDateInput = data.end; 
    var inputDate1 = document.getElementById('change_company_end_input1');
    inputDate1.value = endDateInput;

    } else {
      alert("Azienda non trovata, si consiglia di aggiornare la pagina e riprovare");
    }
  })
  .catch((error) => {
    console.error('Errore durante il recupero dei dati: ', error);
  });


}


  
    
function getCompanyProjects1(data){
  var table = document.getElementById("tableBody9");
  var taskData = data;

  const uid = getCookieValue('uid');
  const db = firebase.firestore();
  const userTasksRef = db.collection('companies').doc(currentCompany1.id).collection('projects');

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
  cell3.innerHTML = data.owner; 
  cell4.innerHTML = data.estimated_days;
  cell5.innerHTML = data.estimated_hours;
  cell6.innerHTML = data.end;
  cell7.innerHTML = data.id;

  var cell8 = row.insertCell(7);

  cell8.className = 'cell9';
  cell8.style.flexdirection = 'column';
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




function getAndPopulateTags() {
  var tagsArray = [];
  const uid = getCookieValue('uid');

  db.collection('companies').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var data = doc.data();
      if (data.hasOwnProperty('name')) {
        tagsArray.push(data.name);
        getAndPopulateTags2(data);
      }
    });
    populateSelection(tagsArray);
  }).catch((error) => {
    console.error("Errore nell'ottenere l'elenco delle aziende per popolare le selezioni del task: ", error);
  });


function populateSelection(tags) {
  var selectionInput = document.getElementById("change3");
  selectionInput.innerHTML = "";
  tags.forEach((tag) => {
    var option = document.createElement("option");
    option.text = tag;
    option.value = tag;
    selectionInput.add(option);
  });
}
}


function getAndPopulateTags2(data) {
  var tagsArray = [];
  const uid = getCookieValue('uid');
  var currentCompany3 = data.id;

  db.collection('companies').doc(data.id).collection('brands').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var data = doc.data();
      if (data.hasOwnProperty('name')) {
        tagsArray.push(data.name);
        getAndPopulateTags3(data, currentCompany3);
      }
    });
    populateSelection(tagsArray);
  }).catch((error) => {
    console.error("Errore nell'ottenere l'elenco dei marchi per popolare le selezioni del task: ", error);
  });


function populateSelection(tags) {
  var selectionInput = document.getElementById("change4");
  selectionInput.innerHTML = "";
  tags.forEach((tag) => {
    var option = document.createElement("option");
    option.text = tag;
    option.value = tag;
    selectionInput.add(option);
  });
}
}


function getAndPopulateTags3(data, currentCompany3) {
  var tagsArray = [];
  const uid = getCookieValue('uid');

  db.collection('companies').doc(currentCompany3).collection('brands').doc('cioa').collection('projects').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var data = doc.data();
      if (data.hasOwnProperty('name')) {
        tagsArray.push(data.name);
      }
    });
    populateSelection(tagsArray);
  }).catch((error) => {
    console.error("Errore nell'ottenere l'elenco dei progetti per popolare le selezioni del task: ", error);
  });


function populateSelection(tags) {
  var selectionInput = document.getElementById("change5");
  selectionInput.innerHTML = "";
  tags.forEach((tag) => {
    var option = document.createElement("option");
    option.text = tag;
    option.value = tag;
    selectionInput.add(option);
  });
}
}



function fillSelectionsTeams(){
var collectionRef = firebase.firestore().collection('companies');
  var selectElement = document.getElementById('company_task_input');
  selectElement.innerHTML = '';

  collectionRef.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      // Ottenere i valori dei tag 'name' e 'id' da ciascun documento
      var name = doc.data().name;
      var id = doc.data().id;

      // Creare un'opzione per l'elemento select
      var option = document.createElement('option');
      option.value = id;
      option.textContent = name;

      // Aggiungere l'opzione all'elemento select
      selectElement.appendChild(option);
    });
  }).catch(function(error) {
    console.log("Errore nel recupero dei documenti: ", error);
  });
}








