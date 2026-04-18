function sendMoney() {
  alert("Send money clicked 💸");
}

function requestMoney() {
  alert("Request money clicked 💰");
}

// Chart
const ctx = document.getElementById('chart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Income',
      data: [12, 19, 8, 15, 10],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true
  }
});