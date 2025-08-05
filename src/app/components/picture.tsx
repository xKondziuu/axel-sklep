import type { ComponentPropsWithoutRef } from 'react'
import Image from 'next/image'

type ImageProps = ComponentPropsWithoutRef<typeof Image>
type PictureProps = Omit<ImageProps, 'height' | 'width' | 'style'>

export default function Picture(props: PictureProps) {
  const options: Omit<PictureProps, 'alt' | 'src'> = { ...props }
  return <Image src={props.src} alt={props.alt} width={0} height={0} style={{ width: 'auto', height: '100%' }} {...options} />
}
