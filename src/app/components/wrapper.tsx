import { PropsWithChildren } from 'react'

interface WrapperProps {
  id?: string
}

export default function Wrapper(props: PropsWithChildren<WrapperProps>) {
  return (
    <section className="mx-6 my-2 flex w-max flex-grow scroll-mt-[5.25rem] justify-center lg:scroll-mt-[4.25rem]" id={props.id}>
      {props.children}
    </section>
  )
}
