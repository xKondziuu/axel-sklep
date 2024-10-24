interface GalleryImageProps {
  src: string
}

export default function GalleryImage({ src }: GalleryImageProps) {
  return (
    <div className="group size-full h-[12.25rem] p-2">
      <div
        className="size-full cursor-pointer overflow-hidden rounded-xl bg-cover bg-center p-2 transition-transform group-hover:scale-[1.07]"
        style={{ backgroundImage: `url("${src}")` }}
      ></div>
    </div>
  )
}
