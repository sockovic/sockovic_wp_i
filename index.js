// Alert kada se index.html učita
document.addEventListener("DOMContentLoaded", function () {
    alert("Dobrodošli");
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  });