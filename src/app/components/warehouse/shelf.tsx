import { PropsWithChildren } from 'react'

export default function Shelf(props: PropsWithChildren) {
  return (
    <div className="my-2 flex w-full max-w-[120rem] flex-1 flex-row flex-nowrap justify-center gap-px lg:flex-wrap">
      {props.children}
    </div>
  )
}
