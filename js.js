const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle menu mobile
toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Adiciona funcionalidade aos nav-links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Pega o dropdown do link clicado
    const dropdownMenu = link.parentElement.querySelector(".dropdown-menu");
    
    if (dropdownMenu) {
      // Se já está visível, esconde. Se não está, mostra
      dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    }
  });
});


