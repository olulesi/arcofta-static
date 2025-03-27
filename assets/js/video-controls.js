document.addEventListener('DOMContentLoaded', function () {
  const videoIds = ['BOURBON', 'COCAINE', 'Sahara']

  const videos = videoIds
    .map((id) => {
      const videoContainer = document.getElementById(`video-container-${id}`)
      if (!videoContainer) {
        console.error(`Video container for ${id} not found.`)
        return null
      }
      return videoContainer
    })
    .filter(Boolean)

  videos.forEach((videoContainer) => {
    console.log(`Setting up event listeners for video ID: ${videoContainer.id}`)

    const video = videoContainer.querySelector('video')
    const expandBtn = videoContainer.querySelector('.expand-btn')
    const muteBtn = videoContainer.querySelector('.mute-btn')
    const muteIcon = muteBtn ? muteBtn.querySelector('img') : null

    if (!video) {
      console.error(`Video not found inside ${videoContainer.id}`)
      return
    }
    if (!expandBtn)
      console.warn(`Expand button missing for ${videoContainer.id}`)
    if (!muteBtn) console.warn(`Mute button missing for ${videoContainer.id}`)
    if (!muteIcon) console.warn(`Mute icon missing for ${videoContainer.id}`)

    // Pause video when clicked
    video.addEventListener('click', function () {
      video.paused ? video.play() : video.pause()
    })

    // Toggle mute/unmute
    if (muteBtn) {
      muteBtn.addEventListener('click', function () {
        video.muted = !video.muted
        if (muteIcon) {
          muteIcon.src = video.muted
            ? '/assets/icons/mute.svg'
            : '/assets/icons/loud.svg'
        }
      })
    }

    // Expand to fullscreen (Mobile Only)
    if (expandBtn) {
      expandBtn.addEventListener('click', function () {
        if (video.requestFullscreen) {
          video.requestFullscreen()
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen()
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen()
        }
      })
    }
  })
})
