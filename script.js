console.log("JavaScript file loaded");
// Select the dark mode toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  // Save the user's preference in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
}

// Add event listener to the toggle button
darkModeToggle.addEventListener('click', toggleDarkMode);

// Check for saved user preference and apply it
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
}
