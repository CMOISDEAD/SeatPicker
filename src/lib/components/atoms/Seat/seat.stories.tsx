import React, { useState } from 'react'
import { Seat, SeatProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Seat> = {
  title: 'Seat',
  component: Seat,
  argTypes: {
    name: { control: 'text', required: true },
    selected: { control: 'array', defaultValue: [] },
    reserved: { control: 'array', defaultValue: [] },
    setSelected: { action: 'clicked' },
  },
}
export default meta

const Template: StoryFn<typeof Seat> = (args: SeatProps) => {
  const [selected, setSelected] = useState<string[]>(args.selected || [])

  return <Seat {...args} selected={selected} setSelected={setSelected} />
}

export const Free = Template.bind({})
Free.args = {
  name: 'A2',
}

export const Selected = Template.bind({})
Selected.args = {
  name: 'A2',
  selected: ['A2'],
}

export const Occupied = Template.bind({})
Occupied.args = {
  name: 'A2',
  reserved: ['A2'],
}
