const globalScriptUrl = 'https://script.google.com/macros/s/AKfycbxGKArH_uIKhja2sAEobk9Ql4ppVgBNMtmJs3qCN3OLiu_cGl8ICpt3m7ATYtiZpROG/exec';


function submitCompanyToGoogleSheets(sheetType) {
  const scriptURL = globalScriptUrl;

  const name1 = document.getElementById('company_name_input1').value;
  const status = document.getElementById('company_status_input1').value;
  const p_iva = document.getElementById('p_iva_input1').value;
  
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
  
  fetch(scriptURL + '?sheet=' + sheetType, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name1, startDataFormatted, endDataFormatted, p_iva , status}),
  })
  .then(response => {
    console.log('Dati inviati con successo!', response);
    // Puoi fare altre azioni qui dopo l'invio dei dati
  })
  .catch(error => console.error('Errore durante l\'invio dei dati:', error));
}



function submitBrandToGoogleSheets(sheetType) {
  const scriptURL = globalScriptUrl;
  
  const name1 = document.getElementById('brand_name1').value;
  const description1 = document.getElementById('brand_description1').value;
  
  var inputEndDateElement = document.getElementById('brand_end_date1');
  var valoreEndDataStringa = inputEndDateElement.value;
  var endData = new Date(valoreEndDataStringa);
  var endDataFormatted = endData.toISOString().split('T')[0];

  const select = document.getElementById('brand_owner');
  const selectedOwnerName = select.options[select.selectedIndex].text;
  const owner_id = select.value;

  const brand_company_selector = document.getElementById('brand_company_selector1');
  const selectedCompanyName = brand_company_selector.options[brand_company_selector.selectedIndex].text;
  const brand_company_id = brand_company_selector.value
  

  fetch(scriptURL + '?sheet=' + sheetType, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name1, description1, selectedOwnerName , owner_id, endDataFormatted, selectedCompanyName, brand_company_id}),
  })
  .then(response => {
    console.log('Dati inviati con successo!', response);
    // Puoi fare altre azioni qui dopo l'invio dei dati
  })
  .catch(error => console.error('Errore durante l\'invio dei dati:', error));
}



function submitProjectToGoogleSheets(sheetType) {
  const scriptURL = globalScriptUrl;
  
  const name1 = document.getElementById('project_name1').value;
  const description1 = document.getElementById('project_description1').value;
  const path = db.collection('projects');
  
  var inputEndDateElement = document.getElementById('project_end_date1');
  var valoreEndDataStringa = inputEndDateElement.value;
  var endData = new Date(valoreEndDataStringa);
  var endDataFormatted = endData.toISOString().split('T')[0];

  const select = document.getElementById('project_owner1');
  const selectedOwnerName = select.options[select.selectedIndex].text;
  const owner_id = select.value;

  const project_brand_selector = document.getElementById('project_brand_selector1');
  const selectedBrandName = project_brand_selector.options[project_brand_selector.selectedIndex].text;
  const projectBrandId = project_brand_selector.value;
  

  fetch(scriptURL + '?sheet=' + sheetType, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name1, description1, selectedOwnerName , owner_id, endDataFormatted, selectedBrandName, projectBrandId}),
  })
  .then(response => {
    console.log('Dati inviati con successo!', response);
    // Puoi fare altre azioni qui dopo l'invio dei dati
  })
  .catch(error => console.error('Errore durante l\'invio dei dati:', error));
}


function submitTaskToGoogleSheets(sheetType) {
  const scriptURL = globalScriptUrl;
  
  const name1 = document.getElementById('name_task_input').value;
  const description1 = document.getElementById('description_task_input').value;
  const path = db.collection('tasks');

  var inputStartDateElement = document.getElementById('start_task_date_input');
  var valoreStartDataStringa = inputStartDateElement.value;
  var StartData = new Date(valoreStartDataStringa);
  var startDataFormatted = StartData.toISOString().split('T')[0];
  
  var inputEndDateElement = document.getElementById('end_task_date_input');
  var valoreEndDataStringa = inputEndDateElement.value;
  var endData = new Date(valoreEndDataStringa);
  var endDataFormatted = endData.toISOString().split('T')[0];

  const select = document.getElementById('select_task_owner');
  const selectedOwnerName = select.options[select.selectedIndex].text;

  const task_project_selector = document.getElementById('task_project_selector1');
  const taskProjectName = task_project_selector.options[task_project_selector.selectedIndex].text;

  const owner_id = document.getElementById('select_task_owner').value;
  const task_project_id = task_project_selector.value;
  const status = 'APERTO'
  

  fetch(scriptURL + '?sheet=' + sheetType, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name1, description1, owner_id, selectedOwnerName , startDataFormatted, endDataFormatted, taskProjectName, task_project_id, status}),
  })
  .then(response => {
    console.log('Dati inviati con successo!', response);
    // Puoi fare altre azioni qui dopo l'invio dei dati
  })
  .catch(error => console.error('Errore durante l\'invio dei dati:', error));
}



function submitAccountingToGoogleSheets(sheetType) {
  const scriptURL = globalScriptUrl;

  const accountingNameInput = document.getElementById('accounting_name_input1');
  const accountingEndDateInput = document.getElementById('accounting_end_date_input1');
  const name1 = accountingNameInput.value;
  const description1 = document.getElementById('accounting_description_input1').value;

  const inputStartDateElement = document.getElementById('accounting_start_date_input1');
  const startDateValue = inputStartDateElement.value;
  const startDate = new Date(startDateValue);
  const startFormatted = startDate.toISOString().split('T')[0];

  const endDateValue = accountingEndDateInput.value;
  const endDate = new Date(endDateValue);
  const endFormatted = endDate.toISOString().split('T')[0];

  const accountingTaskSelector = document.getElementById('accounting_task_selector1');
  const accountingTaskName = accountingTaskSelector.options[accountingTaskSelector.selectedIndex].text;
  const accountingTaskId = accountingTaskSelector.value;

  const dedicated_minutes = document.getElementById('accounting_minutes1').value;
  const owner_mail = getCookieValue('mail');
  const owner_id = getCookieValue('uid');

  fetch(scriptURL + '?sheet=' + sheetType, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name1, description1, owner_mail, owner_id , dedicated_minutes, startFormatted, endFormatted, accountingTaskName, accountingTaskId}),
  })
  .then(response => {
    console.log('Dati inviati con successo!', response);
    // Puoi fare altre azioni qui dopo l'invio dei dati
  })
  .catch(error => console.error('Errore durante l\'invio dei dati:', error));
}
