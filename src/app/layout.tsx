import type { Metadata } from 'next'
import Script from 'next/script'
import { Roboto } from 'next/font/google'
import './globals.css'

/** Import czcionki z Google Fonts */
const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin']
})

/** Informacje dla wyszukiwarek */ // prettier-ignore
export const metadata: Metadata = {
  title: 'AXEL Electronics 1 | Wrocław',
  description: 'Sklep z częściami, elementami i podzespołami elektronicznymi, serwis RTV, regeneracja i naprawa głośników, przewody, akcesoria, układy scalone i więcej...',
  keywords: 'axel, dworcowa, wrocław, elektronika, sklep elektroniczny, części elektroniczne, sklep z elektroniką'
}

/** Komponent najwyższego poziomu */
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <Script src="/fa6pro/js/all.min.js" />
      <body className={roboto.className} dir="ltr">
        {children}
      </body>
    </html>
  )
}
