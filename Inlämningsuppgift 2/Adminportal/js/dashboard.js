(function ($) {
  'use strict';
  $(function () {

    fetch('http://inlupp-fa.azurewebsites.net/api/users?firstname=Ari&lastname=Vikla').then(res => res.text())
      .then(data => {
        $("#welcome-message").html(`Hi ${data}. Welcome back!`);
        $("#user-profile-name").html(data);
      })

    fetch('http://inlupp-fa.azurewebsites.net/api/messages').then(res => res.json())
      .then(data => {

        for (let item of data) {

          document.getElementById('messages').insertAdjacentHTML('beforeend', `
            <a class="dropdown-item preview-item">
              <div class="preview-thumbnail">
                <img src="https://via.placeholder.com/36x36" alt="image" class="profile-pic">
                </div>
                <div class="preview-item-content flex-grow">
                  <h6 class="preview-subject ellipsis font-weight-normal">${item.from}</h6>
                  <p class="font-weight-light small-text text-muted mb-0">
                  ${item.title}
                  </p>
                  </div>
                  </a>
                  `);
        }
      })

    fetch('http://inlupp-fa.azurewebsites.net/api/notifications').then(res => res.json())
      .then(data => {

        for (let item of data) {

          document.getElementById('notifications').insertAdjacentHTML('beforeend', `
            <a class="dropdown-item preview-item">
              <div class="preview-thumbnail">
                <div class="preview-icon bg-success">
                  <i class="mdi mdi-information mx-0"></i>
                </div>                
              </div>
              <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal">${item.title}</h6>
                  <p class="font-weight-light small-text mb-0 text-muted">
                  ${item.subtitle}
                  </p>
                  </div>
                  </a>
                  `);
        }
      })



    fetch('http://inlupp-fa.azurewebsites.net/api/total-sales-chart').then(res => res.json())
      .then(data => {

        document.getElementById('total-sales-chart-revenue').innerHTML = data.revenue;
        document.getElementById('total-sales-chart-returns').innerHTML = data.returns;
        document.getElementById('total-sales-chart-queries').innerHTML = data.queries;
        document.getElementById('total-sales-chart-invoices').innerHTML = data.invoices;


        if ($("#total-sales-chart").length) {
          var areaData = {
            labels: data.labels,
            datasets: [
              {
                data: data.datasets[0].data,
                backgroundColor: [
                  'rgba(61, 165, 244, .0)'
                ],
                borderColor: [
                  'rgb(61, 165, 244)'
                ],
                borderWidth: 2,
                fill: 'origin',
                label: "services"
              },
              {
                data: data.datasets[1].data,
                backgroundColor: [
                  'rgba(241, 83, 110, .0)'
                ],
                borderColor: [
                  'rgb(241, 83, 110)'
                ],
                borderWidth: 2,
                fill: 'origin',
                label: "services"
              }
            ]
          };
          var areaOptions = {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              filler: {
                propagate: false
              }
            },
            scales: {
              xAxes: [{
                display: true,
                ticks: {
                  display: true,
                  padding: 20,
                  fontColor: "#000",
                  fontSize: 14
                },
                gridLines: {
                  display: false,
                  drawBorder: false,
                  color: 'transparent',
                  zeroLineColor: '#eeeeee'
                }
              }],
              yAxes: [{
                display: true,
                ticks: {
                  display: true,
                  autoSkip: false,
                  maxRotation: 0,
                  stepSize: 100,
                  fontColor: "#000",
                  fontSize: 14,
                  padding: 18,
                  stepSize: 100000,
                  callback: function (value) {
                    var ranges = [
                      { divider: 1e6, suffix: 'M' },
                      { divider: 1e3, suffix: 'k' }
                    ];
                    function formatNumber(n) {
                      for (var i = 0; i < ranges.length; i++) {
                        if (n >= ranges[i].divider) {
                          return (n / ranges[i].divider).toString() + ranges[i].suffix;
                        }
                      }
                      return n;
                    }
                    return formatNumber(value);
                  }
                },
                gridLines: {
                  drawBorder: false
                }
              }]
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: true
            },
            elements: {
              line: {
                tension: .37
              },
              point: {
                radius: 0
              }
            }
          }
          var revenueChartCanvas = $("#total-sales-chart").get(0).getContext("2d");
          var revenueChart = new Chart(revenueChartCanvas, {
            type: 'line',
            data: areaData,
            options: areaOptions
          });
        }
      })

    fetch('http://inlupp-fa.azurewebsites.net/api/total-users').then(res => res.json())
      .then(data => {

        document.getElementById('total-users').innerHTML = `${data.users}`;
        document.getElementById('total-users-growth').innerHTML = `+${data.growth}%`;

        if ($("#users-chart").length) {
          var areaData = {
            labels: data.dataset.labels,
            datasets: [{
              data: data.dataset.data,
              backgroundColor: [
                '#e0fff4'
              ],
              borderWidth: 2,
              borderColor: "#00c689",
              fill: 'origin',
              label: "purchases"
            }
            ]
          };
          var areaOptions = {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              filler: {
                propagate: false
              }
            },
            scales: {
              xAxes: [{
                display: false,
                ticks: {
                  display: true
                },
                gridLines: {
                  display: false,
                  drawBorder: false,
                  color: 'transparent',
                  zeroLineColor: '#eeeeee'
                }
              }],
              yAxes: [{
                display: false,
                ticks: {
                  display: true,
                  autoSkip: false,
                  maxRotation: 0,
                  stepSize: 100,
                  min: 0,
                  max: 300
                },
                gridLines: {
                  drawBorder: false
                }
              }]
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: true
            },
            elements: {
              line: {
                tension: .35
              },
              point: {
                radius: 0
              }
            }
          }
          var salesChartCanvas = $("#users-chart").get(0).getContext("2d");
          var salesChart = new Chart(salesChartCanvas, {
            type: 'line',
            data: areaData,
            options: areaOptions
          });
        }

      })



    fetch('http://inlupp-fa.azurewebsites.net/api/total-projects').then(res => res.json())
      .then(data => {

        document.getElementById('total-projects').innerHTML = `${data.projects}%`;
        document.getElementById('total-projects-growth').innerHTML = `+${data.growth}%`;


        if ($("#projects-chart").length) {
          var areaData = {
            labels: data.dataset.labels,
            datasets: [{
              data: data.dataset.data,
              backgroundColor: [
                '#e5f2ff'
              ],
              borderWidth: 2,
              borderColor: "#3da5f4",
              fill: 'origin',
              label: "purchases"
            }
            ]
          };
          var areaOptions = {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              filler: {
                propagate: false
              }
            },
            scales: {
              xAxes: [{
                display: false,
                ticks: {
                  display: true
                },
                gridLines: {
                  display: false,
                  drawBorder: false,
                  color: 'transparent',
                  zeroLineColor: '#eeeeee'
                }
              }],
              yAxes: [{
                display: false,
                ticks: {
                  display: true,
                  autoSkip: false,
                  maxRotation: 0,
                  stepSize: 100,
                  min: 0,
                  max: 300
                },
                gridLines: {
                  drawBorder: false
                }
              }]
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: true
            },
            elements: {
              line: {
                tension: .05
              },
              point: {
                radius: 0
              }
            }
          }
          var salesChartCanvas = $("#projects-chart").get(0).getContext("2d");
          var salesChart = new Chart(salesChartCanvas, {
            type: 'line',
            data: areaData,
            options: areaOptions
          });
        }
      })

    fetch('http://inlupp-fa.azurewebsites.net/api/downloads').then(res => res.json())
      .then(data => {

        document.getElementById('downloads-offlineAmount').innerHTML = `${data.offlineAmount}`;


        if ($('#offlineProgress').length) {
          var bar = new ProgressBar.Circle(offlineProgress, {
            color: '#000',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 6,
            trailWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            text: {
              autoStyleContainer: true,
              style: {
                color: "#fff",
                position: 'absolute',
                left: '40%',
                top: '50%'
              }
            },
            svgStyle: {
              width: '90%'
            },
            from: {
              color: '#f1536e',
              width: 6
            },
            to: {
              color: '#f1536e',
              width: 6
            },
            // Set default step function for all animate calls
            step: function (state, circle) {
              circle.path.setAttribute('stroke', state.color);
              circle.path.setAttribute('stroke-width', state.width);

              var value = Math.round(circle.value() * 100);
              if (value === 0) {
                circle.setText('');
              } else {
                circle.setText(value);
              }

            }
          });

          bar.text.style.fontSize = '1rem';
          bar.animate(data[0].circleValue); // Number from 0.0 to 1.0
        }
      })

    fetch('http://inlupp-fa.azurewebsites.net/api/downloads').then(res => res.json())
      .then(data => {

        document.getElementById('downloads-onlineAmount').innerHTML = `${data.onlineAmount}`;

        if ($('#onlineProgress').length) {
          var bar = new ProgressBar.Circle(onlineProgress, {
            color: '#000',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 6,
            trailWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            text: {
              autoStyleContainer: true,
              style: {
                color: "#fff",
                position: 'absolute',
                left: '40%',
                top: '50%'
              }
            },
            svgStyle: {
              width: '90%'
            },
            from: {
              color: '#fda006',
              width: 6
            },
            to: {
              color: '#fda006',
              width: 6
            },
            // Set default step function for all animate calls
            step: function (state, circle) {
              circle.path.setAttribute('stroke', state.color);
              circle.path.setAttribute('stroke-width', state.width);

              var value = Math.round(circle.value() * 100);
              if (value === 0) {
                circle.setText('');
              } else {
                circle.setText(value);
              }

            }
          });

          bar.text.style.fontSize = '1rem';
          bar.animate(data[1].circleValue); // Number from 0.0 to 1.0
        }
      })

    fetch('http://inlupp-fa.azurewebsites.net/api/total-sales').then(res => res.json())
      .then(data => {

        document.getElementById('total-sales-amount').innerHTML = `$${data.amount}`;



        if ($("#total-sales").length) {
          var CurrentChartCanvas = $("#total-sales").get(0).getContext("2d");
          var CurrentChart = new Chart(CurrentChartCanvas, {
            type: 'bar',
            data: {
              labels: data.labels,
              datasets: [{
                label: data.datasets[0].labels,
                data: data.datasets[0].data,
                backgroundColor: data.datasets[0].backgroundColor
              },
              {
                label: data.datasets[1].labels,
                data: data.datasets[1].data,
                backgroundColor: data.datasets[1].backgroundColor
              }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: true,
              layout: {
                padding: {
                  left: 0,
                  right: 0,
                  top: 30,
                  bottom: -10
                }
              },
              scales: {
                yAxes: [{
                  display: false,
                  gridLines: {
                    drawBorder: false
                  },
                  ticks: {
                    display: false
                  }
                }],
                xAxes: [{
                  stacked: false,
                  categoryPercentage: 3,
                  barPercentage: .3,
                  ticks: {
                    beginAtZero: true,
                    fontColor: "#9fa0a2",
                    display: false
                  },
                  gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                    display: true
                  },
                }]
              },
              legend: {
                display: false
              },
              elements: {
                point: {
                  radius: 0
                }
              }
            }
          });
        }
      })

    fetch('http://inlupp-fa.azurewebsites.net/api/total-purchases').then(res => res.json())
      .then(data => {

        document.getElementById('total-purchases-amount').innerHTML = `$${data.amount}`;



        if ($("#total-purchases").length) {
          var CurrentChartCanvas = $("#total-purchases").get(0).getContext("2d");
          var CurrentChart = new Chart(CurrentChartCanvas, {
            type: 'bar',
            data: {
              labels: data.labels,
              datasets: [{
                label: data.datasets[0].labels,
                data: data.datasets[0].data,
                backgroundColor: data.datasets[0].backgroundColor
              },
              {
                label: data.datasets[1].labels,
                data: data.datasets[1].data,
                backgroundColor: data.datasets[1].backgroundColor
              }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: true,
              layout: {
                padding: {
                  left: 0,
                  right: 0,
                  top: 30,
                  bottom: -10
                }
              },
              scales: {
                yAxes: [{
                  display: false,
                  gridLines: {
                    drawBorder: false
                  },
                  ticks: {
                    display: false
                  }
                }],
                xAxes: [{
                  stacked: false,
                  categoryPercentage: 3,
                  barPercentage: .3,
                  ticks: {
                    beginAtZero: true,
                    fontColor: "#9fa0a2",
                    display: false
                  },
                  gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                    display: true
                  },
                }]
              },
              legend: {
                display: false
              },
              elements: {
                point: {
                  radius: 0
                }
              }
            }
          });
        }
      })

    fetch('http://inlupp-fa.azurewebsites.net/api/total-orders').then(res => res.json())
      .then(data => {

        document.getElementById('total-orders-amount').innerHTML = `$${data.amount}`;



        if ($("#total-orders").length) {
          var CurrentChartCanvas = $("#total-orders").get(0).getContext("2d");
          var CurrentChart = new Chart(CurrentChartCanvas, {
            type: 'bar',
            data: {
              labels: data.labels,
              datasets: [{
                label: data.datasets[0].labels,
                data: data.datasets[0].data,
                backgroundColor: data.datasets[0].backgroundColor
              },
              {
                label: data.datasets[1].labels,
                data: data.datasets[1].data,
                backgroundColor: data.datasets[1].backgroundColor
              }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: true,
              layout: {
                padding: {
                  left: 0,
                  right: 0,
                  top: 30,
                  bottom: -10
                }
              },
              scales: {
                yAxes: [{
                  display: false,
                  gridLines: {
                    drawBorder: false
                  },
                  ticks: {
                    display: false
                  }
                }],
                xAxes: [{
                  stacked: false,
                  categoryPercentage: 3,
                  barPercentage: .3,
                  ticks: {
                    beginAtZero: true,
                    fontColor: "#9fa0a2",
                    display: false
                  },
                  gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                    display: true
                  },
                }]
              },
              legend: {
                display: false
              },
              elements: {
                point: {
                  radius: 0
                }
              }
            }
          });
        }
      })

    fetch('http://inlupp-fa.azurewebsites.net/api/total-growth').then(res => res.json())
      .then(data => {

        document.getElementById('total-growth-amount').innerHTML = `$${data.amount}`;



        if ($("#total-growth").length) {
          var CurrentChartCanvas = $("#total-growth").get(0).getContext("2d");
          var CurrentChart = new Chart(CurrentChartCanvas, {
            type: 'bar',
            data: {
              labels: data.labels,
              datasets: [{
                label: data.datasets[0].labels,
                data: data.datasets[0].data,
                backgroundColor: data.datasets[0].backgroundColor
              },
              {
                label: data.datasets[1].labels,
                data: data.datasets[1].data,
                backgroundColor: data.datasets[1].backgroundColor
              }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: true,
              layout: {
                padding: {
                  left: 0,
                  right: 0,
                  top: 30,
                  bottom: -10
                }
              },
              scales: {
                yAxes: [{
                  display: false,
                  gridLines: {
                    drawBorder: false
                  },
                  ticks: {
                    display: false
                  }
                }],
                xAxes: [{
                  stacked: false,
                  categoryPercentage: 3,
                  barPercentage: .3,
                  ticks: {
                    beginAtZero: true,
                    fontColor: "#9fa0a2",
                    display: false
                  },
                  gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                    display: true
                  },
                }]
              },
              legend: {
                display: false
              },
              elements: {
                point: {
                  radius: 0
                }
              }
            }
          });
        }
      })


    fetch('http://inlupp-fa.azurewebsites.net/api/distribution').then(res => res.json())
      .then(data => {


        if ($("#distribution-chart").length) {
          var areaData = {
            labels: data.labels,
            datasets: [{
              data: data.data,
              backgroundColor: [
                "#3da5f4", "#f1536e", "#fda006"
              ],
              borderColor: "rgba(0,0,0,0)"
            }
            ]
          };
          var areaOptions = {
            responsive: true,
            maintainAspectRatio: true,
            segmentShowStroke: false,
            cutoutPercentage: 72,
            elements: {
              arc: {
                borderWidth: 4
              }
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: true
            },
            legendCallback: function (chart) {
              var text = [];
              text.push('<div class="distribution-chart">');
              text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[0] + '"></div>');
              text.push('<p>Texas</p>');
              text.push('</div>');
              text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[1] + '"></div>');
              text.push('<p>Utah</p>');
              text.push('</div>');
              text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[2] + '"></div>');
              text.push('<p>Georgia</p>');
              text.push('</div>');
              text.push('</div>');
              return text.join("");
            },
          }
          var distributionChartPlugins = {
            beforeDraw: function (chart) {
              var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;

              ctx.restore();
              var fontSize = .96;
              ctx.font = "600 " + fontSize + "em sans-serif";
              ctx.textBaseline = "middle";
              ctx.fillStyle = "#000";

              var text = "70%",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;

              ctx.fillText(text, textX, textY);
              ctx.save();
            }
          }
          var distributionChartCanvas = $("#distribution-chart").get(0).getContext("2d");
          var distributionChart = new Chart(distributionChartCanvas, {
            type: 'doughnut',
            data: areaData,
            options: areaOptions,
            plugins: distributionChartPlugins
          });
          document.getElementById('distribution-legend').innerHTML = distributionChart.generateLegend();
        }
      })


    fetch('http://inlupp-fa.azurewebsites.net/api/sales-report').then(res => res.json())
      .then(data => {

        document.getElementById('sales-report-downloads').innerHTML = data.downloads;
        document.getElementById('sales-report-purchases').innerHTML = data.purchases;
        document.getElementById('sales-report-users').innerHTML = data.users;
        document.getElementById('sales-report-growth').innerHTML = data.growth;


        if ($("#sale-report-chart").length) {
          var CurrentChartCanvas = $("#sale-report-chart").get(0).getContext("2d");
          var CurrentChart = new Chart(CurrentChartCanvas, {
            type: 'bar',
            data: {
              labels: data.labels,
              datasets: [{
                label: data.datasets[0].label,
                data: data.datasets[0].data,
                backgroundColor: data.datasets[0].backgroundColor
              }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: true,
              layout: {
                padding: {
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0
                }
              },
              scales: {
                yAxes: [{
                  display: true,
                  gridLines: {
                    drawBorder: false
                  },
                  ticks: {
                    fontColor: "#000",
                    display: true,
                    padding: 20,
                    fontSize: 14,
                    stepSize: 10000,
                    callback: function (value) {
                      var ranges = [
                        { divider: 1e6, suffix: 'M' },
                        { divider: 1e3, suffix: 'k' }
                      ];
                      function formatNumber(n) {
                        for (var i = 0; i < ranges.length; i++) {
                          if (n >= ranges[i].divider) {
                            return (n / ranges[i].divider).toString() + ranges[i].suffix;
                          }
                        }
                        return n;
                      }
                      return "$" + formatNumber(value);
                    }
                  }
                }],
                xAxes: [{
                  stacked: false,
                  categoryPercentage: .6,
                  ticks: {
                    beginAtZero: true,
                    fontColor: "#000",
                    display: true,
                    padding: 20,
                    fontSize: 14
                  },
                  gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                    display: true
                  },
                  barPercentage: .7
                }]
              },
              legend: {
                display: false
              },
              elements: {
                point: {
                  radius: 0
                }
              }
            }
          });
        }
      })

  });
})(jQuery);