function add_accounting1(){
    if (document.getElementById("accounting_create1").style.display === "flex"){
     document.getElementById("accounting_create1").style.display = "none";
    }else{
     document.getElementById("accounting_create1").style.display = "flex";
    }
   }
 
function writeTask() {
    var selection = document.getElementById('select_task_type1').value;
    switch (selection) {
      case 'private':
        writePrivateTask();
        break;
      case 'company':
        writeCompanyTask();
        break;
      default:
        console.log('Assicurati di aver selezionato un owner');
    }
  }


  function writePrivateTask() {
    if(document.getElementById('name_task_input').value !== "") {
      if (document.getElementById('start_task_date_input').value !== '') {
        if (document.getElementById('end_task_date_input').value !== '') {

        
      const uid = getCookieValue('uid');
      const db = firebase.firestore();
      
      const userTasksRef = db.collection('users').doc(uid).collection('tasks');
      
      const name = document.getElementById('name_task_input').value;
      const description = document.getElementById('description_task_input').value;
      const owner = document.getElementById('owner_task_input').value;
      const company = document.getElementById('company_task_input').value;
      const brand = document.getElementById('brand_task_input').value;
      const project = document.getElementById('project_task_input').value;
      
      var inputStartDateElement = document.getElementById('start_task_date_input');
      var valoreStartDataStringa = inputStartDateElement.value;
      var startData = new Date(valoreStartDataStringa);
      var startDataFormatted = startData.toISOString().split('T')[0];

      var inputEndDateElement = document.getElementById('end_task_date_input');
      var valoreEndDataStringa = inputEndDateElement.value;
      var endData = new Date(valoreEndDataStringa);
      var endDataFormatted = endData.toISOString().split('T')[0];


      const documentRef = db.collection('users').doc(uid).collection('tasks').doc();


// Dati da aggiungere o aggiornare nel documento esistente
const datiDaAggiornare = {
name: name,
description: description,
owner: owner,
company: company,
brand: brand,
project: project,
start: startDataFormatted,
end: endDataFormatted,
status: 'APERTA'
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



  



  
  function writeAccounting1(){
    var accountingDescription = document.getElementById('accounting_description1').value;
    if(accountingDescription !== "") {

      const uid = getCookieValue('uid');
      var accountingDescription = document.getElementById('accounting_description1').value;

      var inputStartDateElement = document.getElementById('accounting_start_date1');
      var valoreStartDataStringa = inputStartDateElement.value;
      var startData = new Date(valoreStartDataStringa);
      var startDataFormatted = startData.toISOString().split('T')[0];

      const db = firebase.firestore();
      const docRef = db.collection('users').doc(uid).collection('tasks').doc(globalThis.currentTask1.id).collection('accountings').doc();
      const accountingId = docRef.id;
      
      // Dati da aggiungere o aggiornare nel documento
      const datiDaAggiungere = {
        id: accountingId,
        description: document.getElementById('accounting_description1').value,
        owner: mail,
        dedicated_time: document.getElementById('accounting_dedicated_time1').value,
        start: startDataFormatted,
      };
      
      // Scrivi i dati nel documento usando il metodo set()
      docRef.set(datiDaAggiungere)
        .then(() => {
          alert("Contabilizzazione aggiunta con successo");
        })
        .catch((error) => {
          alert("Errore durante l'aggiunta della contabilizzazione: ", error);
        });
      

  } else {
      alert("La descrizione della contabilizzazione è vuota");
  }
  }
  



  function addNewCompany1(){

    if(document.getElementById('company_name_input1').value !== "") {
      if (document.getElementById('company_start_input1').value !== '') {
        if (document.getElementById('company_end_input1').value !== '') {

const status = document.getElementById('company_status_input1').value;
const path = db.collection('companies');
const companyName1 = document.getElementById('company_name_input1').value;

var inputStartDateElement = document.getElementById('company_start_input1');
var valoreStartDataStringa = inputStartDateElement.value;
var startData = new Date(valoreStartDataStringa);
var startDataFormatted = startData.toISOString().split('T')[0];

var inputEndDateElement = document.getElementById('company_end_input1');
var valoreEndDataStringa = inputEndDateElement.value;
var endData = new Date(valoreEndDataStringa);
var endDataFormatted = endData.toISOString().split('T')[0];

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
    alert(`Azienda aggiunta con successo:`);
    getCompanies1();
    document.getElementById('edit_company1').style.display = "none";
    return path.doc(newDocId).update({
      id: newDocId
    });
  })
  .catch((error) => {
    alert(`Errore durante l'aggiunta dell'azienda: ${error}`);
  });


  
} else {
  alert('Si prega di inserire una data di fine collaborazione valida')
}  
} else {
alert('Si prega di inserire una data di inizio collaborazione valida')
}
}else{
alert('Si prega di inserire un nome valido')
}
  }


  function addNewProject1(){

    if(document.getElementById('project_name1').value !== "") {
        if (document.getElementById('project_end_date1').value !== '') {

const name1 = document.getElementById('project_name1').value;
const description1 = document.getElementById('project_description1').value;
const path = db.collection('companies').doc(globalThis.currentCompany1.id).collection('projects');
const currentCompany2 = globalThis.currentCompany1.id;


var inputEndDateElement = document.getElementById('project_end_date1');
var valoreEndDataStringa = inputEndDateElement.value;
var endData = new Date(valoreEndDataStringa);
var endDataFormatted = endData.toISOString().split('T')[0];

const data = {
  id : path.doc().id,
  name: name1,
  description: description1,
  owner: document.getElementById('project_holder1').value,
  estimated_days : document.getElementById('project_day1').value,
  estimated_hours : document.getElementById('project_time1').value,
  end : endDataFormatted,
  
};


path.add(data)
  .then((docRef) => {
    const newDocId = docRef.id;
    alert(`Progetto aggiunto con successo:`);
    document.getElementById('edit_company1').style.display = "none";
    getCompanyProjects1()
    return path.doc(newDocId).update({
      id: newDocId
    });
  })
  .catch((error) => {
    alert(`Errore durante l'aggiunta del progetto: ${error}`);
  });


  
} else {
  alert('Si prega di inserire una data di fine valida')
}  
} else {
alert('Si prega di inserire un nome progetto valido')
}
}


function createTeam1() {
  const name = document.getElementById('team_name1').value;
  const description = document.getElementById('team_description1').value;
  const selectElement = document.getElementById('team_members1');
  const selectedOptions = Array.from(selectElement.selectedOptions).map(option => option.value);


  if (name !== ""){
    if(selectElement.selection !== ""){
      db.collection('teams').add({
        name : name,
        description : description,
        team_members: selectedOptions
    })
    .then((docRef) => {
      db.collection('teams').doc(docRef.id).update({
        id: docRef.id,
    })
        alert('Team aggiunto con successo');
        document.getElementById('create_team1').style.display = 'none'
    })
    .catch((error) => {
        alert("Errore durante l'aggiunta del team: ", error);
    });
    }else{
      alert('Selezionare almeno un membro')
    }
  }else{
    alert('Inserire un nome valido')
  }
}




function writeCompanyTask() {
  if(document.getElementById('name_task_input').value !== "") {
    if (document.getElementById('start_task_date_input').value !== '') {
      if (document.getElementById('end_task_date_input').value !== '') {

      
    const uid = getCookieValue('uid');
    const db = firebase.firestore();
    const company = document.getElementById('company_task_input').value;

    const userTasksRef = db.collection('companies').doc(company).collection('tasks');
    
    const name = document.getElementById('name_task_input').value;
    const description = document.getElementById('description_task_input').value;
    const owner = document.getElementById('owner_task_input').value;
    const brand = document.getElementById('brand_task_input').value;
    const project = document.getElementById('project_task_input').value;
    
    var inputStartDateElement = document.getElementById('start_task_date_input');
    var valoreStartDataStringa = inputStartDateElement.value;
    var startData = new Date(valoreStartDataStringa);
    var startDataFormatted = startData.toISOString().split('T')[0];

    var inputEndDateElement = document.getElementById('end_task_date_input');
    var valoreEndDataStringa = inputEndDateElement.value;
    var endData = new Date(valoreEndDataStringa);
    var endDataFormatted = endData.toISOString().split('T')[0];


    const documentRef = db.collection('users').doc(uid).collection('tasks').doc();


// Dati da aggiungere o aggiornare nel documento esistente
const datiDaAggiornare = {
name: name,
description: description,
owner: owner,
company: company,
brand: brand,
project: project,
start: startDataFormatted,
end: endDataFormatted,
status: 'APERTA'
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
alert("Task aziendale aggiunto con successo");
})
.catch((error) => {
alert("Errore durante l'aggiunta del task aziendale: ", error);
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