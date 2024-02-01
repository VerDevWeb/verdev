function getAndPopulateTags() {
  var tagsArray = [];

  db.collection('companies').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var data = doc.data();
      if (data.hasOwnProperty('name') && data.hasOwnProperty('id')) {
        tagsArray.push({ name: data.name, id: data.id });
        getAndPopulateTags2(data);z
      }
    });
    populateSelection(tagsArray);
  }).catch((error) => {
    console.error("Errore nell'ottenere l'elenco generale delle aziende per il menù a tendina: ", error);
  });
}

function populateSelection(tags) {
  var selectionInput = document.getElementById("change3");
  selectionInput.innerHTML = "";
  tags.forEach((tag) => {
    var option = document.createElement("option");
    option.text = tag.name; // Popola il nome della option con data.name
    option.value = tag.id; // Popola il value della option con data.id
    selectionInput.add(option);
  });
}



function getAndPopulateTags2(data) {
  var tagsArray = [];
  const uid = getCookieValue('uid');
  var currentCompany3 = data.id;

  db.collection('companies').doc(data.id).collection('brands').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var data = doc.data();
      if (data.hasOwnProperty('name')) {
        tagsArray.push(data.name);
        getAndPopulateTags3(data, currentCompany3);
      }
    });
    populateSelection(tagsArray);
  }).catch((error) => {
    console.error("Errore nell'ottenere l'elenco dei marchi per popolare le selezioni del task: ", error);
  });


function populateSelection(tags) {
  var selectionInput = document.getElementById("change4");
  selectionInput.innerHTML = "";
  tags.forEach((tag) => {
    var option = document.createElement("option");
    option.text = tag;
    option.value = tag;
    selectionInput.add(option);
  });
}
}


function fillSelectionsTeams(){
var collectionRef = firebase.firestore().collection('companies');
  var selectElement = document.getElementById('user_team_selector');
  selectElement.innerHTML = '';

  collectionRef.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      // Ottenere i valori dei tag 'name' e 'id' da ciascun documento
      var name = doc.data().name;
      var id = doc.data().id;

      // Creare un'opzione per l'elemento select
      var option = document.createElement('option');
      option.value = id;
      option.textContent = name;

      // Aggiungere l'opzione all'elemento select
      selectElement.appendChild(option);
    });
  }).catch(function(error) {
    console.log("Errore nel recupero della lista utenti: ", error);
  });
}



function populateSelectWithTags() {
  const tagsCollectionRef = db.collection('general').doc('users_list');

  tagsCollectionRef.get().then((doc) => {
    if (doc.exists) {
      const selectElement = document.getElementById('select_task_owner');
      const selectElement1 = document.getElementById('project_owner2');
      const selectElement2 = document.getElementById('project_owner1');
      const selectElement3 = document.getElementById('brand_owner2');
      const selectElement4 = document.getElementById('brand_owner3');
      const tagData = doc.data();

      selectElement.innerHTML = '';
      selectElement1.innerHTML = '';
      selectElement2.innerHTML = ''; 
      selectElement3.innerHTML = ''; 

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
        }
      }
    } else {
      console.error('La lista degli utenti non è stata trovata');
    }
  }).catch((error) => {
    console.error('Errore nel recupero della lista utenti: ', error);
  });
}



