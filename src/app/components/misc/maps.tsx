const APIKEY: string = 'AIzaSyAvmM_meHdhVxCF_XqjkLXJfG-W1CcII2Y'

interface GoogleMapsProps {
  query: string
}

export default function GoogleMaps(props: GoogleMapsProps) {
  return (
    <iframe
      className="size-full rounded-[0.2rem] border-none"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=${APIKEY}&maptype=satellite&zoom=17&q=${props.query}`}
    />
  )
}
