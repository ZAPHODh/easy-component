'use client'

import * as Styled from './styles'

export type AobaProps = {
  name: string,
}

export const Aoba = ({ name }: AobaProps) => {
  return <Styled.Wrapper>{name}</Styled.Wrapper>
}