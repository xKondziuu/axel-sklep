import type { DetailedHTMLProps, AnchorHTMLAttributes, PropsWithChildren } from 'react'

type UrlProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

export default function Url(props: PropsWithChildren<UrlProps>) {
  return (
    <div className="relative inline font-semibold text-[#4d4dff]">
      <a {...props} className="relative -m-2 inline-block p-2">
        {props.children}
      </a>
    </div>
  )
}
