import type { PropsWithChildren } from 'react'

type MainProps = {
  adjusted?: boolean
}

// prettier-ignore
export default function Main(props: PropsWithChildren<MainProps>) {
  return (
    <>
      {props.adjusted ? (
        <main className="mt-14">{props.children}</main>
      ) : (
        <main className="lg:mt-14">{props.children}</main>
      )}
    </>
  )
}
