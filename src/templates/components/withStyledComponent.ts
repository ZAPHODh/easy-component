export const componentWithStyledComponentContent = (
    componentName: string
): string => `'use client'

import * as Styled from './styles'

export type ${componentName}Props = {
  name: string,
}

export const ${componentName} = ({ name }: ${componentName}Props) => {
  return <Styled.Wrapper>{name}</Styled.Wrapper>
}`
