import { PropsWithChildren } from 'react'

export default function FullHeight(props: PropsWithChildren) {
  return <div className="flex h-[100vh] min-h-[40rem] flex-col overflow-visible">{props.children}</div>
}
