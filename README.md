# Easy Component

Easy component is a CLI tool to quicly create react's components with support to styles, storybook and tests. This package is thinked to your quaility of life while creating components

# Instalation

```bash
npm i -D easy-component
```

or

```bash
pnpm i -D easy-component
```

## Requirments

Before using Easy component, you must set up a `easy-component.config.ts` file in the root of your project

```typescript
const config: Config = {
    typeStrict: true, // for now, it must be true.
    src: true,
    cssFramework: 'styled-components',
    useJest: true,
    useStorybook: true,
}

export default config
```

### Configuration

-   typeStrict: Defines whether TypeScript should be strict.
-   src: Indicates if the source code should be placed inside the src directory.
-   cssFramework: Choose the CSS framework (e.g., styled-components).
-   useJest: Enables or disables the use of Jest for unit testing.
-   useStorybook: Enables or disables the creation of Storybook files.

## Usage

Using npm

```bash
npx easy-component ~componentName~
```

Using pnpm

```bash
pnpm easy-component  ~componentName~
```

### Directory Structure Created

-   `src/components/<component-name>/`
    -   `index.tsx` - The main component file.
    -   `index.stories.tsx` - Storybook story file.
    -   `styles.ts` - Styles file.
    -   `index.test.tsx` - Unit tests file.

### Output Files Created

#### React Component

```typescript
'use client'

import * as Styled from './styles'

export type easy-componentProps = {
  name: string,
}

export const easy-component = ({ name }: easy-componentProps) => {
  return <Styled.Wrapper>{name}</Styled.Wrapper>
}
```

#### Storybook Component

```typescript

import type { Meta, StoryObj } from '@storybook/react'
import { easy-component } from '.'

const meta = {
  title: 'Component/easy-component',
  component: easy-component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'description',
    },
  },
} satisfies Meta<typeof easy-component>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { name: 'preset-story' },
}

```

#### Test Component

```typescript

import { render } from '@testing-library/react'
import { easy-component } from '.'

describe('easy-component', () => {
  it('should render the easy-component', () => {
    const { getByText } = render(<easy-component  name={'test'}/>)

    const component = getByText('test')

    expect(component).toBeInTheDocument()
  })
})

```

#### Styled Component

```typescript
'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css``}
`
```

## Contribution

If you would like to contribute to Easy Component, feel free to fork the repository and submit pull requests. All contributions are welcome

## License

This project is licensed under the MIT License. See the LICENSE file for details.
