'use client'

import { useState } from 'react'

export default function Header() {
  function Logo() {
    return (
      <span
        className="cursor-default select-none truncate font-fredoka text-3xl font-semibold drop-shadow-lg"
        style={{ color: '#13a49d' }}
      >
        AXEL Electronics
      </span>
    )
  }

  function PhoneTime() {
    return (
      <div className="flex flex-row flex-nowrap items-center justify-center gap-2 opacity-75">
        <div className="translate-y-px select-none">
          <i className="fa-solid fa-phone" />
        </div>
        <div className="select-none text-nowrap font-opensans">
          <span className="cursor-default tracking-wider">9:00 - 17:00</span>
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
        className="mx-1.5 block min-w-max px-1.5 lg:my-2 lg:py-1.5"
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

  document.addEventListener('scroll', () => {
    disableNavExpanded()
  })

  // window.addEventListener('resize', () => {
  //   disableNavExpanded()
  // })

  function NavButton() {
    return (
      <button className="flex h-full flex-row flex-nowrap items-center justify-center gap-2 px-3" onClick={toggleNavExpanded}>
        <div className="xs:hidden -mt-0.5 mr-7 font-opensans font-semibold" style={{ opacity: navExpanded ? '0.5' : '1' }}>
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

  return (
    <>
      <header className="fixed top-0 z-10 h-14 w-full min-w-[320px] items-center overflow-hidden bg-header text-white shadow-md lg:overflow-visible">
        <div className="flex w-full flex-row flex-nowrap items-center justify-between">
          <div className="flex h-full w-full min-w-max max-w-[75rem] flex-row flex-nowrap items-center justify-between">
            <div className="mx-3 flex h-14 min-w-max items-center justify-center px-1.5 pl-0">
              <Logo />
            </div>
            <div className="contents w-max lg:hidden">
              <Navigator />
            </div>
            <div className="+lg:hidden contents sm:hidden">
              <PhoneTime />
            </div>
            <div className="+lg:hidden contents">
              <NavButton />
            </div>
          </div>
          <div className="contents 2xl:hidden">
            <PhoneTime />
          </div>
          <div className="invisible w-px lg:hidden"></div>
        </div>
        <div
          className="bg-headernav +sm:landscape:max-h-[10.5rem] +md:max-h-[10.5rem] flex flex-col flex-wrap items-center justify-center shadow-lg transition-opacity"
          style={{ opacity: navExpanded ? '1' : '0' }}
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
