import { PropsWithChildren } from 'react'

export default function Item(props: PropsWithChildren) {
  return <section className="mx-6 my-2 block">{props.children}</section>
}