document.addEventListener('DOMContentLoaded', function () {
  const videoContainer = document.getElementById('video-container')

  let isScrolling

  // Scroll snapping logic
  videoContainer.addEventListener('scroll', function () {
    window.clearTimeout(isScrolling)
    isScrolling = setTimeout(snapToNearestVideo, 100)
  })

  function snapToNearestVideo() {
    const videos = document.querySelectorAll('#video-container > div > div')
    let closestVideo = null
    let minDistance = Infinity

    videos.forEach((videoDiv) => {
      const rect = videoDiv.getBoundingClientRect()
      const distance = Math.abs(rect.top)

      if (distance < minDistance) {
        minDistance = distance
        closestVideo = videoDiv
      }
    })

    if (closestVideo) {
      closestVideo.scrollIntoView({ behavior: 'smooth' })
    }
  }
})
