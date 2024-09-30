import { PropsWithChildren } from 'react'

export default function Cabinet(props: PropsWithChildren<{ color: string; whitetext?: boolean }>) {
  return (
    <div
      className={`flex w-full justify-center ${props.whitetext ? 'text-white' : 'text-black'}`}
      style={{ backgroundColor: props.color }}
    >
      {props.children}
    </div>
  )
}
