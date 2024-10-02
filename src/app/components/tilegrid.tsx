import type { PropsWithChildren } from 'react'
import TileGridTile from './tilegrid/tile'

function TileGridComponent(props: PropsWithChildren) {
  return <div className="flex">{props.children}</div>
}

type TileGridObject = React.FC<PropsWithChildren> & {
  Tile: typeof TileGridTile
}

export const TileGrid: TileGridObject = Object.assign(TileGridComponent, {
  Tile: TileGridTile
})
