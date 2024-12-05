// Function to sync slider with input field
function syncSliderInput(sliderId, inputId, co2Multiplier) {
  const slider = document.getElementById(sliderId);
  const input = document.getElementById(inputId);
  input.value = slider.value;
  calculateSavings(co2Multiplier);
}

// Function to sync input field with slider
function syncInputSlider(inputId, sliderId, co2Multiplier) {
  const input = document.getElementById(inputId);
  const slider = document.getElementById(sliderId);
  slider.value = input.value;
  calculateSavings(co2Multiplier);
}

// Function to calculate CO2 savings
function calculateSavings(co2Multiplier) {
  const modules = document.getElementById("modules").value;
  const area = document.getElementById("area").value;
  const co2Saved = modules * area * co2Multiplier;

  document.getElementById("co2-saved").textContent = co2Saved.toFixed(2);
  updateChart(co2Saved);
}

// Function to update CO2 savings chart
function updateChart(co2Saved) {
  const ctx = document.getElementById('co2-chart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Saved CO₂ (kg)', 'Remaining CO₂'],
      datasets: [{
        label: 'CO₂ Impact',
        data: [co2Saved, 15000 - co2Saved],
        backgroundColor: ['#A1C40F', '#e3e3e3']
      }]
    },
    options: { responsive: true }
  });
}

// Initialize with default values
calculateSavings(30);
