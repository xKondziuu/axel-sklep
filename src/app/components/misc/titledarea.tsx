import { PropsWithChildren } from 'react'

export default function TitledArea(props: PropsWithChildren<{ title: string }>) {
  return (
    <div className="flex flex-col flex-nowrap justify-center">
      <div className="text-center font-opensans font-bold tracking-wide opacity-90">
        <h1 className="mx-auto text-3xl xl:text-[1.75rem] lg:text-[1.6rem] xs:text-[1.15rem]">{props.title}</h1>
      </div>
      <hr className="mx-auto my-4 w-[15%] opacity-80 lg:my-3 lg:w-[20%] lg:opacity-90" />
      <div className="mx-auto max-w-[46rem]">{props.children}</div>
    </div>
  )
}
