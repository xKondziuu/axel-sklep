import type { MouseEventHandler } from "react"

export type validNavItems = 'Start' | 'Oferta sklepu' | 'Usługi serwisowe' | 'Kontakt' | 'Zdjęcia'

export type NavItemsList = {
  title: validNavItems
  url: string
}

export type NavItemProps = {
  title: string
  url: string
  selected?: boolean
  onClick: MouseEventHandler
}