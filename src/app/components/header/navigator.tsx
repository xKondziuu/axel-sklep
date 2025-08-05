import type { NavItemsList, validNavItems, NavItemProps } from '@/app/types/navigator'
import { useState, useEffect, useMemo } from 'react'

// pojedynczy element menu
function NavItem(props: NavItemProps) {
  return (
    <a
      href={props.url}
      onClick={props.selected ? (e) => e.preventDefault() : props.onClick}
      className={`mx-0.5 block min-w-max p-1.5 transition-opacity ${props.selected ? 'cursor-default' : 'cursor-pointer hover:opacity-55'} lg:my-2 lg:py-1.5`}
    >
      <div
        className={`-mb-0.5 inline-block border-b-2 ${props.selected ? 'border-white' : 'border-transparent'} pb-0.5 transition-all`}
      >
        <span className="select-none truncate drop-shadow-md">{props.title}</span>
      </div>
    </a>
  )
}

export default function Navigator() {
  const [selectedNav, setSelectedNav] = useState('Start')

  const navItems: NavItemsList[] = useMemo(
    () => [
      { title: 'Start', url: '#start' },
      { title: 'Oferta sklepu', url: '#oferta' },
      { title: 'Usługi serwisowe', url: '#serwis' },
      { title: 'Kontakt', url: '#kontakt' },
      { title: 'Zdjęcia', url: '#galeria' }
    ],
    []
  )

  // ręczna zmiana stanu
  const navSelect = (input: validNavItems) => {
    const foundItem = navItems.find((item) => item.title === input)
    if (foundItem) setSelectedNav(foundItem.title)
  }

  // automatyczna zmiana stanu
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.url.replace('#', ''))
    const sections = sectionIds.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    let timeout: NodeJS.Timeout // opóźnienie zmiany stanu
    const observer = new IntersectionObserver(
      (entries) => {
        clearTimeout(timeout)
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeout = setTimeout(() => {
              history.replaceState(null, '', entry.target.id == 'start' ? '/' : `#${entry.target.id}`)
              const matchedItem = navItems.find((item) => item.url === `#${entry.target.id}`)
              if (matchedItem) setSelectedNav(matchedItem.title)
            }, 200)
          }
        })
      },
      { threshold: 0.95 } // sekcja aktywna, gdy widać co najmniej 95% wysokości
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [navItems])

  return (
    <nav className="contents select-none font-opensans tracking-wide">
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          title={item.title}
          url={item.url}
          selected={item.title === selectedNav}
          onClick={() => navSelect(item.title)}
        />
      ))}
    </nav>
  )
}
