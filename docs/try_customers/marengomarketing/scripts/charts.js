var chart = null; 

function renderGraph() {
  var db = firebase.firestore();
  var chartSeries1 = [];
  var chartSectors1 = [];
  const uid = getCookieValue('uid');

  function convertTimeToMinutes(time) {
    var timeParts = time.split(':');
    var hours = parseInt(timeParts[0]);
    var minutes = parseInt(timeParts[1]);
    var totalMinutes = hours * 60 + minutes;
    return totalMinutes;
  }

  db.collection('companies').doc(globalThis.currentTask.company_id).collection('tasks').doc(globalThis.currentTask.id).collection('accountings').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var dedicatedTime = doc.data().dedicated_time;
      var description = doc.data().owner;

      var convertedTime = convertTimeToMinutes(dedicatedTime);

      if (!isNaN(convertedTime)) {
        chartSeries1.push(convertedTime);
        chartSectors1.push(description);
      }
    });

    if (chartSeries1.length === 0 && chartSectors1.length === 0) {
      chartSeries1.push(1);
      chartSectors1.push('Non sono presenti contabilizzazioni');
    }

    var options = {
      series: chartSeries1,
      labels: chartSectors1,
      chart: {
        type: 'donut',
      },
    };

    // Seleziona il nodo del grafico
    var chartNode = document.querySelector("#chart1");

    if (!chart) {
      // Se il grafico non esiste, crea un nuovo grafico
      chart = new ApexCharts(chartNode, options);
      chart.render();
    } else {
      // Se il grafico esiste già, aggiorna i dati
      chart.updateSeries(chartSeries1);
      chart.updateOptions(options);
    }

  }).catch((error) => {
    console.log("Errore nel recupero dei dati:", error);
  });
}
