const firstChart = document.getElementById('lineChart').getContext('2d');

Chart.defaults.global.animation.easeing = 'easeInQuint'
Chart.defaults.global.animation.duration = 2500

let line = new Chart(firstChart, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {

        labels: ["16-22", "23-29", "30-5", "6-12", "13-19"],
        datasets: [{
            lineTension: 0.15,
            label: 'Traffic',
            backgroundColor: 'rgba(116, 119, 191, .2)',
            borderColor: 'rgb(116, 119, 191)',
            data: [750, 1250, 1000, 1500, 2000],
            borderWidth: 3,
            pointHoverRadius: 10,
            pointRadius: 5,
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false,
        },
        animation: {

        }
    }
});