function calculateSavings() {
  const modules = document.getElementById("modules").value;
  const savings = modules * 30; // Assuming 1 module = 30kg CO₂ saved
  document.getElementById("result").innerText = `You saved ${savings}kg of CO₂!`;
}
function scrollToCalculator() {
  document.getElementById("calculator").scrollIntoView({ behavior: 'smooth' });
}
