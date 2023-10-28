document.getElementById("notifications_button").addEventListener("click", function () {
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "flex";
    document.getElementById("manage").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("enterprise_areas").style.display = "none";
});

document.getElementById("dash_button").addEventListener("click", function () {
    document.getElementById("dash").style.display = "flex";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("manage").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("enterprise_areas").style.display = "none";
});

document.getElementById("manage_button").addEventListener("click", function () {
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("manage").style.display = "flex";
    document.getElementById("enterprise_areas").style.display = "none";
});

document.getElementById("team_button").addEventListener("click", function () {
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("manage").style.display = "none";
    document.getElementById("team").style.display = "flex";
    document.getElementById("enterprise_areas").style.display = "none";
});

document.getElementById("enterprise_areas_button").addEventListener("click", function () {
    document.getElementById("dash").style.display = "none";
    document.getElementById("notifications").style.display = "none";
    document.getElementById("manage").style.display = "none";
    document.getElementById("team").style.display = "none";
    document.getElementById("enterprise_areas").style.display = "flex";
});



document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('chart1').getContext('2d');
    var lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre'],
            datasets: [{
                label: '',
                data: [12, 10, 3, 5, 2],
                fill: true,
                borderColor: 'rgba(255, 255, 255, 0.662)',
                borderWidth: 3,
                lineTension: 0.4,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false // Disabilita la legenda
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'white'
                    },

                    grid: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0)'
                    }
                },
                y: {
                    ticks: {
                        color: 'white'
                    },

                    grid: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0)'
                    }
                }
            }
        }
    });
});
