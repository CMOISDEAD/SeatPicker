import React, { createContext, useContext, useState } from 'react'

interface ContextInterface {
  selected: string[]
  setSelected: React.Dispatch<React.SetStateAction<string[]>>
}

const SeatMapContext = createContext<ContextInterface | null>(null)

export const useSeatMapContext = () => {
  const context = useContext(SeatMapContext)
  if (!context) {
    throw new Error('useSeatMapContext debe ser usado dentro de un SeatMapProvider')
  }
  return context
}
export const SeatMapProvider = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState<string[]>([])

  return <SeatMapContext.Provider value={{ selected, setSelected }}>{children}</SeatMapContext.Provider>
}
