document.addEventListener('DOMContentLoaded', function () {
    // Wrap the code in the DOMContentLoaded event to ensure the DOM is ready
  
    // Get the grid container element
    const gridContainer = document.querySelector('.grid-container');
  
    if (!gridContainer) {
      console.error("Grid container not found.");
      return; // Exit the function to avoid further errors
    }
  
    // Create the default 16x16 grid items
    createGrid(16);
  
    // Get the "Reset Grid" button element
    const resetButton = document.getElementById('reset-button');
  
    // Add click event listener to the button
    resetButton.addEventListener('click', resetGrid);
  
    // Function to create the grid
    function createGrid(squaresPerSide) {
      // Clear the existing grid
      gridContainer.innerHTML = '';
  
      // Calculate the grid item size based on the number of squares per side and gap
      const gridItemSize = (960 - (squaresPerSide - 1) * 2) / squaresPerSide;
      
      // Limit the number of squares per side to a maximum of 100
      const gridSize = Math.min(squaresPerSide, 100);
  
      // Set the grid template columns and rows
      gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, ${gridItemSize}px)`;
      gridContainer.style.gridTemplateRows = `repeat(${gridSize}, ${gridItemSize}px)`;
  
      // Create the grid items
      for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
      }
  
      // Attach hover effect to the new grid items
      const gridItems = document.querySelectorAll('.grid-item');
      gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', handleHoverEffect);
        gridItem.addEventListener('mouseleave', resetBackground);
      });
    }
  
    // Function to handle the hover effect
    function handleHoverEffect(event) {
      const gridItem = event.target;
      gridItem.style.backgroundColor = '#333';
    }
  
    // Function to reset the grid item's background color when the mouse leaves
    function resetBackground(event) {
      const gridItem = event.target;
      gridItem.style.backgroundColor = '#f0f0f0';
    }
  
    // Function to reset the grid based on user input
    function resetGrid() {
      let squaresPerSide = prompt('Enter the number of squares per side (maximum 100):');
      
      // Convert the user input to a number and check if it's a valid number
      squaresPerSide = parseInt(squaresPerSide);
      if (isNaN(squaresPerSide) || squaresPerSide <= 0) {
        alert('Invalid input. Please enter a valid number.');
        return;
      }
  
      // Call the createGrid function with the user input
      createGrid(squaresPerSide);
    }
  });
  
  
  