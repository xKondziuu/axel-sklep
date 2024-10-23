import type { PropsWithChildren } from 'react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Navigator from './header/navigator'

export default function Header() {
  function InfoItem(props: PropsWithChildren<{ icon: string }>) {
    return (
      <div className="flex flex-row flex-nowrap items-center justify-center gap-2 text-sm opacity-70 lg:text-[12px] lg:font-bold">
        <div className="translate-y-px select-none">
          <i className={props.icon} />
        </div>
        <div className="select-none text-nowrap font-opensans">
          <span className="cursor-text select-text tracking-wider drop-shadow-md">{props.children}</span>
        </div>
      </div>
    )
  }

  const [navExpanded, setNavExpanded] = useState<boolean>(false)

  const toggleNavExpanded = () => {
    if (navExpanded) {
      setNavExpanded(false)
    } else {
      setNavExpanded(true)
    }
  }

  const disableNavExpanded = () => {
    setNavExpanded(false)
  }

  useEffect(() => {
    document.addEventListener('scroll', () => {
      disableNavExpanded()
    })
    window.addEventListener('resize', () => {
      disableNavExpanded()
    })
  }, [])

  function NavButton() {
    return (
      <button className="flex h-full flex-row flex-nowrap items-center justify-center gap-2 px-3" onClick={toggleNavExpanded}>
        <div className="-mt-0.5 mr-7 font-opensans font-semibold" style={{ opacity: navExpanded ? '0.5' : '1' }}>
          <span className="select-none truncate text-xl">Menu</span>
        </div>
        <div className="text-3xl *:*:absolute *:*:-translate-x-full *:*:-translate-y-1/2">
          <div className="-translate-x-px" style={{ display: navExpanded ? 'none' : '' }}>
            <i className="fa-solid fa-bars" />
          </div>
          <div className="-translate-x-0.5" style={{ display: navExpanded ? '' : 'none' }}>
            <i className="fa-solid fa-xmark" />
          </div>
        </div>
      </button>
    )
  }

  const [scrollTop, setScrollTop] = useState<boolean>(true)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scroll = window.scrollY
      if (scroll <= 20) {
        setScrollTop(true)
      } else {
        setScrollTop(false)
      }
    })
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 z-10 h-[4.5rem] w-full min-w-[320px] items-center overflow-hidden bg-header text-white shadow-md backdrop-blur-sm transition-all lg:max-h-14 lg:overflow-visible lg:bg-headerlg`}
        style={{ backgroundColor: scrollTop ? '#343333E0' : '#343333E0' }}
      >
        <style>{`@media (max-width: 979px) {header {background-color: #343333F0!important;}} @media (max-width: 520px) {.semi-2sm {display: none!important;}}`}</style>
        <div className="flex h-full w-full flex-row flex-nowrap items-center justify-between">
          <div className="flex h-full min-w-max max-w-[75rem] flex-row flex-nowrap items-center overflow-hidden lg:w-full lg:justify-between +lg:gap-[2vw]">
            <div className="mr-1 flex h-14 min-w-max items-center justify-center pl-0 pr-1 *:h-auto *:w-[14.75rem] *:opacity-95 lg:*:w-[12rem]">
              <Image src="/images/logo_test.png" height="2048" width="6144" alt="" />
            </div>
            <div className="contents w-max lg:hidden">
              <Navigator />
            </div>
            <div className="contents 2xs:hidden +lg:hidden">
              <InfoItem icon="fa-solid fa-phone">
                <span className="sm:hidden">(+48) </span>71 342 94 43
              </InfoItem>
            </div>
            <div className="contents sm:hidden +lg:hidden">
              <InfoItem icon="fa-solid fa-envelope">axel@axel-sklep.com.pl</InfoItem>
            </div>
            <div className="contents +lg:hidden">
              <NavButton />
            </div>
          </div>
          <div className="contents xl:hidden">
            <InfoItem icon="fa-solid fa-phone">(+48) 71 342 94 43</InfoItem>
          </div>
          <div className="contents 2xl:hidden">
            <InfoItem icon="fa-solid fa-envelope">axel@axel-sklep.com.pl</InfoItem>
          </div>
          <div className="invisible w-px lg:hidden"></div>
        </div>
        <div
          className="flex flex-col flex-wrap items-center justify-center bg-headernav shadow-lg +md:max-h-[10.5rem] +sm:landscape:max-h-[10.5rem]"
          style={{ display: navExpanded ? '' : 'none' }}
        >
          <Navigator />
        </div>
      </header>
      <div
        className="absolute left-0 top-0 h-full w-full bg-transparent"
        style={{ display: navExpanded ? '' : 'none' }}
        onMouseDown={disableNavExpanded}
        onTouchStart={disableNavExpanded}
      ></div>
    </>
  )
}
