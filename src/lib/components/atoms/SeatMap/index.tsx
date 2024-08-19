import { Cell } from '../../../types'
import { useSeatMapContext } from '../SeatMapContext'
import { Section } from '../Section'

export interface SeatMapProps {
  size: string
  cells: Cell[]
  reserved?: string[]
  className?: string
}

export const SeatMap = ({ size, cells, reserved = [], className }: SeatMapProps) => {
  const { selected, setSelected } = useSeatMapContext()
  const [, cols] = size.split('x').map(Number)

  return (
    <div className={className}>
      <div style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }} className="grid gap-2 h-fit">
        {cells.map((cell, index) => (
          <Section
            key={index}
            seats={30}
            cell={cell}
            reserved={reserved}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
    </div>
  )
}
