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
  
  
  
  