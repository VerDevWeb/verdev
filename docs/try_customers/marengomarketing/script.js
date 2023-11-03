document.getElementById("notifications_button").addEventListener("click", function () {
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "flex";
    document.getElementById("manage").style.display = "none";
    document.getElementById("team").style.display = "none";
});

document.getElementById("dash_button").addEventListener("click", function () {
    document.getElementById("dash").style.display = "flex";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("manage").style.display = "none";
    document.getElementById("team").style.display = "none";
});

document.getElementById("manage_button").addEventListener("click", function () {
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("manage").style.display = "flex";
});

document.getElementById("team_button").addEventListener("click", function () {
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("manage").style.display = "none";
    document.getElementById("team").style.display = "flex";
});


document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("light-theme");
});


function toggleTheme() {
    var body = document.body;
    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
    } else if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
    }
}





document.addEventListener("DOMContentLoaded", function () {
 // Dati per il grafico (esempio)
 const options = {
    series: [{
        name: 'Series 1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }],
    chart: {
        height: 350,
        type: 'line',
    },
    xaxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    }
};

// Inizializzazione del grafico utilizzando ApexCharts
const chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();
    
});



function notifications_function(){
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("manage").style.display = "none";
    document.getElementById("team").style.display = "flex";
    document.getElementById("account_settings").style.display = "none";
}

function dash_function(){
    document.getElementById("dash").style.display = "flex";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("manage").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("account_settings").style.display = "none";
}


function account_button(){
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("manage").style.display = "none";
    document.getElementById("account_settings").style.display = "flex";
}

function manage_function(){
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("manage").style.display = "flex";
    document.getElementById("account_settings").style.display = "none";
}