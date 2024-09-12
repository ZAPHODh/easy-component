const storyContent = (
    componentName: string
) => `import { ${componentName} } from '.'
  
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
  }
  
  export default meta
  
  export const Default = {
    args: { name: 'preset-story' },
  }
  `
export default storyContent
