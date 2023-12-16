function addBrand(){
    if (document.getElementById('brand_name1').value !== "") {
  
  const name1 = document.getElementById('brand_name1').value;
  const path = db.collection('companies').doc(globalThis.currentCompany.id).collection('projects').doc(globalThis.currentProject.id).collection('brands');
  const select = document.getElementById('project_owner1');
  const selectedOwnerName = select.options[select.selectedIndex].text;

  const data = {
  id : path.doc().id,
  name: name1,
  description: document.getElementById('brand_description1').value,
  owner_name: selectedOwnerName,
  owner_id: document.getElementById('brand_owner3').value,
  };
  
  path.add(data)
  .then((docRef) => {
  const newDocId = docRef.id;
  getProjectBrands();
  alert(`Brand aggiunto con successo:`);
  return path.doc(newDocId).update({
    id: newDocId
  });
  })
  .catch((error) => {
  alert(`Errore durante l'aggiunta del brand: ${error}`);
  });
  
  
  
  } else {
  alert('Si prega di inserire un nome valido per il brand')
  }
  }



  

function getProjectBrands(){
    var table = document.getElementById("tableBody11");
    var taskData = globalThis.currentCompany;
    const db = firebase.firestore();
    const userTasksRef = db.collection('companies').doc(globalThis.currentCompany.id).collection('projects').doc(globalThis.currentProject.id).collection('brands');
  
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
    var table = document.getElementById("tableBody11");
  
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
  
    cell1.innerHTML = data.name; 
    cell2.innerHTML = data.description; 
    cell3.innerHTML = data.owner_name; 
    cell4.innerHTML = data.id;
  
    var cell8 = row.insertCell(4);
  
    cell8.className = 'cell9';
    cell8.style.flexdirection = 'column';
  
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>edit</i>";
    editButton.onclick = function() {
      globalThis.currentBrand = data;
      fillChangeBrand();
      getBrandTasks();
    };
    cell8.appendChild(editButton);
  
  
    var editButton = document.createElement("button");
    editButton.className = "task_actions_button1";
    editButton.innerHTML = "<i class='material-icons notranslate'>delete</i>";
    editButton.onclick = function() {
      globalThis.currentBrand = data;
      deleteBrand();
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




  function getBrandToChange() { 
    getAndPopulateTags();
    const db = firebase.firestore();
    const userTasksRef = db.collection('companies').doc(globalThis.currentCompany.id).collection('projects').doc(globalThis.currentProject.id).collection('brands').doc(globalThis.currentBrand.id);

    userTasksRef.get()
        .then((doc) => {
            if (doc.exists) {
                const data = doc.data(); // Retrieve project data from the document
                const changeProjectElement = document.getElementById("change_brand");
                changeProjectElement.style.display = "flex";

                // Update project fields with retrieved data
                document.getElementById("project_name2").value = data.name;
                document.getElementById("project_description2").value = data.description;

                // Update select element with company data
                var selectElement3 = document.getElementById('project_status2');
                var selectedCompany = data.company;
                var newOption3 = document.createElement('option');
                newOption3.text = selectedCompany;
                newOption3.value = selectedCompany;
                selectElement3.appendChild(newOption3);
                selectElement3.value = selectedCompany;

                // Update start and end dates
                document.getElementById('project_end2').value = data.end;
            } else {
                alert("Progetto non trovato, si consiglia di riaggiornare la pagina");
            }
        })
        .catch((error) => {
            console.error('Errore durante il recupero del progetto da modificare: ', error);
            alert('Errore durante il recupero del progetto da modificare');
        });
}
  


  
function fillChangeBrand() { 
  const userTasksRef = db.collection('companies').doc(globalThis.currentCompany.id).collection('projects').doc(globalThis.currentProject.id).collection('brands').doc(globalThis.currentBrand.id);
  userTasksRef.get()
  .then((doc) => {
    if (doc.exists) {
  document.getElementById("change_brand").style.display = "flex";
 
  document.getElementById("brand_name2").value = globalThis.currentBrand.name;
  document.getElementById("brand_description2").value = globalThis.currentBrand.description;

    } else {
      alert("Azienda non trovata, si consiglia di aggiornare la pagina e riprovare");
    }
  })
  .catch((error) => {
    console.error('Errore durante il recupero dei dati: ', error);
  });
}




function changeBrand() {
  const name = document.getElementById('brand_name2').value;
  const description = document.getElementById('brand_description2').value;
  const owner_id = document.getElementById('brand_owner2').value;
  const owner_name = document.getElementById('brand_owner2').options[document.getElementById('project_owner2').selectedIndex].textContent;


  if (name !== '') {
    const path = db.collection('companies').doc(globalThis.currentCompany.id).collection('projects').doc(globalThis.currentProject.id).collection('brands').doc(globalThis.currentBrand.id);

    const data = {
      name: name,
      description: description,
      owner_name: owner_name,
      owner_id: owner_id,
    };

    path.update(data)
      .then(() => {
        alert('Brand modificato con successo');
        getProjectBrands();
        document.getElementById('change_brand').style.display = 'none';
      })
      .catch((error) => {
        alert("Errore durante la modifica del brand: " + error);
      });
  } else {
    alert('Si prega di inserire un nome valido per la modifica');
}
}



function deleteBrand() {
  const db = firebase.firestore();
  const docRef = db.collection('companies').doc(globalThis.currentCompany.id).collection('projects').doc(globalThis.currentProject.id).collection('brands').doc(globalThis.currentBrand.id)
  
  docRef.delete()
    .then(() => {
      alert("Brand eliminato con successo");
      getProjectBrands();
    })
    .catch((error) => {
      alert("Errore durante l'eliminazione del brand: ", error);
    });
  }