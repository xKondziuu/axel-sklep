'use client'

import Image from 'next/image'
import { useScreen } from '@/app/hooks/useScreen'
import Video from './misc/video'

export default function Welcome() {
  const [ScreenWidth, ScreenHeight] = useScreen()

  return (
    <div id="welcome" className="h-[80vh] w-full lg:h-auto">
      <div className="size-full bg-zinc-800 *:absolute *:size-full *:h-[80vh] *:object-cover *:object-center lg:*:h-auto">
        {/* {ScreenWidth && ScreenHeight && (
          <Image src={'/images/example.jpg'} width={ScreenWidth} height={ScreenHeight} alt="" loading="eager" />
        )} */}
        <Video src="/videos/welcome/index.m3u8" autoplay fadein loop muted playsinline />
        <div className="bg-black bg-transparent opacity-10 backdrop-blur-[2px]"></div>
      </div>
    </div>
  )
}
