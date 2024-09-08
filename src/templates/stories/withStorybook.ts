export const storyContent = (
    componentName: string
): string => `import type { Meta, StoryObj } from '@storybook/react'
import { ${componentName} } from '.'

const meta = {
  title: 'Components/${componentName}',
  component: ${componentName},
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
} satisfies Meta<typeof ${componentName}>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { name: 'preset-story' },
}
`
