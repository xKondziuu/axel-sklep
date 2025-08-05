import { CSSProperties, PropsWithChildren } from 'react'

interface ContainerProps {
  background: string
  whitetext?: boolean
}

export default function Container(props: PropsWithChildren<ContainerProps>) {
  const background: string = props.background
  let bgImage: boolean = false
  let style: CSSProperties

  if (background.startsWith('url')) {
    bgImage = true
    style = {
      backgroundImage: background
    }
  } else {
    bgImage = false
    style = {
      backgroundColor: background
    }
  }

  return (
    <div className={`w-full bg-cover bg-center ${props.whitetext ? 'text-white' : 'text-black'}`} style={{ ...style }}>
      <div className={`flex size-full justify-center ${bgImage ? 'bg-[#00000060] drop-shadow-sm backdrop-blur-md' : ''}`}>
        <div className="flex min-w-[320px] max-w-[100rem] flex-1 flex-grow flex-row flex-nowrap justify-center gap-px py-1 align-baseline lg:flex-wrap">
          {props.children}
        </div>
      </div>
    </div>
  )
}
