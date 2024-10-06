import type { PropsWithChildren } from 'react'

export type HeadersNumbers = 1 | 2 | 3 | 4 | 5 | 6

export function H1(props: PropsWithChildren) {
  return (
    <div className="font-verdana font-semibold tracking-normal opacity-90 lg:font-bold">
      <h1 className="text-4xl xl:text-[1.95rem] lg:text-[1.8rem] xs:text-[1.35rem]">{props.children as string}</h1>
    </div>
  )
}

export function H2(props: PropsWithChildren) {
  return (
    <div className="font-opensans font-bold tracking-wide opacity-90">
      <h2 className="text-3xl xl:text-[1.75rem] lg:text-[1.6rem] xs:text-[1.15rem]">{props.children as string}</h2>
    </div>
  )
}

export function H3(props: PropsWithChildren) {
  return (
    <div className="font-opensans font-bold tracking-wide opacity-90">
      <h3 className="text-[1.75rem] xl:text-[1.4rem] lg:text-[1.3rem] xs:text-[1.1rem]">{props.children as string}</h3>
    </div>
  )
}

export function H4(props: PropsWithChildren) {
  return (
    <div className="font-opensans font-bold tracking-wide opacity-90">
      <h3 className="text-2xl xl:text-[1.25rem] lg:text-[1.15rem] xs:text-[1.05rem]">{props.children as string}</h3>
    </div>
  )
}

export function H5(props: PropsWithChildren) {
  return (
    <div className="font-opensans font-semibold tracking-wide opacity-90">
      <h5 className="text-xl xl:text-[1.1rem] lg:text-[1.05rem] xs:text-[0.95rem]">{props.children as string}</h5>
    </div>
  )
}

export function H6(props: PropsWithChildren) {
  return (
    <div className="font-opensans font-semibold tracking-wide opacity-90">
      <h6 className="text-lg xl:text-[0.95rem] lg:text-[0.85rem] xs:text-[0.75rem]">{props.children as string}</h6>
    </div>
  )
}

export const Headers = { H1, H2, H3, H4, H5, H6 }
