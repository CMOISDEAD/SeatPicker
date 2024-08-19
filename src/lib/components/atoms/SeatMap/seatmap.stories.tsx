import React from 'react'
import { SeatMap, SeatMapProps } from '.'
import { Meta, StoryFn } from '@storybook/react'
import { SeatMapProvider } from '../SeatMapContext'
import { createMatrix3x3, createMatrix2x2 } from '../../../utils/generator'
import { Matrix } from '../../../types'

type Extra = {
  row: number
  column: number
  orientation: 'north' | 'south'
}

const meta: Meta<SeatMapProps & Extra> = {
  title: 'SeatMap',
  component: SeatMap,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['2x2', '3x3'],
    },
    row: {
      control: {
        type: 'number',
      },
      description: 'Number of rows for the matrix',
      if: {
        arg: 'size',
        eq: '3x3',
      },
    },
    column: {
      control: {
        type: 'number',
      },
      description: 'Number of columns for the matrix',
      if: {
        arg: 'size',
        eq: '3x3',
      },
    },
    orientation: {
      control: { type: 'select' },
      options: ['north', 'south'],
      description: 'Orientation for the matrix',
      if: {
        arg: 'size',
        eq: '2x2',
      },
    },
    reserved: { control: 'array' },
    cells: { table: { disable: true } },
    className: { table: { disable: true } },
  },
}
export default meta

// @ts-expect-error - Story template has incorrect type
const Template: StoryFn<typeof SeatMap> = (args: SeatMapProps & Extra) => {
  const data: Matrix =
    args.size === '3x3'
      ? createMatrix3x3({ row: args.row, column: args.column }, [])
      : createMatrix2x2(args.orientation || 'north')

  return (
    <SeatMapProvider>
      <SeatMap {...data} reserved={args.reserved} className={args.className} />
    </SeatMapProvider>
  )
}

export const MD = Template.bind({})
MD.args = {
  size: '3x3',
  row: 1,
  column: 1,
  reserved: [],
}

export const SM = Template.bind({})
SM.args = {
  size: '2x2',
  orientation: 'north',
  reserved: [],
}
