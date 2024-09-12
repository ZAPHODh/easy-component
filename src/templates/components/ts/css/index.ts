const componentContent = (componentName: string): string => `'use client'

import * as Styled from './styles'

export type ${componentName}Props = {
  name: string,
}

export const ${componentName} = ({ name }: ${componentName}Props) => {
  return <div className='wrapper'>{name}</div>
}`
export default componentContent
