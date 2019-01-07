const thirdChart = document.getElementById("donutChart").getContext('2d');
Chart.defaults.doughnut
let third = new Chart(thirdChart, {

    type: 'doughnut',

    data: {

        labels: ["Phone", "Desktop", "Tablet"],
        datasets: [{
            label: '# of Votes',
            data: [12, 3, 3],
            backgroundColor: [
                '#81c98f',
                '#74b1bf',
                '#7377bf'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false
                }
            }]
        },
    }
});