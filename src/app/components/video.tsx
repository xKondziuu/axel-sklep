'use client'

import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

type VideoProps = {
  src: string
  fadein?: boolean
  autoplay?: boolean
  controls?: boolean
  loop?: boolean
  muted?: boolean
  playsinline?: boolean
  poster?: string
  preload?: 'auto' | 'metadata' | 'none'
}

export default function Video(props: VideoProps) {
  const source = String(props.src)!
  const isHls = source.slice(-5) === '.m3u8'
  const isFadeIn = props.fadein
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current! as HTMLVideoElement

    if (isHls) {
      if (Hls.isSupported()) {
        var hls = new Hls()
        hls.loadSource(source)
        hls.attachMedia(video)
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source
      }
    } else {
      video.src = source
    }
  })

  const FadeIn = () => {
    const video = videoRef.current! as HTMLVideoElement
    if (isFadeIn) {
      video.style.opacity = '1'
    }
  }

  return (
    <video
      className="bg-zinc-800 transition-opacity"
      ref={videoRef}
      autoPlay={props.autoplay}
      controls={props.controls}
      loop={props.loop}
      muted={props.muted}
      playsInline={props.playsinline}
      poster={props.poster}
      preload={props.preload}
      style={{ opacity: isFadeIn ? '0' : '1' }}
      onLoadedMetadata={FadeIn}
    />
  )
}
