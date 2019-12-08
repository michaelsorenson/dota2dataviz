function doMain() {
    renderPie();
    renderLine();
    renderBar();
    //renderWeb();
}

function renderPie() {
    Highcharts.chart('pieGraph', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'Game Mode Played'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.2f}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Game Mode Played',
            data: gametypeSeries
        }]
    });
}

function renderLine() {
    Highcharts.chart('lineGraph', {
        title: {
            text: 'Distribution of MMR in Dota 2'
        },

        yAxis: {
            title: {
                text: 'Percentage of Population'
            }
        },
        xAxis: {
                title: {
                    text: 'Matchmaking Rating'
            }
        },
        legend: {
            enabled: false
        },
        series: mmrData
    });
}

function renderBar() {
    Highcharts.chart('barGraph', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Hero Win Percentages'
        },
        xAxis: {
            categories: heroCats,
            title: {
                text: 'Hero'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Win Percentage',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' %'
        },
        plotOptions: {
            series: {
                pointPadding: 0.1,
                pointWidth: 10,
                groupPadding: 0.2
            }
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        series: heroData
    });
}
/*
function renderWeb() {
    Highcharts.chart('container', {
        chart: {
            polar: true,
            type: 'line'
        },
        title: {
            text: 'Average Stats vs MMR',
            x: -80
        },
        pane: {
            size: '80%'
        },
        xAxis: {
            categories: ['Last Hits per Minute', 'Gold per Minute', 'EXP per Minute'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
        },

        legend: {
            align: 'right',
            verticalAlign: 'middle'
        },

        series: mmrStatsData
        [{
            name: 'Allocated Budget',
            data: [43000, 19000, 60000, 35000, 17000, 10000],
            pointPlacement: 'on'
        }, {
            name: 'Actual Spending',
            data: [50000, 39000, 42000, 31000, 26000, 14000],
            pointPlacement: 'on'
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom'
                    },
                    pane: {
                        size: '70%'
                    }
                }
            }]
        }

    });
}*/

document.onload = doMain();