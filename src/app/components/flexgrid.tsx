import type { PropsWithChildren } from 'react'
import { Children, cloneElement, isValidElement } from 'react'
import FlexGridItem from './flexgrid/item'

function FlexGridComponent(props: PropsWithChildren<{ className?: string }>) {
  const renderItems = () => {
    if (props.children) {
      return Children.map(props.children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            ...child.props,
            className: props.className
          } as { className?: string })
        }
      })
    } else {
      return null
    }
  }

  return <div className="-mt-2 flex w-full flex-row flex-wrap">{renderItems()}</div>
}

type FlexGridObject = React.FC<PropsWithChildren<{ className?: string }>> & {
  Item: typeof FlexGridItem
}

const FlexGrid: FlexGridObject = Object.assign(FlexGridComponent, {
  Item: FlexGridItem
})

export default FlexGrid
