function writeAccounting(){
    var accountingDescription = document.getElementById('accounting_description1').value;
    if(accountingDescription !== "") {
  
      var accountingDescription = document.getElementById('accounting_description1').value;
      var inputStartDateElement = document.getElementById('accounting_start_date1');
      var valoreStartDataStringa = inputStartDateElement.value;
      var startData = new Date(valoreStartDataStringa);
      var startDataFormatted = startData.toISOString().split('T')[0];
  
      const db = firebase.firestore();
      const docRef = db.collection('companies').doc(globalThis.currentCompany.id).collection('projects').doc(globalThis.currentProject.id).collection('brands').doc(globalThis.currentBrand.id).collection('tasks').doc(globalThis.currentTask.id).collection('accountings').doc()
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
          getTaskAccountings(globalThis.currentTask);
          renderGraph();
          alert("Contabilizzazione aggiunta con successo");
        })
        .catch((error) => {
          alert("Errore durante l'aggiunta della contabilizzazione: ", error);
        });
      
  
  } else {
      alert("La descrizione della contabilizzazione è vuota");
  }
  }
  
  