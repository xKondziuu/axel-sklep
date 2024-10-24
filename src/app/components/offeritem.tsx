import type { PropsWithChildren } from 'react'
import type { titleType } from './titledarea'
import { useState } from 'react'
import { H2 } from './responsiveheaders'
import TitledArea from './titledarea'
import ResponsiveText from './responsivetext'

interface OfferItemProps {
  src: string
  title: titleType
}

export default function OfferItem(props: PropsWithChildren<OfferItemProps>) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const handleClick = () => {
    setIsExpanded(isExpanded ? false : true)
  }

  return (
    <div
      className={`h-56 overflow-hidden rounded-xl bg-cover bg-center transition-[height] sm:h-auto`}
      style={{ /*backgroundImage: `url(${props.src})`*/ backgroundColor: '#222222' }}
    >
      <div className="flex size-full items-center justify-center rounded-xl bg-[#00000060] text-white *:*:drop-shadow-sm sm:justify-start sm:px-10 sm:py-4">
        <div className="contents sm:hidden">
          <TitledArea H={3} title={props.title}>
            <ResponsiveText className="text-[1.15rem] tracking-normal xl:text-[1.07rem] lg:text-[1.07rem] xs:text-[0.95rem]">
              <ul className="list-none text-center drop-shadow-sm *:pb-1">{props.children}</ul>
            </ResponsiveText>
          </TitledArea>
        </div>
        <div className="contents +sm:hidden">
          <div className="flex w-full flex-col">
            <div className="flex w-full translate-y-1/4 flex-row flex-nowrap items-center text-nowrap">
              <div className="w-full flex-grow">
                <H2>{props.title}</H2>
              </div>
              <button className="text-[2rem]" onClick={handleClick}>
                <i className="fa-solid fa-angle-down" />
              </button>
            </div>
            <div className={`${isExpanded ? 'h-40' : 'h-0 opacity-0'} w-full pt-5 transition-all`}>
              <ResponsiveText className="text-[1.15rem] tracking-normal xl:text-[1.07rem] lg:text-[1.07rem] xs:text-[0.95rem]">
                <ul className="list-none text-center drop-shadow-sm *:pb-1 sm:list-disc sm:pl-6 sm:text-left sm:*:pb-2">
                  {props.children}
                </ul>
              </ResponsiveText>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
