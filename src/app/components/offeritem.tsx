import type { PropsWithChildren } from 'react'
import type { titleType } from './titledarea'
import TitledArea from './titledarea'
import ResponsiveText from './responsivetext'

interface OfferItemProps {
  src: string
  title: titleType
}

export default function OfferItem(props: PropsWithChildren<OfferItemProps>) {
  return (
    <div className="overflow-hidden rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${props.src})` }}>
      <div className="flex size-full items-center justify-center rounded-xl bg-[#00000060] text-white backdrop-blur-[2px]">
        <TitledArea H={3} title={props.title} className="drop-shadow-sm">
          <ResponsiveText className="text-[1.15rem] tracking-normal xl:text-[1.07rem] lg:text-[1.07rem] xs:text-[0.95rem]">
            <ul className="list-none text-center drop-shadow-sm *:pb-1">{props.children}</ul>
          </ResponsiveText>
        </TitledArea>
      </div>
    </div>
  )
}
