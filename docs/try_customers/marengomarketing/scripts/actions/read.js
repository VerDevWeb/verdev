function getCompanies1(){
  var table = document.getElementById("companiesTableBody");
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
      alert('Errore durante il recupero delle aziende: ', error);
    });

    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }

function createTableRow(data, taskName) {
 
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



function getProjects(){
  var table = document.getElementById("projectsTableBody");
  const db = firebase.firestore();
  const userTasksRef = db.collection('projects');

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
  cell7.innerHTML = data.project_brand_name;
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



function getBrands(){
  var table = document.getElementById("brandsTableBody");
  const db = firebase.firestore();
  const userTasksRef = db.collection('brands');

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

  var row = table.insertRow();
  //cell 8 è la cella dedicata alle actions
  var cell8 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  var cell3 = row.insertCell(3);
  var cell10 = row.insertCell(4)
  var cell4 = row.insertCell(5);
  var cell5 = row.insertCell(6);
  var cell6 = row.insertCell(7);
  var cell7 = row.insertCell(8);
  var cell9 = row.insertCell(9)

  cell2.className = 'description_table_section';

  cell1.innerHTML = data.name; 
  cell2.innerHTML = data.description; 
  cell3.innerHTML = data.owner_name; 
  cell10.innerHTML = data.brand_company_name;
  cell4.innerHTML = data.estimated_days;
  cell5.innerHTML = data.estimated_hours;
  cell6.innerHTML = data.end;
  cell9.innerHTML = data.status;
  cell7.innerHTML = data.id;


  cell8.className = 'cell9';
  cell8.style.flexdirection = 'column';

  var editButton = document.createElement("button");
  editButton.className = "task_actions_button1";
  editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
  editButton.onclick = function() {
    getBrandDataToFill(data);
  };
  cell8.appendChild(editButton);


  var editButton = document.createElement("button");
  editButton.className = "task_actions_button1";
  editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
  editButton.onclick = function() {
    deleteBrand(data);
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



function getTasks(){
  var table = document.getElementById("tasksTableBody");
  const db = firebase.firestore();
  const userTasksRef = db.collection('tasks');

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

  var row = table.insertRow();
  //cell 8 sta per la casella dedicata alle actions
  var cell8 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  var cell3 = row.insertCell(3);
  var cell9 = row.insertCell(4)
  var cell4 = row.insertCell(5);
  var cell5 = row.insertCell(6);
  var cell6 = row.insertCell(7);
  var cell7 = row.insertCell(8);

  cell2.className = 'description_table_section'

  cell1.innerHTML = data.name; 
  cell2.innerHTML = data.description; 
  cell3.innerHTML = data.owner_name; 
  cell9.innerHTML = data.task_brand_name;
  cell4.innerHTML = data.start;
  cell5.innerHTML = data.end;
  cell6.innerHTML = data.status;
  cell7.innerHTML = data.id;


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
    initAccountingMail1(data, taskName);
  };
  cell8.appendChild(editButton);

  }
}


function getAccountings(){
  var table = document.getElementById("accountingsTableBody");
  const db = firebase.firestore();
  const userTasksRef = db.collection('accountings');

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

  var row = table.insertRow();
  //cell 8 sta per la casella dedicata alle actions
  var cell8 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  var cell3 = row.insertCell(3);
  var cell9 = row.insertCell(4);
  var cell10 = row.insertCell(5);
  var cell11 = row.insertCell(6);
  var cell4 = row.insertCell(7);
  var cell5 = row.insertCell(8);
  var cell7 = row.insertCell(9);

  cell2.className = 'description_table_section'

  cell1.innerHTML = data.name; 
  cell2.innerHTML = data.description; 
  cell3.innerHTML = data.owner_mail; 
  cell9.innerHTML = data.accounting_task_name;
  cell10.innerHTML = data.dedicated_hours;
  cell11.innerHTML = data.dedicated_minutes;
  cell4.innerHTML = data.start;
  cell5.innerHTML = data.end;
  cell7.innerHTML = data.id;


  cell8.className = 'cell9';
  cell8.style.flexdirection = 'column';

  var editButton = document.createElement("button");
  editButton.className = "task_actions_button1";
  editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
  editButton.onclick = function() {
    getAccountingDataToFill(data);
  };
  cell8.appendChild(editButton);


  var editButton = document.createElement("button");
  editButton.className = "task_actions_button1";
  editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
  editButton.onclick = function() {
    deleteAccounting(data);
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


function populateSelectWithTags() {
  const tagsCollectionRef = db.collection('general').doc('users_list');

  tagsCollectionRef.get().then((doc) => {
    if (doc.exists) {
      const selectElement = document.getElementById('select_task_owner');
      const selectElement1 = document.getElementById('project_owner1');
      const selectElement2 = document.getElementById('brand_owner');
      const selectElement3 = document.getElementById('project_owner2');
      const selectElement4 = document.getElementById('brand_owner2');
      const selectElement5 = document.getElementById('task_owner2');
      const tagData = doc.data();

      selectElement.innerHTML = '';
      selectElement1.innerHTML = '';
      selectElement2.innerHTML = ''; 
      selectElement3.innerHTML = ''; 
      selectElement4.innerHTML = ''; 
      selectElement5.innerHTML = ''; 

      for (const key in tagData) {
        if (Object.hasOwnProperty.call(tagData, key)) {
          const option = document.createElement('option');
          option.value = key;
          option.textContent = tagData[key];
          
          selectElement.appendChild(option.cloneNode(true));
          selectElement1.appendChild(option.cloneNode(true));
          selectElement2.appendChild(option.cloneNode(true));
          selectElement3.appendChild(option.cloneNode(true));
          selectElement4.appendChild(option.cloneNode(true));
          selectElement5.appendChild(option.cloneNode(true));
        }
      }
    } else {
      console.error('La lista degli utenti non è stata trovata');
    }
  }).catch((error) => {
    console.error('Errore nel recupero della lista utenti: ', error);
  });
}




 function fillCompaniesSelections(){
  var collectionRef = firebase.firestore().collection('companies');
collectionRef.get().then((querySnapshot) => {
  
  var selectElement1 = document.getElementById('brand_company_selector1');
  var selectElement2 = document.getElementById('brand_company_selector2');


  selectElement1.innerHTML = ''; 
  selectElement2.innerHTML = ''; 
  
  querySnapshot.forEach((doc) => {
    var data = doc.data();

    var option1 = document.createElement('option');
    option1.value = doc.id;
    option1.text = data.name;
    selectElement1.appendChild(option1);

    var option2 = option1.cloneNode(true); 
    selectElement2.appendChild(option2);

  });
}).catch((error) => {
  console.log("Errore nel recuperare le aziende:", error);
});

 }


 function fillProjectSelections() {
  //può servire per i task ma per ora non la sto richiamando
  var collectionRef = firebase.firestore().collection('projects');
  collectionRef.get().then((querySnapshot) => {
    var selectElement1 = document.getElementById('brand_project_selector2');

    selectElement1.innerHTML = '';
    selectElement2.innerHTML = '';

    querySnapshot.forEach((doc) => {
      var data = doc.data();

      var option1 = document.createElement('option');
      option1.value = doc.id;
      option1.text = data.name;

      var option2 = document.createElement('option');
      option2.value = doc.id;
      option2.text = data.name;

      selectElement1.appendChild(option1);
      selectElement2.appendChild(option2);
    });
  }).catch((error) => {
    console.log("Errore nel recuperare i progetti:", error);
  });
}


function fillBrandsSelections() {
  var collectionRef = firebase.firestore().collection('brands');
  collectionRef.get().then((querySnapshot) => {
    var selectElement1 = document.getElementById('task_brand_selector1');
    var selectElement2 = document.getElementById('task_brand_selector2');
    var selectElement3 = document.getElementById('project_brand_selector1');
    var selectElement4 = document.getElementById('project_brand_selector2');

    selectElement1.innerHTML = '';
    selectElement2.innerHTML = '';
    selectElement3.innerHTML = '';
    selectElement4.innerHTML = '';

    querySnapshot.forEach((doc) => {
      var data = doc.data();

      var option1 = document.createElement('option');
      option1.value = doc.id;
      option1.text = data.name;

      var option2 = document.createElement('option');
      option2.value = doc.id;
      option2.text = data.name;

      var option3 = document.createElement('option');
      option3.value = doc.id;
      option3.text = data.name;

      var option4 = document.createElement('option');
      option4.value = doc.id;
      option4.text = data.name;

      selectElement1.appendChild(option1);
      selectElement2.appendChild(option2);
      selectElement3.appendChild(option3);
      selectElement4.appendChild(option4);

    });
  }).catch((error) => {
    console.log("Errore nel recuperare i brand:", error);
  });
}



function fillTasksSelections() {
  var collectionRef = firebase.firestore().collection('tasks');
  collectionRef.get().then((querySnapshot) => {
    var selectElement1 = document.getElementById('accounting_task_selector1');
    var selectElement2 = document.getElementById('accounting_task_selector2');

    selectElement1.innerHTML = '';
    selectElement2.innerHTML = '';

    querySnapshot.forEach((doc) => {
      var data = doc.data();

      var option1 = document.createElement('option');
      option1.value = doc.id;
      option1.text = data.name;

      var option2 = document.createElement('option');
      option2.value = doc.id;
      option2.text = data.name;

      selectElement1.appendChild(option1);
      selectElement2.appendChild(option2);
    });
  }).catch((error) => {
    console.log("Errore nel recuperare i task:", error);
  });
}

