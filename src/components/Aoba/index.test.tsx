import { render } from '@testing-library/react'
import { Aoba } from '.'

describe('Aoba', () => {
  it('should render the Aoba', () => {
    const { getByText } = render(<Aoba  name={'test'}/>)

    const component = getByText('test')

    expect(component).toBeInTheDocument()
  })
})
