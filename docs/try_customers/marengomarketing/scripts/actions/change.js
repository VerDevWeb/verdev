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
        notificate('Azienda modificata con successo', 'normal');
        document.getElementById("change_company1").style.display = "none";
        getCompanies1();
      })
      .catch((error) => {
        notificate("Errore durante la modifica dell'azienda:" + error + 'error');
      });
  } else {
    if (companyName === '') {
      notificate("Si prega di inserire un nome valido:", 'error');
    } else if (startDate === '') {
      notificate("Si prega di inserire una data di inizio collaborazione valida:", 'error');
    } else {
      notificate("Si prega di inserire una data di fine collaborazione valida:", 'error');
    }
  }
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

  const project_company_selector = document.getElementById('project_company_selector2');
  const selectedCompanyName = project_company_selector.options[project_company_selector.selectedIndex].text;
  

  if (name !== '') {
    const path = db.collection('projects').doc(globalThis.currentProject.id)

    const data = {
      name: name,
      description: description,
      owner_name: owner_name,
      owner_id: owner_id,
      end: endFormatted,
      status: status,
      project_company_name : selectedCompanyName,
      project_company_id : project_company_selector.value,
    };

    path.update(data)
      .then(() => {
        notificate("Progetto modificato con successo" , 'normal');
        document.getElementById("change_project").style.display = "none";
        getProjects();
      })
      .catch((error) => {
        notificate("Errore durante l'aggiornamento del progetto: " + error, 'error');
      });
  } else {
    notificate("Si prega di inserire un nome valido per la modifica" , 'error');
}
}



function changeBrand() {
  const name = document.getElementById('brand_name2').value;
  const description = document.getElementById('brand_description2').value;
  const owner_id = document.getElementById('brand_owner2').value;
  const owner_name = document.getElementById('brand_owner2').options[document.getElementById('brand_owner2').selectedIndex].textContent;
  const status = document.getElementById('brand_status2').value;
  const end = document.getElementById('brand_end2');
  const endToStore = new Date(end.value);
  const endFormatted = endToStore.toISOString().split('T')[0];

  const brand_project_selector = document.getElementById('brand_project_selector2');
  const selectedProjectName = brand_project_selector.options[brand_project_selector.selectedIndex].text;


  if (name !== '') {
    const path = db.collection('brands').doc(globalThis.currentBrand.id);

    const data = {
      name: name,
      description: description,
      owner_name: owner_name,
      owner_id: owner_id,
      end: endFormatted,
      brand_project_name : selectedProjectName,
      brand_project_id : brand_project_selector.value,
      status: status,
    };

    path.update(data)
      .then(() => {
        notificate("Brand modificato con successo" , 'normal');
        getBrands();
        document.getElementById('change_brand').style.display = 'none';
      })
      .catch((error) => {
        notificate("Errore durante la modifica del brand: " + error, 'error');
      });
  } else {
    notificate("Si prega di inserire un nome valido per la modifica", 'error');
}
}


function changeTask() {
  const name = document.getElementById('task_name2').value;
  const description = document.getElementById('task_description2').value;
  const owner_id = document.getElementById('task_owner2').value;
  const owner_name = document.getElementById('task_owner2').options[document.getElementById('task_owner2').selectedIndex].textContent;
  const status = document.getElementById('task_status2').value;
  
  const end = document.getElementById('task_end2');
  const endToStore = new Date(end.value);
  const endFormatted = endToStore.toISOString().split('T')[0];

  const start = document.getElementById('task_start2');
  const startToStore = new Date(start.value);
  const startFormatted = startToStore.toISOString().split('T')[0];

  const task_brand_selector = document.getElementById('task_brand_selector2');
  const taskBrandName = task_brand_selector.options[task_brand_selector.selectedIndex].text;


  if (name !== '') {
    const path = db.collection('tasks').doc(globalThis.currentTask.id);

    const data = {
      name: name,
      description: description,
      owner_name: owner_name,
      owner_id: owner_id,
      task_brand_name: taskBrandName,
      task_brand_id: task_brand_selector.value,
      start: startFormatted,
      end: endFormatted,
      status: status,
    };

    path.update(data)
      .then(() => {
        notificate("Task modificato con successo" , 'normal');
        getTasks();
        document.getElementById('change_task').style.display = 'none';
      })
      .catch((error) => {
        notificate("Errore durante la modifica del task: " + error, 'error');
      });
  } else {
    notificate("Si prega di inserire un nome valido per la modifica", 'error');
}
}


function changeAccounting() {
  const name = document.getElementById('accounting_name2').value;
  const description = document.getElementById('accounting_description2').value;
  
  const end = document.getElementById('accounting_end2');
  const endToStore = new Date(end.value);
  const endFormatted = endToStore.toISOString().split('T')[0];

  const start = document.getElementById('accounting_start2');
  const startToStore = new Date(start.value);
  const startFormatted = startToStore.toISOString().split('T')[0];

  const accounting_task_selector = document.getElementById('accounting_task_selector2');
  const accountingTaskName = accounting_task_selector.options[accounting_task_selector.selectedIndex].text;


  if (name !== '') {
    const path = db.collection('accountings').doc(globalThis.currentAccounting.id);

    const data = {
  name: name,
  description: description,
  owner_id: getCookieValue('uid'),
  owner_mail: getCookieValue('mail'),
  start : startFormatted,
  end : endFormatted,
  accounting_task_name : accountingTaskName,
  accounting_task_id : accounting_task_selector.value,
    };

    path.update(data)
      .then(() => {
        notificate("Contabilizzazione modificata con successo" , 'normal');
        getAccountings();
        document.getElementById('change_accounting').style.display = 'none';
      })
      .catch((error) => {
        notificate("Errore durante la modifica della contabilizzazione: " + error, 'error');
      });
  } else {
    notificate("Si prega di inserire un nome valido per la modifica", 'error');
}
}