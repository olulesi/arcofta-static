document.addEventListener('DOMContentLoaded', function () {
  const videoContainer = document.getElementById('video-container')
  const videos = document.querySelectorAll('.video-player video')

  let isScrolling

  // Scroll snapping logic
  videoContainer.addEventListener('scroll', function () {
    window.clearTimeout(isScrolling)
    isScrolling = setTimeout(snapToNearestVideo, 100)
  })

  function snapToNearestVideo() {
    let closestVideo = null
    let minDistance = Infinity

    videos.forEach((video) => {
      const rect = video.getBoundingClientRect()
      const distance = Math.abs(rect.top)

      if (distance < minDistance) {
        minDistance = distance
        closestVideo = video
      }
    })

    // Pause all videos except the closest one
    videos.forEach((vid) => {
      if (vid !== closestVideo) {
        vid.pause()
      }
    })

    // Scroll to closest video
    if (closestVideo) {
      closestVideo.parentElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
})
