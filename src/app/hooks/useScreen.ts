import { useEffect, useState } from "react";

type outputPart = number | undefined
type outputArray = [outputPart, outputPart]

export function useScreen(): outputArray {
  const [width, setWidth] = useState<outputPart>(undefined)
  const [height, setHeight] = useState<outputPart>(undefined)

  useEffect(()=>{
    setWidth(window.screen.width)
    setHeight(window.screen.height)
  }, [])

  return [width, height]
}