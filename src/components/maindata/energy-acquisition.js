// ===========================|| DASHBOARD - TOTAL GROWTH BAR CHART ||=========================== //

const chartData = {
    height: 300,
    type: 'line',
    options: {
        stroke: {
            curve: 'smooth'
        },
        chart: {
            id: 'line-chart',
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [
            {
                breakpoint: 300,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%'
            }
        },
        xaxis: {
            type: 'category',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        legend: {
            show: true,
            fontSize: '14px',
            fontFamily: `'Roboto', sans-serif`,
            position: 'bottom',
            offsetX: 20,
            labels: {
                useSeriesColors: false
            },
            markers: {
                width: 16,
                height: 16,
                radius: 5
            },
            itemMargin: {
                horizontal: 15,
                vertical: 8
            }
        },
        fill: {
            type: 'solid'
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: true
        }
    },
    seriesDay: [
        {
            name: 'Investment',
            data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75]
        },
        {
            name: 'Loss',
            data: [35, 15, 90, 35, 10, 40, 80, 25, 15, 85, 25, 30]
        },
        {
            name: 'Profit',
            data: [35, 145, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10]
        },
        {
            name: 'Maintenance',
            data: [0, 0, 75, 0, 0, 115, 0, 0, 0, 0, 150, 0]
        }
    ],
    seriesMonth: [
        {
            name: 'Investment',
            data: [25, 125, 35, 35, 35, 80, 35, 20, 35, 35, 15, 75]
        },
        {
            name: 'Loss',
            data: [35, 15, 15, 35, 65, 40, 80, 25, 15, 25, 25, 75]
        },
        {
            name: 'Profit',
            data: [34, 145, 35, 35, 20, 105, 100, 10, 85, 45, 30, 10]
        },
        {
            name: 'Maintenance',
            data: [12, 0, 75, 0, 0, 115, 0, 165, 65, 9, 150, 0]
        }
    ],
    seriesYear: [
        {
            name: 'Investment',
            data: [45, 125, 35, 65, 45, 132, 35, 20, 35, 4, 15, 90]
        },
        {
            name: 'Loss',
            data: [35, 15, 15, 35, 65, 98, 80, 188, 65, 85, 25, 75]
        },
        {
            name: 'Profit',
            data: [35, 145, 35, 35, 132, 105, 100, 10, 65, 45, 30, 10]
        },
        {
            name: 'Maintenance',
            data: [125, 89, 75, 32, 1, 151, 74, 83, 12, 240, 150, 6]
        }
    ]
};
export default chartData;
