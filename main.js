function doMain() {
    renderPie();
    renderLine();
    renderBar();
    renderWeb();
}

function renderPie() {
    Highcharts.chart('pieGraph', {
        chart: {
            type: 'pie'
        },
        title: {
            text: '<b>Game Mode Played</b>',
            useHTML: true
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
            text: '<b>Distribution of MMR in Dota 2</b>',
            useHTML: true
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
            text: '<b>Hero Win Percentages of Heroes with >50% Winrate</b>',
            useHTML: true
        },
        xAxis: {
            categories: heroCats,
            title: {
                text: 'Hero'
            }
        },
        yAxis: {
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
                pointWidth: 15,
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

function renderWeb() {
    Highcharts.chart('webGraph', {
        chart: {
            polar: true,
            type: 'line'
        },
        title: {
            text: '<b>Average Stats vs MMR</b><br><br>Note: There are only 13 matches in the 6000-6499 category and 6 matches in the 6500-6599 category',
            useHTML: true
        },
        xAxis: {
            categories: ['Last Hits per Minute', 'Gold per Minute', 'EXP per Minute', 'Kills per Minute'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0
        },
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.1f}</b><br/>'
        },
        legend: {
            align: 'right',
            verticalAlign: 'middle',
            width: 200,
            itemWidth: 200
        },
        series: mmrStatsData,
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
}

document.onload = doMain();