document.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('.video-player')

  videos.forEach((videoContainer) => {
    const video = videoContainer.querySelector('video')
    const expandBtn = videoContainer.querySelector('.expand-btn')
    const muteBtn = videoContainer.querySelector('.mute-btn')
    const muteIcon = muteBtn.querySelector('img')

    // Pause video when clicked
    video.addEventListener('click', function () {
      video.paused ? video.play() : video.pause()
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
        video.webkitRequestFullscreen()
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen()
      }
    })
  })
})
