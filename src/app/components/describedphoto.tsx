import type { PropsWithChildren } from 'react'
import Picture from './misc/picture'
import ResponsiveText from './responsivetext'

interface DescribedPhotoProps {
  src: string
  alt: string
  title?: string
}

export default function DescribedPhoto(props: PropsWithChildren<DescribedPhotoProps>) {
  return (
    <div className="flex w-full flex-row flex-nowrap items-center justify-center lg:flex-wrap +lg:gap-6 +lg:p-2">
      <div className="h-40 min-w-max p-4 *:h-full *:rounded-md lg:p-1 xs:h-[39vw] xs:min-h-[124px]">
        <Picture src={props.src} alt={props.alt} loading="lazy" />
      </div>
      <div className="flex h-full max-w-[46rem] flex-grow flex-col flex-nowrap gap-3 py-6 lg:gap-px lg:py-3">
        {props.title && (
          <div className="font-opensans font-bold tracking-wide opacity-90">
            <h2 className="text-2xl xl:text-[1.25rem] lg:text-[1.15rem] xs:text-[1.05rem]">{props.title}</h2>
          </div>
        )}
        <div className="mx-auto contents">
          <ResponsiveText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur velit dapibus urna tincidunt, quis luctus
            mauris euismod. Nunc vestibulum interdum dolor id maximus. In nec erat dolor. Nullam risus augue, auctor et rhoncus
            lacinia eu consequat.
          </ResponsiveText>
        </div>
      </div>
    </div>
  )
}
