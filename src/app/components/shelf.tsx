import { PropsWithChildren } from 'react'

export default function Shelf(props: PropsWithChildren) {
  return <div className="mx-3 my-4 flex w-full max-w-[100rem] flex-row flex-nowrap *:w-full lg:flex-wrap">{props.children}</div>
}
