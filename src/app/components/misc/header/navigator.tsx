import type { NavItemsList, validNavItems, NavItemProps } from '@/app/types/navigator'
import { useState } from 'react'

// prettier-ignore
function NavItem(props: NavItemProps) {
  return (
    <a href={props.url} onClick={props.selected ? (e) => e.preventDefault() : props.onClick} className={`mx-0.5 block min-w-max p-1.5 transition-opacity ${props.selected ? 'cursor-default' : 'cursor-pointer hover:opacity-55'} lg:my-2 lg:py-1.5`}>
      <div className={`-mb-0.5 inline-block border-b-2 ${props.selected ? 'border-white' : 'border-transparent'} pb-0.5 transition-all`}>
        <span className="select-none truncate drop-shadow-md">{props.title}</span>
      </div>
    </a>
  )
}

export default function Navigator() {
  const [selectedNav, setSelectedNav] = useState('Start') // Początkowo zaznaczony element

  const navItems: NavItemsList[] = [
    { title: 'Start', url: '#start' },
    { title: 'Oferta sklepu', url: '#oferta' },
    { title: 'Usługi serwisowe', url: '#serwis' },
    { title: 'Kontakt', url: '#kontakt' },
    { title: 'Zdjęcia', url: '#galeria' }
  ]

  // Funkcja do zmiany zaznaczonego elementu
  const navSelect = (input: validNavItems) => {
    const foundItem = navItems.find((item) => item.title === input)
    if (foundItem) setSelectedNav(foundItem.title)
  }

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
