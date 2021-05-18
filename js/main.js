$(document).ready(function () {
  // Bar Chart
  let dataSet = [
    {
      label: 'AUTH',
      type: 'bar',
      borderColor: '#d0aa22',
      backgroundColor: '#d0aa22',
      data: [1.5, 1.5],
      fill: false,
    },
    {
      label: 'REFUND',
      type: 'bar',
      borderColor: '#f11178',
      backgroundColor: '#f11178',
      data: [4.8, 3],
      fill: false,
    },
    {
      label: 'SALE',
      type: 'bar',
      borderColor: '#1c81bd',
      backgroundColor: '#1c81bd',
      data: [2.8, 3.4],
      fill: false,
    },
  ];

  if (document.getElementById('barchart')) {
    new Chart(document.getElementById('barchart'), {
      data: {
        labels: ['DEBIT', 'CREDIT'],
        datasets: dataSet,
      },
      type: 'bar',
      options: {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 1,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              boxWidth: 12,
              padding: 20,
            },
          },
        },
      },
    });
  }

  // pieChart
  if (document.getElementById('pieChart')) {
    const pieChartData = {
      labels: ['MCARD', 'VISA', 'AMEX', 'JCB', 'CUP'],
      datasets: [
        {
          data: [40, 30, 10, 5, 15],
          backgroundColor: [
            'rgb(27 100 144)',
            'rgb(57 141 191)',
            'rgb(64 168 230)',
            'rgb(39 75 97)',
            'rgb(65 202 144)',
          ],
          hoverOffset: 4,
        },
      ],
    };

    const pieChartConfig = {
      type: 'pie',
      data: pieChartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'left',
            labels: {
              boxWidth: 12,
              padding: 20,
            },
          },
        },
        layout: {
          padding: {
            left: 5,
          },
        },
      },
    };

    var pieChart = new Chart(
      document.getElementById('pieChart'),
      pieChartConfig
    );
  }

  // Data table
  $('#myTable').DataTable({
    responsive: true,
    language: {
      paginate: {
        next: '<span class="glyphicon glyphicon-triangle-right"></span>', // or '→'
        previous: '<span class="glyphicon glyphicon-triangle-left"></span>', // or '←'
      },
    },
  });

  $('table.dataTable').css('font-size', '12px');
});
