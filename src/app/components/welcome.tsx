'use client'

import Image from 'next/image'
import { useScreen } from '@/app/hooks/useScreen'
import Video from './misc/video'

export default function Welcome() {
  const [ScreenWidth, ScreenHeight] = useScreen()

  return (
    <div id="start" className="w-full flex-grow overflow-hidden +xl:min-h-[32rem] xl:landscape:flex-grow-0">
      <div className="size-full bg-zinc-800 *:size-full *:object-cover *:object-center">
        {ScreenWidth && ScreenHeight && (
          <Image src={'/images/example.jpg'} width={Number(ScreenWidth * 0.8)} height={ScreenHeight} alt="" loading="eager" />
        )}
        {/* <img src={'/images/example.jpg'} alt="" loading="eager" /> */}
        {/* <Video src="/videos/welcome/index.m3u8" autoplay fadein loop muted playsinline /> */}
        <div className="bg-black bg-transparent opacity-10 backdrop-blur-[2px]"></div>
      </div>
    </div>
  )
}
