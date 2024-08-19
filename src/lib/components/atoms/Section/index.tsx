import { Cell } from '../../../types'
import { Seat } from '../Seat'

interface SectionProps {
  seats?: number
  cell: Cell
  selected: string[]
  reserved: string[]
  setSelected: (list: string[]) => void
}

export const Section = ({ seats = 10, cell, reserved = [], selected = [], setSelected }: SectionProps) => {
  const { name, isStage, isEmpty } = cell
  const color = isStage ? 'bg-yellow-500' : isEmpty ? 'bg-gray-300' : 'bg-white'

  return (
    <div className={`${color} border border-gray-300 p-3 flex justify-center items-center flex-wrap gap-2`}>
      {isStage
        ? 'Stage'
        : isEmpty
        ? 'Empty'
        : Array.from({ length: seats }, (_, i) => (
            <Seat key={i} selected={selected} reserved={reserved} setSelected={setSelected} name={`${name}${i + 1}`} />
          ))}
    </div>
  )
}
