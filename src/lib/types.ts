export type Position = 'north' | 'south'

export type Size = '2x2' | '3x3'

export interface Cell {
  name: string
  row: number
  column: number
  isStage?: boolean
  isEmpty?: boolean
}

export interface Matrix {
  cells: Cell[]
  size: Size
}
