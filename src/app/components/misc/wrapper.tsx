import { PropsWithChildren } from 'react'

export default function Wrapper(props: PropsWithChildren) {
  return <section className="mx-6 my-2 block w-max">{props.children}</section>
}
