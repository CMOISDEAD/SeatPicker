import { Cell, Matrix, Position } from '../types'

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

type ICell = {
  row: number
  column: number
}

export const createMatrix3x3 = (stage: ICell, emptyCells?: Omit<Cell, 'name'>[]): Matrix => {
  const cells: Cell[] = []
  const totalCells = 9

  for (let i = 0; i < totalCells; i++) {
    const row = Math.floor(i / 3)
    const column = i % 3
    const cell: Cell = { name: letters[i], row, column }

    if (stage.row === row && stage.column === column) {
      cell.isStage = true
    }

    if (emptyCells && emptyCells.some((em) => em.row === row && em.column === column)) {
      cell.isEmpty = true
    }

    cells.push(cell)
  }

  return { size: '3x3', cells }
}

export const createMatrix2x2 = (position: Position): Matrix => {
  const cells: Cell[] = []

  for (let row = 0; row < 2; row++) {
    for (let col = 0; col < 2; col++) {
      cells.push({
        name: letters[col],
        row,
        column: col,
        isStage: (position === 'north' && row === 0) || (position === 'south' && row === 1),
      })
    }
  }

  return { size: '2x2', cells }
}
