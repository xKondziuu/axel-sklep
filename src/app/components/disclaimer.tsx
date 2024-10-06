import type { PropsWithChildren } from 'react'
import ResponsiveText from './responsivetext'

export default function Disclaimer(props: PropsWithChildren) {
  // prettier-ignore
  return (
    <div className="flex w-full justify-center leading-tight lg:px-3">
      <ResponsiveText className="text-[0.90rem] italic tracking-normal xl:text-[0.82rem] lg:text-[0.82rem] xs:text-[0.70rem] drop-shadow-sm"align="center">
        {props.children as string}
      </ResponsiveText>
    </div>
  )
}
