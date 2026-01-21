(function(){
  // Ano no rodapé
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Efeito de digitação (bem leve)
  const el = document.getElementById("typing-text");
  if (!el) return;

  const full = el.textContent.trim();
  let i = full.length;

  // Se já veio preenchido, não apaga; só dá um "blink" sutil
  el.style.borderRight = "2px solid rgba(255,255,255,0.65)";
  setInterval(() => {
    el.style.borderRightColor = (el.style.borderRightColor === "transparent") ? "rgba(255,255,255,0.65)" : "transparent";
  }, 520);
})();
