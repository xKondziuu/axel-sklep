import { useEffect, useState } from "react";

type output = number | undefined

export function useScroll(): output {
  const [scroll, setScroll] = useState<output>(undefined)

  useEffect(()=>{
    setScroll(window.scrollY)
  }, [])

  return scroll
}