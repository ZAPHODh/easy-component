const testContent = (
    componentName: string
): string => `import { render } from '@testing-library/react'
  import { ${componentName} } from '.'
  
  describe('${componentName}', () => {
    it('should render the ${componentName}', () => {
      const { getByText } = render(<${componentName} name='test' />)
  
      const component = getByText('test')
  
      expect(component).toBeInTheDocument()
    })
  })
  `
export default testContent
