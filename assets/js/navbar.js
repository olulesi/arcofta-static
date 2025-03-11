// Fetch the navbar.html file and insert it into the navbar-container div
fetch('../pages/navbar.html')
  .then((response) => response.text()) // Convert response to text
  .then((html) => {
    document.getElementById('navbar-container').innerHTML = html
  })
  .catch((error) => console.error('Error loading the navbar:', error))
