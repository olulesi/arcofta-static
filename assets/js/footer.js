fetch('/pages/footer.html')
  .then((response) => response.text()) // Convert response to text
  .then((html) => {
    document.getElementById('footer-container').innerHTML = html
  })
  .catch((error) => console.error('Error loading the footer:', error))
