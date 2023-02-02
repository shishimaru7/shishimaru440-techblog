$(function () {
  var ctx = $('#chart');
  console.log('ctx',ctx);
  var mychart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: [
        'Unity',
        'C#',
        'HTML',
        'CSS',
        'javaScript',
        'Laravel'
      ],
      datasets: [{
        label: '経験年数',
        data: [
          2, 2, 0.5, 0.5, 0.5, 0.5
        ],
        backgroundColor: 'rgba(241, 107, 141, 0.5)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 1,
        pointBackgroundColor: 'rgb(46,106,177)',
      }],
    },
    options: {
      title: {
        display: true,
        text: 'MySkILLs',
      },
      scale: {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 2,
          stepSize: 1,
          callback: function (value, index, values) {
            return value + '年間'
          }
        },
      }
    }
  });
  console.log('mychart',mychart);
});