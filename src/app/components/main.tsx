import type { PropsWithChildren } from 'react'
import React from 'react'

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
        <main>{props.children}</main>
      )}
    </>
  )
}
