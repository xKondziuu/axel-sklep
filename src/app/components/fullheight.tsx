import { PropsWithChildren } from 'react'

interface FullHeightProps {
  id?: string
}

export default function FullHeight(props: PropsWithChildren<FullHeightProps>) {
  return (
    <div className="flex h-[100vh] min-h-[40rem] flex-col overflow-visible" id={props.id}>
      {props.children}
    </div>
  )
}
