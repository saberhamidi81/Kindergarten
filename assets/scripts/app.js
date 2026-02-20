document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!toggleBtn || !mobileMenu) return;


  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    mobileMenu.classList.toggle("hidden");
  });


  document.addEventListener("click", (e) => {
    const clickedInsideMenu = mobileMenu.contains(e.target);
    const clickedOnButton = toggleBtn.contains(e.target);

    if (!clickedInsideMenu && !clickedOnButton) {
      mobileMenu.classList.add("hidden");
    }
  });


  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
});

// gollery
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".gallery-tab");
  const panels = document.querySelectorAll(".gallery-panel");

  function activateTab(target) {
   
    tabButtons.forEach((btn) => {
      const isActive = btn.dataset.target === target;
      btn.classList.toggle("text-green-600", isActive);
      btn.classList.toggle("border-b-2", isActive);
      btn.classList.toggle("border-green-600", isActive);
      btn.classList.toggle("text-gray-500", !isActive);
    });

  
    panels.forEach((panel) => {
      panel.classList.toggle("hidden", panel.dataset.panel !== target);
    });
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      activateTab(btn.dataset.target);
    });
  });

  activateTab("yard");
});