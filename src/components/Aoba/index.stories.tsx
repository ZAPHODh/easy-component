import type { Meta, StoryObj } from '@storybook/react'
import { Aoba } from '.'

const meta = {
  title: 'Components/Aoba',
  component: Aoba,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: ' description',
    },
  },
} satisfies Meta<typeof Aoba>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { name: 'preset-story' },
}
