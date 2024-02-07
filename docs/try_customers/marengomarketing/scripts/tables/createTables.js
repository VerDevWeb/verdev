function createPersonalTodayEndingTaskTableRow(data) {
    const today = new Date();
    const todayFormatted = today.toISOString().slice(0,10); // Formatta la data di oggi come "YYYY-MM-DD"

    if (data.end === todayFormatted) {
        var table = document.getElementById("personalTodayEndingTasksTableBody");
    var dedicated_time = data.dedicated_minutes;
  
    var timeFormatted;
    if (dedicated_time >= 60) {
      var ore = Math.floor(dedicated_time / 60);
      var minutiRimasti = dedicated_time % 60;
      timeFormatted = ore + " ore " + minutiRimasti + " minuti";
    } else {
      timeFormatted = dedicated_time + " minuti";
    }
  
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
    var cell10 = row.insertCell(9);
  
    cell2.className = 'description_table_section'
  
    cell1.innerHTML = data.name; 
    cell2.innerHTML = data.description; 
    cell3.innerHTML = timeFormatted; 
    cell4.innerHTML = data.owner_name; 
    cell9.innerHTML = data.task_project_name;
    cell5.innerHTML = data.start;
    cell6.innerHTML = data.end;
    cell7.innerHTML = data.status;
    cell10.innerHTML = data.id;
  
  
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


function createPersonalFutureEndingTaskTableRow(data) {
    const today = new Date();
    const todayTimestamp = today.getTime();

    const endDateTime = new Date(data.end);
    const endTimestamp = endDateTime.getTime();

    if (endTimestamp > todayTimestamp) {

        var table = document.getElementById("personalFutureEndingTasksTableBody");
    var dedicated_time = data.dedicated_minutes;
  
    var timeFormatted;
    if (dedicated_time >= 60) {
      var ore = Math.floor(dedicated_time / 60);
      var minutiRimasti = dedicated_time % 60;
      timeFormatted = ore + " ore " + minutiRimasti + " minuti";
    } else {
      timeFormatted = dedicated_time + " minuti";
    }
  
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
    var cell10 = row.insertCell(9);
  
    cell2.className = 'description_table_section'
  
    cell1.innerHTML = data.name; 
    cell2.innerHTML = data.description; 
    cell3.innerHTML = timeFormatted; 
    cell4.innerHTML = data.owner_name; 
    cell9.innerHTML = data.task_project_name;
    cell5.innerHTML = data.start;
    cell6.innerHTML = data.end;
    cell7.innerHTML = data.status;
    cell10.innerHTML = data.id;
  
  
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


function createPersonalEndedTaskTableRow(data) {
    const today = new Date();
    const todayTimestamp = today.getTime();

    const endDateTime = new Date(data.end);
    const endTimestamp = endDateTime.getTime();

    if (endTimestamp < todayTimestamp) {

        var table = document.getElementById("personalEndedTasksTableBody");
    var dedicated_time = data.dedicated_minutes;
  
    var timeFormatted;
    if (dedicated_time >= 60) {
      var ore = Math.floor(dedicated_time / 60);
      var minutiRimasti = dedicated_time % 60;
      timeFormatted = ore + " ore " + minutiRimasti + " minuti";
    } else {
      timeFormatted = dedicated_time + " minuti";
    }
  
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
    var cell10 = row.insertCell(9);
  
    cell2.className = 'description_table_section'
  
    cell1.innerHTML = data.name; 
    cell2.innerHTML = data.description; 
    cell3.innerHTML = timeFormatted; 
    cell4.innerHTML = data.owner_name; 
    cell9.innerHTML = data.task_project_name;
    cell5.innerHTML = data.start;
    cell6.innerHTML = data.end;
    cell7.innerHTML = data.status;
    cell10.innerHTML = data.id;
  
  
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


function createTasksTableRow(data) {
  var table = document.getElementById("tasksTableBody");
    var dedicated_time = data.dedicated_minutes;
  
    var timeFormatted;
    if (dedicated_time >= 60) {
      var ore = Math.floor(dedicated_time / 60);
      var minutiRimasti = dedicated_time % 60;
      timeFormatted = ore + " ore " + minutiRimasti + " minuti";
    } else {
      timeFormatted = dedicated_time + " minuti";
    }
  
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
    var cell10 = row.insertCell(9);
  
    cell2.className = 'description_table_section'
  
    cell1.innerHTML = data.name; 
    cell2.innerHTML = data.description; 
    cell3.innerHTML = timeFormatted; 
    cell4.innerHTML = data.owner_name; 
    cell9.innerHTML = data.task_project_name;
    cell5.innerHTML = data.start;
    cell6.innerHTML = data.end;
    cell7.innerHTML = data.status;
    cell10.innerHTML = data.id;
  
  
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