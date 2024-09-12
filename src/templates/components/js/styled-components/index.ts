const componentContent = (componentName: string) => `'use client'

import * as Styled from './styles'

export const ${componentName} = ({ name }) => {
  return <Styled.Wrapper>{name}</Styled.Wrapper>
}`

export default componentContent
