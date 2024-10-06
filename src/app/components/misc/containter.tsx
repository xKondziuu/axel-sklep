import { PropsWithChildren } from 'react'

export default function Container(props: PropsWithChildren<{ color: string; whitetext?: boolean }>) {
  return (
    <div
      className={`flex w-full justify-center ${props.whitetext ? 'text-white' : 'text-black'}`}
      style={{ backgroundColor: props.color }}
    >
      <div className="flex min-w-[320px] max-w-[100rem] flex-1 flex-grow flex-row flex-nowrap justify-center gap-px py-1 align-baseline lg:flex-wrap">
        {props.children}
      </div>
    </div>
  )
}
