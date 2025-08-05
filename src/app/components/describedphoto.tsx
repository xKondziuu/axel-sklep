import type { PropsWithChildren, ReactNode } from 'react'
import Picture from './picture'
import { H4 } from './responsiveheaders'
import ResponsiveText from './responsivetext'

interface DescribedPhotoProps {
  src: string
  alt: string
  title?: ReactNode
}

export default function DescribedPhoto(props: PropsWithChildren<DescribedPhotoProps>) {
  return (
    <div className="flex w-full flex-row flex-nowrap items-center justify-center xl:mx-auto lg:mb-3 lg:flex-wrap +lg:gap-4 +lg:p-2 +lg:pt-1 +lg:xl:w-[90%]">
      <div className="h-40 min-w-max p-4 *:h-full *:rounded-md xl:pl-1 lg:p-1 xs:h-[39vw] xs:min-h-[124px]">
        <Picture src={props.src} alt={props.alt} loading="lazy" />
      </div>
      <div className="flex h-full max-w-[46rem] flex-grow flex-col flex-nowrap gap-3 py-6 lg:gap-px lg:py-3">
        {props.title && <H4>{props.title}</H4>}
        <div className="mx-auto contents">
          <ResponsiveText>{props.children}</ResponsiveText>
        </div>
      </div>
    </div>
  )
}
