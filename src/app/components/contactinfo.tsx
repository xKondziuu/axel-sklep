import type { PropsWithChildren, ReactNode } from 'react'
import ResponsiveText from './responsivetext'
import { H4 } from './responsiveheaders'

interface ContactInfoProps {
  title: string
  icon: string
}

export default function ContactInfo(props: PropsWithChildren<ContactInfoProps>) {
  return (
    <div className="mb-16 flex flex-col">
      <ResponsiveText className="text-[0.95rem] tracking-normal opacity-80 xl:text-[0.87rem] lg:text-[0.87rem] xs:text-[0.75rem]">
        {props.title}
      </ResponsiveText>
      <div className="flex flex-row flex-nowrap">
        <div className="mr-4 w-6 text-center opacity-75">
          <H4>
            <i className={props.icon} />
          </H4>
        </div>
        <div className="flex h-full items-center font-verdana">
          <ResponsiveText className="text-[1.15rem] tracking-normal xl:text-[1.07rem] lg:text-[1.07rem] xs:text-[0.95rem]">
            {props.children as Exclude<ReactNode, boolean>}
          </ResponsiveText>
        </div>
      </div>
    </div>
  )
}
