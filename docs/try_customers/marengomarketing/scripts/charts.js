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

  db.collection('companies').doc(globalThis.currentCompany.id).collection('projects').doc(globalThis.currentProject.id).collection('brands').doc(globalThis.currentBrand.id).collection('tasks').doc(globalThis.currentTask.id).collection('accountings').get().then((querySnapshot) => {
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





    
var options = {
  series: [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'series2',
  data: [11, 32, 45, 32, 34, 52, 41]
}],
  chart: {
  height: 350,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
};

var chart0 = new ApexCharts(document.querySelector("#chart2"), options);
chart0.render();



  
var options = {
  series: [{
  data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
}],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    borderRadius: 4,
    horizontal: true,
  }
},
dataLabels: {
  enabled: false
},
xaxis: {
  categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
    'United States', 'China', 'Germany'
  ],
}
};

var chart1 = new ApexCharts(document.querySelector("#chart3"), options);
chart1.render();


