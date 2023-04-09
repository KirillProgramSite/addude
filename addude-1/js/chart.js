let techChart = localStorage.getItem("techBall");
let gumanChart = localStorage.getItem("gumanBall");
let bisChart = localStorage.getItem("bisBall");


const ctx = document.getElementById('resTable');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Техническая направ.', 'Гуманитарная направ.', 'Бизнес направ.'],
      datasets: [{
        label: 'баллов',
        data: [techChart, gumanChart, bisChart],
        backgroundColor: [
            '#00FFAB',
            '#14C38E',
            '#B8F1B0',
          ],
      }]
    },
  });

  const ctxMob = document.getElementById('resTableMobile');

  new Chart(ctxMob, {
    type: 'doughnut',
    data: {
      labels: ['Техническая направ.', 'Гуманитарная направ.', 'Бизнес направ.'],
      datasets: [{
        label: 'баллов',
        data: [techChart, gumanChart, bisChart],
        backgroundColor: [
            '#00FFAB',
            '#14C38E',
            '#B8F1B0',
          ],
      }]
    },
  });