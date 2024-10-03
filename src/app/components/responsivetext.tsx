import type { PropsWithChildren } from 'react'

interface ResponsiveTextProps {
  align?: 'left' | 'center' | 'right' | 'justify'
  className?: string
}

// prettier-ignore
export default function ResponsiveText(props: PropsWithChildren<ResponsiveTextProps>) {
  return (
    <div className={`${props.align == 'left' ? 'text-left' : props.align == 'center' ? 'text-center' : props.align == 'right' ? 'text-right' : props.align == 'justify' ? 'text-justify' : ''} lg:text-justify xs:text-left`}>
      <span className={ props.className ? props.className : 'text-[1.05rem] tracking-normal xl:text-[0.97rem] lg:text-[0.97rem] xs:text-[0.85rem]'}>
        {props.children as string}
      </span>
    </div>
  )
}
