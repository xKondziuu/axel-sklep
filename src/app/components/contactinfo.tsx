import type { PropsWithChildren, ReactNode } from 'react'
import ResponsiveText from './responsivetext'
import { H4 } from './responsiveheaders'

interface ContactInfoProps {
  title: string
  icon: string
}

export default function ContactInfo(props: PropsWithChildren<ContactInfoProps>) {
  return (
    <div className="mb-12 flex h-24 flex-col xl:mb-8 lg:h-24 sm:mb-0.5 2xs:mb-3 2xs:h-auto">
      <ResponsiveText className="text-nowrap text-[0.95rem] tracking-normal opacity-80 xl:text-[0.87rem] md:text-[0.87rem] sm:text-[0.75rem] xs:text-[0.65rem] 2xs:text-[0.7rem]">
        {props.title}
      </ResponsiveText>
      <div className="flex flex-row flex-nowrap">
        <div className="mr-4 w-6 text-center opacity-75 sm:mr-1.5 xs:mr-0.5">
          <H4>
            <i className={props.icon} />
          </H4>
        </div>
        <div className="flex h-full items-center font-verdana">
          <ResponsiveText className="text-nowrap text-[1.15rem] tracking-normal xl:text-[1.07rem] md:text-[1.07rem] sm:text-[0.95rem] xs:text-[0.85rem] 2xs:text-[0.9rem]">
            {props.children as Exclude<ReactNode, boolean>}
          </ResponsiveText>
        </div>
      </div>
    </div>
  )
}
