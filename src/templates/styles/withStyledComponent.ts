export const stylesWithStyledComponentContent = `'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div\`
  \${({ theme }) => css\`\`}
\`
`
