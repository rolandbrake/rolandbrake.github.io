document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  function updateTheme() {
    const hour = new Date().getHours();
    const isNight = hour >= 18 || hour < 6;
    body.classList.toggle("dark", isNight);
  }

  updateTheme(); // Initial check
  setInterval(updateTheme, 60000); // Re-check every 60 seconds
});
