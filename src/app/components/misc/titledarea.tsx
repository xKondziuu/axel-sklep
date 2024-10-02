import { PropsWithChildren } from 'react'

interface TitledAreaProps {
  title: string
  big?: boolean
}

export default function TitledArea(props: PropsWithChildren<TitledAreaProps>) {
  return (
    <div className={`${props.big ? 'mt-2' : ''} flex flex-col flex-nowrap justify-center`}>
      <div className="contents text-center opacity-90">
        {props.big ? (
          <div className="font-verdana text-center font-semibold tracking-normal opacity-90 lg:font-bold">
            <h1 className="mx-auto text-4xl xl:text-[1.95rem] lg:text-[1.8rem] xs:text-[1.35rem]">{props.title}</h1>
          </div>
        ) : (
          <div className="text-center font-opensans font-bold tracking-wide opacity-90">
            <h1 className="mx-auto text-3xl xl:text-[1.75rem] lg:text-[1.6rem] xs:text-[1.15rem]">{props.title}</h1>
          </div>
        )}
      </div>
      <hr
        className={`mx-auto w-[15%] opacity-80 ${props.big ? 'my-3 border-2 xl:my-2 lg:my-2' : 'my-4 lg:my-3'} lg:w-[20%] lg:opacity-90`}
      />
      <div className="mx-auto max-w-[46rem]">{props.children}</div>
    </div>
  )
}
