// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    //  DOM elements
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");
    const themeToggle = document.querySelector(".theme-toggle");
    const body = document.body;
  
    //  generate a casual color
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    //  change color of the box
    changeColorBtn.addEventListener("click", () => {
      const newColor = getRandomColor();
      colorBox.style.backgroundColor = newColor;
      colorBox.textContent = newColor;
    });
  
  });