import { useEffect, useState } from 'react'

export interface SeatProps {
  name: string
  selected: string[]
  reserved: string[]
  setSelected: (list: string[]) => void
}

export const Seat = ({ name, reserved = [], selected = [], setSelected }: SeatProps) => {
  const [state, setState] = useState<'occupied' | 'selected' | 'free'>('free')
  const color = state === 'occupied' ? 'bg-gray-400' : state === 'selected' ? 'bg-sky-500' : 'bg-sky-300'
  const disabled = state === 'occupied'

  useEffect(() => {
    const isOccupied = reserved.some((seat) => seat === name)
    if (isOccupied) return setState('occupied')
    const isSelected = selected.some((seat) => seat === name)
    if (isSelected) return setState('selected')
    setState('free')
  }, [selected, name, reserved])

  const handleSelect = () => {
    if (state === 'occupied') return
    if (state === 'free') {
      setSelected([...selected, name])
    }
    if (state === 'selected') {
      const newList = [...selected].filter((seat) => seat !== name)
      setSelected(newList)
    }
  }

  return (
    <button
      disabled={disabled}
      onClick={handleSelect}
      className={`${color} text-xs md:text-md w-5 h-5 md:w-9 md:h-9 text-white text-center`}
    >
      {name}
    </button>
  )
}
