import type { PropsWithChildren } from 'react'

export default function FlexGridItem(props: PropsWithChildren<{ className?: string }>) {
  return <div className={`*:size-full ${props.className}`}>{props.children}</div>
}
