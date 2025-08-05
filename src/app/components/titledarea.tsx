import type { PropsWithChildren, ReactNode } from 'react'
import type { HeadersNumbers } from './responsiveheaders'
import { Headers as RH } from './responsiveheaders'

export type titleType = Exclude<ReactNode, boolean | undefined>

interface TitledAreaProps {
  title: titleType
  H?: HeadersNumbers
  className?: string
  id?: string
}

export default function TitledArea(props: PropsWithChildren<TitledAreaProps>) {
  const returnTitle = (title: titleType, header?: HeadersNumbers) => {
    switch (header) {
      case 1:
        return <RH.H1>{title}</RH.H1>
      case 2:
        return <RH.H2>{title}</RH.H2>
      case 3:
        return <RH.H3>{title}</RH.H3>
      case 4:
        return <RH.H4>{title}</RH.H4>
      case 5:
        return <RH.H5>{title}</RH.H5>
      case 6:
        return <RH.H6>{title}</RH.H6>
      default:
        return <RH.H1>{title}</RH.H1>
    }
  }

  // prettier-ignore
  return (  
    <div className={`${props.H == 1 ? 'mt-2' : ''} flex w-full flex-col flex-nowrap justify-center ${props.className ? props.className : ''}`}>
      <div className="contents text-center opacity-90 text-nowrap">
        {returnTitle(props.title, props.H)}
      </div>
      <hr
        className={`mx-auto w-[15%] opacity-80 ${props.H == 1 || !props.H ? 'my-3 mb-4 max-w-24 border-2 xl:my-2 lg:my-2' : 'my-4 lg:my-3'} lg:w-[20%] lg:opacity-90`}
      />
      <div className="w-full *:mx-auto sm:mt-2.5">{props.children}</div>
    </div>
  )
}
