function submitToGoogleSheet1() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwwm-gSWiJDsZy_CYiNBGC-Wo0WGMMeQ08h5JbGUetS1Wu0H8rIOk-KSTahkTUEeBK6/exec';
    const form = document.getElementById('add_task_form');
    const name = document.getElementById('name_task_input').value;
    const description = document.getElementById('description_task_input').value;
    const company = document.getElementById('company_task_input').value;
    const brand = document.getElementById('brand_task_input').value;
    const project = document.getElementById('project_task_input').value;
    const owner = document.getElementById('owner_task_input').value;

    var inputStartDateElement = document.getElementById('end_task_date_input');
    var valoreStartDataStringa = inputStartDateElement.value;
    var startData = new Date(valoreStartDataStringa);
    var startDataFormatted = startData.toISOString().split('T')[0];

    var inputEndDateElement = document.getElementById('start_task_date_input');
    var valoreEndDataStringa = inputEndDateElement.value;
    var endData = new Date(valoreEndDataStringa);
    var endDataFormatted = endData.toISOString().split('T')[0];


    fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description, brand, company, project, owner, startDataFormatted, endDataFormatted}),
    })
    .then(response => {
      console.log('Dati inviati con successo!', response);
      // Puoi fare altre azioni qui dopo l'invio dei dati
    })
    .catch(error => console.error('Errore durante l\'invio dei dati:', error));
  }

  