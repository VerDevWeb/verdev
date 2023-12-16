function addCompany(){
    if(document.getElementById('company_name_input1').value !== "") {
      if(document.getElementById('company_start_input1').value !== '') {
  
  const status = document.getElementById('company_status_input1').value;
  const path = db.collection('companies');
  const companyName1 = document.getElementById('company_name_input1').value;
  
  var inputStartDateElement = document.getElementById('company_start_input1');
  var valoreStartDataStringa = inputStartDateElement.value;
  var startData = new Date(valoreStartDataStringa);
  var startDataFormatted = startData.toISOString().split('T')[0];
  
  var inputEndDateElement = document.getElementById('company_end_input1');
  var valoreEndDataStringa = inputEndDateElement.value;
  var endDataFormatted;
  if (valoreEndDataStringa.trim() === '') {
    endDataFormatted = ' ';
  
  } else {
    var endData = new Date(valoreEndDataStringa);
    endDataFormatted = endData.toISOString().split('T')[0];
  }
  
  const data = {
  id : path.doc().id,
  name: companyName1,
  p_iva: document.getElementById('p_iva_input1').value,
  start : startDataFormatted,
  end : endDataFormatted,
  status : status,
  };
  
  path.add(data)
  .then((docRef) => {
    const newDocId = docRef.id;
    refresh1();
    document.getElementById('edit_company1').style.display = "none";
    return path.doc(newDocId).update({
      id: newDocId
    });
  })
  
  .catch((error) => {
    alert(`Errore durante l'aggiunta dell'azienda: ${error}`);
  });
  } else {
  alert('Si prega di inserire una data di inizio collaborazione valida')
  }
  }else{
  alert('Si prega di inserire un nome valido')
  }
  }


  
  function fillChangeCompany() { 
    const userTasksRef = db.collection('companies').doc(globalThis.currentCompany.id);
    userTasksRef.get()
    .then((doc) => {
      if (doc.exists) {
    document.getElementById("change_company1").style.display = "flex";
   
    document.getElementById("change_company_name_input1").value = globalThis.currentCompany.name;
    document.getElementById("change_company_p_iva_input1").value = globalThis.currentCompany.p_iva;
  
    var selectedCompany = globalThis.currentCompany.status;
    var selectElement3 = document.getElementById('change_company_status_input1');
    var newOption3 = document.createElement('option');
    newOption3.text = selectedCompany;
    newOption3.value = selectedCompany;
    selectElement3.appendChild(newOption3);
    selectElement3.value = selectedCompany;
  
      var startDateInput = globalThis.currentCompany.start; 
      var inputDate = document.getElementById('change_company_start_input1');
      inputDate.value = startDateInput;
  
      var endDateInput = globalThis.currentCompany.end; 
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
      globalThis.currentCompany = data;
      fillChangeCompany();
      getCompanyProjects1()
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

  

  function changeCompany1() {
    const companyNameInput = document.getElementById('change_company_name_input1');
    const startInput = document.getElementById('change_company_start_input1');
    const endInput = document.getElementById('change_company_end_input1');
    const status = document.getElementById('change_company_status_input1').value;
    
    const companyName = companyNameInput.value;
    const startDate = startInput.value;
    const endDate = endInput.value;
  
    if (companyName !== "" && startDate !== '' && endDate !== '') {
      const startData = new Date(startDate);
      const startDataFormatted = startData.toISOString().split('T')[0];
  
      const endData = new Date(endDate);
      const endDataFormatted = endData.toISOString().split('T')[0];
  
      const path = db.collection('companies').doc(globalThis.currentCompany.id);
  
      const data = {
        //l'id del documento non viene riscritto ad ogni modifica per evitare errori e incroci tra variabili errate
        name: companyName,
        p_iva: document.getElementById('change_company_p_iva_input1').value,
        start: startDataFormatted,
        end: endDataFormatted,
        status: status,
      };
  
      path.update(data)
        .then(() => {
          alert('Azienda modificata con successo');
          getCompanies1();
        })
        .catch((error) => {
          alert('Errore durante la scrittura del documento: ' + error);
        });
    } else {
      if (companyName === '') {
        alert('Si prega di inserire un nome valido');
      } else if (startDate === '') {
        alert('Si prega di inserire una data di inizio collaborazione valida');
      } else {
        alert('Si prega di inserire una data di fine collaborazione valida');
      }
    }
  }