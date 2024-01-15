function getCompanyDataToFill(data) {
    globalThis.currentCompany = data;
    document.getElementById("change_company1").style.display = "flex";
  
    document.getElementById("change_company_name_input1").value = data.name;
    document.getElementById("change_company_p_iva_input1").value = data.p_iva;
    
    document.getElementById('change_company_status_input1').value = (data.status === 'SOSPESA') ? 'SOSPESA' : 'ATTIVA';
    
      var startDateInput = data.start; 
      var inputDate = document.getElementById('change_company_start_input1');
      inputDate.value = startDateInput;
  
      var endDateInput = data.end; 
      var inputDate1 = document.getElementById('change_company_end_input1');
      inputDate1.value = endDateInput;
  }

function getProjectDataToFill(data) { 
    globalThis.currentProject = data;
    document.getElementById("change_project").style.display = "flex";

    var menu = document.getElementById("project_owner2");
    for (var i = 0; i < menu.options.length; i++) {
      if (menu.options[i].value === data.owner_id) {
        menu.selectedIndex = i;
        break;
      }
    }

    var menu2 = document.getElementById("project_company_selector2");
    for (var i = 0; i < menu2.options.length; i++) {
      if (menu2.options[i].value === data.project_company_id) {
        menu2.selectedIndex = i;
        break;
      }
    }
    
    document.getElementById("project_name2").value = data.name;
    document.getElementById("project_description2").value = data.description;

    document.getElementById('project_status2').value = (data.status === 'SOSPESO') ? 'SOSPESO' : 'ATTIVO';
    document.getElementById('project_end2').value = data.end;
}


function getBrandDataToFill(data) { 
    globalThis.currentBrand = data;
    document.getElementById("change_brand").style.display = "flex";

    var menu = document.getElementById("brand_owner2");
    for (var i = 0; i < menu.options.length; i++) {
      if (menu.options[i].value === data.owner_id) {
        menu.selectedIndex = i;
        break;
      }
    }
    
    document.getElementById("brand_name2").value = data.name;
    document.getElementById("brand_description2").value = data.description;

    var menu2 = document.getElementById("brand_project_selector2");
    for (var i = 0; i < menu2.options.length; i++) {
      if (menu2.options[i].value === data.brand_project_id) {
        menu2.selectedIndex = i;
        break;
      }
    }
    
    var endDateInput = data.end; 
    var inputDate1 = document.getElementById('brand_end2');
    inputDate1.value = endDateInput;
  
    document.getElementById('brand_status2').value = (data.status === 'SOSPESO') ? 'SOSPESO' : 'ATTIVO';
    document.getElementById('brand_end2').value = data.end;
}


function getTaskDataToFill(data) { 
  globalThis.currentTask = data;
  document.getElementById("change_task").style.display = "flex";
  getTaskAccountings();

  var menu = document.getElementById("task_owner2");
  for (var i = 0; i < menu.options.length; i++) {
    if (menu.options[i].value === data.owner_id) {
      menu.selectedIndex = i;
      break;
    }
  }
  
  document.getElementById("task_name2").value = data.name;
  document.getElementById("task_description2").value = data.description;

  var menu2 = document.getElementById("task_brand_selector2");
  for (var i = 0; i < menu2.options.length; i++) {
    if (menu2.options[i].value === data.task_brand_id) {
      menu2.selectedIndex = i;
      break;
    }
  }
  
  var endDateInput = data.end; 
  var inputDate1 = document.getElementById('task_end2');
  inputDate1.value = endDateInput;

  var startDateInput = data.start; 
  var inputDate2 = document.getElementById('task_start2');
  inputDate2.value = startDateInput;

  
  document.getElementById('task_status2').value = (data.status === 'SOSPESO') ? 'SOSPESO' : 'ATTIVO';
  document.getElementById('task_start2').value = data.start;
  document.getElementById('task_end2').value = data.end;
  
}


function getAccountingDataToFill(data) { 
  globalThis.currentAccounting = data;
  document.getElementById("change_accounting").style.display = "flex";

  document.getElementById("accounting_name2").value = data.name;
  document.getElementById("accounting_description2").value = data.description;

  var menu2 = document.getElementById("accounting_task_selector2");
  for (var i = 0; i < menu2.options.length; i++) {
    if (menu2.options[i].value === data.accounting_task_id) {
      menu2.selectedIndex = i;
      break;
    }
  }
  
  var endDateInput = data.end; 
  var inputDate1 = document.getElementById('accounting_end2');
  inputDate1.value = endDateInput;

  var startDateInput = data.start; 
  var inputDate2 = document.getElementById('accounting_start2');
  inputDate2.value = startDateInput;

  
  document.getElementById('accounting_start2').value = data.start;
  document.getElementById('accounting_end2').value = data.end;
}




 function fillAccountingFromTask(){
  var menu2 = document.getElementById("accounting_task_selector1");
  for (var i = 0; i < menu2.options.length; i++) {
    if (menu2.options[i].value === globalThis.currentTask.id) {
      menu2.selectedIndex = i;
      break;
    }
  }
 }