const CHART = document.getElementById('donutChart');

let donutChart = new Chart(CHART, {
    type: 'doughnut',
    data: {
        labels: ['Tablet', 'Phone', 'Desktop'],
        datasets: [
            {
                label: 'Phones',
                backgroundColor: [
                    '#81c98f',
                    '#74b1bf',
                    '#7377bf'],
                data: [40, 32, 144]
            }
        ]
    },
    options: {
            legend: {
                display: false
            }
    }

});