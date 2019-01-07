// Javascript File

const secondChart = document.getElementById('barChart').getContext('2d');

Chart.defaults.global.animation.easeing = 'easeInQuint'
Chart.defaults.global.animation.duration = 2500

let bar = new Chart(secondChart, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["S", "M", "T", "W", "Th", "F", "S"],
        datasets: [
            {
            label: 'Traffic',
            backgroundColor: 'rgb(116, 119, 191)',
            data: [750, 1250, 1000, 1500, 250, 500, 300]
        }
        ]
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
        title: {
            display: false,
            text: 'sucks to suk dude'
        }
    }
});