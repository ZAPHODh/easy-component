const componentContent = (componentName: string) => `'use client'

import * as Styled from './styles'

export const ${componentName} = ({ name }) => {
  return <div className='wrapper'>{name}</div>
}`

export default componentContent
