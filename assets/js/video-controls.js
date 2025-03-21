document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('video-player')
  const expandBtn = document.getElementById('expand-btn')
  const muteBtn = document.getElementById('mute-btn')
  const muteIcon = document.getElementById('mute-icon')

  // Pause video when clicked
  video.addEventListener('click', function () {
    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  })

  // Toggle mute/unmute
  muteBtn.addEventListener('click', function () {
    video.muted = !video.muted
    muteIcon.src = video.muted
      ? '/assets/icons/mute.svg'
      : '/assets/icons/loud.svg'
  })

  // Expand to fullscreen (Mobile Only)
  expandBtn.addEventListener('click', function () {
    if (video.requestFullscreen) {
      video.requestFullscreen()
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen() // Safari
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen() // IE
    }
  })

  // Show expand button only on small screens
  function checkScreenSize() {
    if (window.innerWidth <= 768) {
      expandBtn.classList.remove('hidden')
    } else {
      expandBtn.classList.add('hidden')
    }
  }

  window.addEventListener('resize', checkScreenSize)
  checkScreenSize() // Run on load
})
