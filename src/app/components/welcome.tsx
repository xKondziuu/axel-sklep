'use client'

import Image from 'next/image'
import { useScreen } from '@/app/hooks/useScreen'
import Video from './video'

export default function Welcome() {
  const [ScreenWidth, ScreenHeight] = useScreen()

  return (
    <div className="size-full flex-grow overflow-hidden xl:landscape:flex-grow-0">
      <div className="size-full bg-zinc-800 *:size-full *:object-cover *:object-center">
        {/* {ScreenWidth && ScreenHeight && (
          <Image
            src={'https://placehold.co/1920x1080/222222/999999'}
            width={Number(ScreenWidth * 0.8)}
            height={ScreenHeight}
            alt=""
            loading="eager"
          />
        )} */}
        {/* <img src={'/images/example.jpg'} alt="" loading="eager" /> */}
        <Video src="/videos/welcome/index.m3u8" autoplay fadein loop muted playsinline />
        <div className="bg-black bg-transparent opacity-10 backdrop-blur-[2px]"></div>
      </div>
    </div>
  )
}
