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
    document.getElementById('create_company1').style.display = "none";
    notificate('Azienda aggiunta con successo', 'normal');
    return path.doc(newDocId).update({
      id: newDocId
    });
  })
  
  .catch((error) => {
    notificate("Errore durante l'aggiunta dell'azienda" + error, 'error');
  });
  } else {
    notificate("Si prega di inserire una data di inizio collaborazione valida", 'error');
  }
  }else{
    notificate("Si prega di inserire un nome valido", 'error');
  }
  }

  

  function addProject(){
    if(document.getElementById('project_name1').value !== "") {
      if (document.getElementById('project_end_date1').value !== '') {
  
  const name1 = document.getElementById('project_name1').value;
  const description1 = document.getElementById('project_description1').value;
  const path = db.collection('projects');
  
  var inputEndDateElement = document.getElementById('project_end_date1');
  var valoreEndDataStringa = inputEndDateElement.value;
  var endData = new Date(valoreEndDataStringa);
  var endDataFormatted = endData.toISOString().split('T')[0];

  const select = document.getElementById('project_owner1');
  const selectedOwnerName = select.options[select.selectedIndex].text;

  const project_brand_selector = document.getElementById('project_brand_selector1');
  const selectedBrandName = project_brand_selector.options[project_brand_selector.selectedIndex].text;
  
  const data = {
  id : path.doc().id,
  name: name1,
  project_brand_name : selectedBrandName,
  project_brand_id : project_brand_selector.value,
  description: description1,
  owner_id: document.getElementById('project_owner1').value,
  owner_name: selectedOwnerName,
  estimated_days : document.getElementById('project_day1').value,
  estimated_hours : document.getElementById('project_time1').value,
  end : endDataFormatted,
  };
  
  path.add(data)
  .then((docRef) => {
    const newDocId = docRef.id;
    notificate("Progetto aggiunto con successo", 'normal');
    document.getElementById('project_create1').style.display = "none";
    return path.doc(newDocId).update({ id: newDocId });
  })
  .then(() => {
    document.getElementById('project_create1').style.display = 'none';
    getProjects();
  })
  .catch((error) => {
    console.error(error)
    notificate("Errore durante l'aggiunta del progetto:" + error + 'error');
  });
  } else {
    notificate('Si prega di inserire una data di fine valida');
  }  
  } else {
    notificate('Si prega di inserire un nome progetto valido');
  }
  }


  function addBrand(){
    if(document.getElementById('brand_name1').value !== "") {
      if (document.getElementById('brand_end_date1').value !== '') {
  
  const name1 = document.getElementById('brand_name1').value;
  const description1 = document.getElementById('brand_description1').value;
  const path = db.collection('brands');
  
  var inputEndDateElement = document.getElementById('brand_end_date1');
  var valoreEndDataStringa = inputEndDateElement.value;
  var endData = new Date(valoreEndDataStringa);
  var endDataFormatted = endData.toISOString().split('T')[0];

  const select = document.getElementById('brand_owner');
  const selectedOwnerName = select.options[select.selectedIndex].text;

  const brand_company_selector = document.getElementById('brand_company_selector1');
  const selectedCompanyName = brand_company_selector.options[brand_company_selector.selectedIndex].text;
  
  const data = {
  id : path.doc().id,
  name: name1,
  description: description1,
  owner_id: document.getElementById('brand_owner').value,
  owner_name: selectedOwnerName,
  estimated_days : document.getElementById('brand_day1').value,
  estimated_hours : document.getElementById('brand_time1').value,
  end : endDataFormatted,
  brand_company_name : selectedCompanyName,
  brand_company_id : brand_company_selector.value,
  status: 'ATTIVO',
  };
  
  path.add(data)
  .then((docRef) => {
    const newDocId = docRef.id;
    notificate("Marchio aggiunto con successo", 'normal');
    document.getElementById('brand_create1').style.display = "none";
    return path.doc(newDocId).update({ id: newDocId });
  })
  .then(() => {
    getBrands();
  })
  .catch((error) => {
    notificate("Errore durante l'aggiunta del marchio:" + error, 'error');
  });
  } else {
    notificate('Si prega di inserire una data di fine valida', 'error');
  }  
  } else {
    notificate('Si prega di inserire un nome marchio valido', 'error');
  }
  }

  

  function addTask(){
    if(document.getElementById('name_task_input').value !== "") {
      if (document.getElementById('end_task_date_input').value !== '') {
  
  const name1 = document.getElementById('name_task_input').value;
  const description1 = document.getElementById('description_task_input').value;
  const path = db.collection('tasks');

  var inputStartDateElement = document.getElementById('start_task_date_input');
  var valoreStartDataStringa = inputStartDateElement.value;
  var StartData = new Date(valoreStartDataStringa);
  var StartDataFormatted = StartData.toISOString().split('T')[0];
  
  var inputEndDateElement = document.getElementById('end_task_date_input');
  var valoreEndDataStringa = inputEndDateElement.value;
  var endData = new Date(valoreEndDataStringa);
  var endDataFormatted = endData.toISOString().split('T')[0];

  const select = document.getElementById('select_task_owner');
  const selectedOwnerName = select.options[select.selectedIndex].text;

  const task_brand_selector = document.getElementById('task_brand_selector1');
  const taskBrandName = task_brand_selector.options[task_brand_selector.selectedIndex].text;

  
  const data = {
  id : path.doc().id,
  name: name1,
  description: description1,
  owner_id: document.getElementById('select_task_owner').value,
  owner_name: selectedOwnerName,
  start : StartDataFormatted,
  end : endDataFormatted,
  task_brand_name : taskBrandName,
  task_brand_id : task_brand_selector.value,
  status: 'APERTO',
  };
  
  path.add(data)
  .then((docRef) => {
    const newDocId = docRef.id;
    notificate("Task aggiunto con successo", 'normal');
    document.getElementById('add_task1').style.display = "none";
    return path.doc(newDocId).update({ id: newDocId });
  })
  .then(() => {
    getTasks();
  })
  .catch((error) => {
    notificate("Errore durante l'aggiunta del task:" + error, 'error');
  });
  } else {
    notificate('Si prega di inserire una data di fine valida', 'error');
  }  
  } else {
    notificate('Si prega di inserire un nome task valido', 'error');
  }
  }



  function addAccounting() {
    const accountingNameInput = document.getElementById('accounting_name_input1');
    const accountingEndDateInput = document.getElementById('accounting_end_date_input1');
  
    if (accountingNameInput.value.trim() !== "") {
      if (accountingEndDateInput.value !== '') {
        const name1 = accountingNameInput.value;
        const description1 = document.getElementById('accounting_description_input1').value;
        const path = db.collection('accountings');
  
        const inputStartDateElement = document.getElementById('accounting_start_date_input1');
        const startDateValue = inputStartDateElement.value;
        const startDate = new Date(startDateValue);
        const startFormatted = startDate.toISOString().split('T')[0];
  
        const endDateValue = accountingEndDateInput.value;
        const endDate = new Date(endDateValue);
        const endFormatted = endDate.toISOString().split('T')[0];
  
        const accountingTaskSelector = document.getElementById('accounting_task_selector1');
        const accountingTaskName = accountingTaskSelector.options[accountingTaskSelector.selectedIndex].text;
  
        const dedicated_hours = document.getElementById('accounting_hours1').value;
        const dedicated_minutes = document.getElementById('accounting_minutes1').value;

        const data = {
          name: name1,
          description: description1,
          owner_id: getCookieValue('uid'),
          owner_mail: getCookieValue('mail'),
          start: startFormatted,
          end: endFormatted,
          dedicated_hours: dedicated_hours,
          dedicated_minutes: dedicated_minutes,
          accounting_task_name: accountingTaskName,
          accounting_task_id: accountingTaskSelector.value,
        };
  
        path.add(data)
          .then((docRef) => {
            const newDocId = docRef.id;
            return path.doc(newDocId).update({ id: newDocId });
          })
          .then(() => {
            notificate("Contabilizzazione aggiunta con successo", 'normal');
            document.getElementById('add_accountings1').style.display = "none";
            getAccountings();
          })
          .catch((error) => {
            notificate("Errore durante l'aggiunta della contabilizzazione: " + error, 'error');
          });
      } else {
        notificate('Si prega di inserire una data di fine valida', 'error');
      }
    } else {
      notificate('Si prega di inserire un nome contabilizzazione valido', 'error');
    }
  }
  


  function addTeam() {
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
  
  
  
  