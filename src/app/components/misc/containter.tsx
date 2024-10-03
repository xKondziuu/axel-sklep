import { PropsWithChildren } from 'react'

export default function Container(props: PropsWithChildren<{ color: string; whitetext?: boolean }>) {
  return (
    <div
      className={`flex w-full min-w-[320px] max-w-[120rem] flex-1 flex-row flex-nowrap justify-center gap-px py-1 lg:flex-wrap ${props.whitetext ? 'text-white' : 'text-black'}`}
      style={{ backgroundColor: props.color }}
    >
      {props.children}
    </div>
  )
}
