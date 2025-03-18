fetch('/pages/footer.html')
  .then((response) => response.text()) // Convert response to text
  .then((html) => {
    document.getElementById('footer-container').innerHTML = html

    // Apply conditional logic for footer text
    const footerText = document.getElementById('footer-text')
    const currentPage = window.location.pathname

    if (
      currentPage.includes('archives.html') ||
      currentPage.includes('about.html')
    ) {
      footerText.textContent = 'ARCOFTA'
    } else {
      footerText.innerHTML = 'ARC 1 <br> "FROM THE GROUND UP"'
      footerText.style.textTransform = 'uppercase' // Make text uppercase
      footerText.style.textAlign = 'center' // Center align text
    }
  })
  .catch((error) => console.error('Error loading the footer:', error))
