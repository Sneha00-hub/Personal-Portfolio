console.log("Script running....");

document.addEventListener("DOMContentLoaded", function() {
  var sidebarElement = document.querySelector('.sidebar');
  var crossbarElement = document.querySelector('.crossbarline');

  crossbarElement.addEventListener("click", () => {
    sidebarElement.classList.toggle('sidebarGo');
  });

  function handleSidebarVisibility() {
    sidebarElement.classList.toggle('sidebarGo', window.innerWidth > 768);
  }

  handleSidebarVisibility();
  window.addEventListener('resize', handleSidebarVisibility);
});

