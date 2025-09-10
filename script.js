document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const options = document.querySelectorAll(".option");
  const progBar = document.getElementById("progBar");
  const scoreText = document.getElementById("scoreText");
  const restartBtn = document.getElementById("restart");

  let currentPage = 0;
  let score = 0;

  function showPage(n) {
    pages.forEach(p => p.classList.remove("active"));
    if (n < pages.length) {
      pages[n].classList.add("active");
    }
    progBar.style.width = `${(n / (pages.length - 1)) * 100}%`;
  }

  options.forEach(btn => {
    btn.addEventListener("click", () => {
      const feedback = btn.parentElement.nextElementSibling;
      const isCorrect = btn.dataset.correct === "true";

      if (isCorrect) {
        feedback.textContent = "✅ Correcto 🎉. Recuerda: velocidad = distancia / tiempo, Ec = ½ m v², I = V / R según corresponda.";
        feedback.style.color = "green";
        score++;
      } else {
        feedback.textContent = "❌ Incorrecto. Vuelve a repasar la fórmula y analiza la relación entre las variables.";
        feedback.style.color = "red";
      }

      setTimeout(() => {
        currentPage++;
        if (currentPage < pages.length - 1) {
          showPage(currentPage);
        } else {
          scoreText.textContent = `Tu puntuación: ${score} de ${pages.length - 1}`;
          showPage(pages.length - 1);
        }
      }, 1200);
    });
  });

  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      score = 0;
      currentPage = 0;
      showPage(currentPage);
    });
  }

  showPage(currentPage);
});
