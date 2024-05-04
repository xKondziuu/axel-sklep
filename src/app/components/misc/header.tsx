'use client'

import { useEffect, useState } from 'react'

export default function Header() {
  function PhoneTime() {
    return (
      <div className="flex flex-row flex-nowrap items-center justify-center gap-2 opacity-75">
        <div className="translate-y-px select-none">
          <i className="fa-solid fa-phone" />
        </div>
        <div className="select-none text-nowrap font-opensans">
          <span className="cursor-default tracking-wider drop-shadow-md">9:00 - 17:00</span>
        </div>
      </div>
    )
  }

  type NavItemProps = {
    title: string
    url: string
    selected?: boolean
  }

  function NavItem(props: NavItemProps) {
    return (
      <a
        href={props.url}
        className="mx-0.5 block min-w-max p-1.5 lg:my-2 lg:py-1.5"
        style={{ cursor: props.selected ? 'default' : 'pointer' }}
      >
        <div
          className="-mb-0.5 inline-block border-b-2 pb-0.5 transition-all"
          style={{ borderColor: props.selected ? 'white' : 'transparent' }}
        >
          <span className="select-none truncate drop-shadow-md">{props.title}</span>
        </div>
      </a>
    )
  }

  function Navigator() {
    return (
      <nav className="contents select-none font-opensans tracking-wide">
        <NavItem title="Informacje" url="" selected />
        <NavItem title="Oferta sklepu" url="" />
        <NavItem title="Usługi serwisowe" url="" />
        <NavItem title="Zamówienia" url="" />
        <NavItem title="Doradztwo" url="" />
        <NavItem title="Galeria zdjęć" url="" />
      </nav>
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
        <div className="-mt-0.5 mr-7 font-opensans font-semibold xs:hidden" style={{ opacity: navExpanded ? '0.5' : '1' }}>
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

  function Logo() {
    return (
      <span
        className="cursor-default select-none truncate font-fredoka text-4xl font-semibold drop-shadow-lg transition-all lg:text-3xl"
        style={{ color: '#13a49d' /* fontSize: scrollTop ? '3rem' : '1.875rem' */ }}
      >
        AXEL Electronics
      </span>
    )
  }

  return (
    <>
      <header
        className="fixed top-0 z-10 h-16 w-full min-w-[320px] items-center overflow-hidden bg-header text-white shadow-md backdrop-blur-md transition-all lg:max-h-14 lg:overflow-visible lg:bg-headerlg"
        style={{ backgroundColor: scrollTop ? '#343333A0' : '#343333E0' }}
      >
        <style>{`@media (max-width: 1023px) {header {background-color: #343333F0!important;}}`}</style>
        <div className="flex h-full w-full flex-row flex-nowrap items-center justify-between">
          <div className="flex h-full w-full min-w-max max-w-[75rem] flex-row flex-nowrap items-center justify-between">
            <div className="mx-3 flex h-14 min-w-max items-center justify-center pl-0 pr-1">
              <Logo />
            </div>
            <div className="contents w-max lg:hidden">
              <Navigator />
            </div>
            <div className="contents sm:hidden +lg:hidden">
              <PhoneTime />
            </div>
            <div className="contents +lg:hidden">
              <NavButton />
            </div>
          </div>
          <div className="contents 2xl:hidden">
            <PhoneTime />
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
