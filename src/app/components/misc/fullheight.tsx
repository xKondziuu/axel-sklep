import { PropsWithChildren } from 'react'

export default function FullHeight(props: PropsWithChildren) {
  return <div className="flex h-[100vh] flex-col overflow-hidden xl:landscape:h-auto">{props.children}</div>
}