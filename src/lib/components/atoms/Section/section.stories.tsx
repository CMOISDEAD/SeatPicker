import React, { useState } from 'react'
import { Section, SectionProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Section> = {
  title: 'Section',
  component: Section,
  argTypes: {
    seats: { control: 'number', defaultValue: 10 },
    cell: { control: 'object' },
    selected: { control: 'array', defaultValue: [] },
    reserved: { control: 'array', defaultValue: [] },
    setSelected: { action: 'clicked' },
  },
}
export default meta

const Template: StoryFn<typeof Section> = (args: SectionProps) => {
  const [selected, setSelected] = useState<string[]>(args.selected || [])

  return <Section {...args} selected={selected} setSelected={setSelected} />
}

export const SM = Template.bind({})
SM.args = {
  seats: 10,
  cell: {
    name: 'A',
    isStage: false,
    isEmpty: false,
  },
}

export const MD = Template.bind({})
MD.args = {
  seats: 20,
  cell: {
    name: 'A',
    isStage: false,
    isEmpty: false,
  },
}

export const LG = Template.bind({})
LG.args = {
  seats: 30,
  cell: {
    name: 'A',
    isStage: false,
    isEmpty: false,
  },
}

export const Stage = Template.bind({})
Stage.args = {
  seats: 10,
  cell: {
    name: 'A',
    isStage: true,
    isEmpty: false,
  },
}

export const Empty = Template.bind({})
Empty.args = {
  seats: 10,
  cell: {
    name: 'A',
    isStage: false,
    isEmpty: true,
  },
}
