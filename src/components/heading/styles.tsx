
import styled, { css } from 'styled-components'

export const Title = styled.h1<{ $padding?: string }>`
  ${({ theme, $padding }) => css`
      color: ${theme.colors.primary};
      font-weight: 700;
      padding: ${$padding ? $padding : 0};
  `}
`;
