export const testWithThemeJestContent = (
    componentName: string
): string => `import { render } from '@testing-library/react'
import { ${componentName} } from '.'
import { ThemeClient } from '../../theme/ThemeClient'

describe('${componentName}', () => {
  it('should render the ${componentName}', () => {
    const { getByText } = render(
      <ThemeClient>
        <${componentName}  name={'test'}/>
      </ThemeClient>
    )

    const component = getByText('test')

    expect(component).toBeInTheDocument()
  })
})
`
