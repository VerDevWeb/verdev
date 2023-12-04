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
  
      const path = db.collection('companies').doc(globalThis.currentCompany1.id);
  
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
  


  

function writeChangedTask1(){
  writeChangedPrivateTask();
}



function deleteTaskGET(data) {
const uid = getCookieValue('uid');
const db = firebase.firestore();
const docRef = db.collection('users').doc(uid).collection('tasks').doc(data.id);

docRef.delete()
  .then(() => {
    alert("Task eliminato con successo");
    getOpenTasks();
  })
  .catch((error) => {
    alert("Errore durante l'eliminazione del task: ", error);
  });
}



function deleteCompanyGET1(data) {

const uid = getCookieValue('uid');
const db = firebase.firestore();
const docRef = db.collection('companies').doc(data.id);

docRef.delete()
  .then(() => {
    alert("Azienda eliminata con successo");
    getCompanies1();
  })
  .catch((error) => {
    alert("Errore durante l'eliminazione dell'azienda: ", error);
  });
}




function deleteAccounting1(data, taskData) {
const uid = getCookieValue('uid');
const db = firebase.firestore();
const docRef = db.collection('users').doc(uid).collection('tasks').doc(taskData.id).collection('accountings').doc(data.id);

docRef.delete()
  .then(() => {
    alert("Contabilizzazione eliminata con successo");
    getAccountings1(taskData);
  })
  .catch((error) => {
    alert("Errore durante l'eliminazione della contabilizzazione: ", error);
  });
}



function deleteProject1(data) {
  const db = firebase.firestore();
  const docRef = db.collection('companies').doc(currentCompany1.id).collection('projects').doc(data.id)
  
  docRef.delete()
    .then(() => {
      alert("Contabilizzazione eliminata con successo");
      getCompanyProjects1(data);
    })
    .catch((error) => {
      alert("Errore durante l'eliminazione della contabilizzazione: ", error);
    });
  }
  



  function writeChangedPrivateTask() {
      const uid = getCookieValue('uid');
      const db = firebase.firestore();
  
      const name = document.getElementById('change1').value;
      const description = document.getElementById('change2').value;
      const status = document.getElementById('change6').value;
      
      var inputStartDateElement = document.getElementById('change9');
      var valoreStartDataStringa = inputStartDateElement.value;
      var startData = new Date(valoreStartDataStringa);
      var startDataFormatted = startData.toISOString().split('T')[0];
    
      var inputEndDateElement = document.getElementById('change10');
      var valoreEndDataStringa = inputEndDateElement.value;
      var endData = new Date(valoreEndDataStringa);
      var endDataFormatted = endData.toISOString().split('T')[0];
    
      const documentRef = db.collection('users').doc(uid).collection('tasks').doc(globalThis.currentTask1.id);


      // Dati da aggiungere o aggiornare nel documento esistente
      const datiDaAggiornare = {
        name: name,
        description: description,
        start: startDataFormatted,
        end: endDataFormatted,
        status: status,
      };
      
      // Aggiorna i dati nel documento usando il metodo update()
      documentRef.update(datiDaAggiornare)
        .then(() => {
          alert("Il task è stato aggiornato con successo");
        })
        .catch((error) => {
          alert("Errore durante l'aggiornamento del task: ", error);
        });
    }
    


