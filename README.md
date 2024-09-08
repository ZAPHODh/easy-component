# WARNING

This package is under development and may have unresolved issues. Please be aware that it might not be fully stable yet.

# Snap Component

Snap component is a CLI tool to quicly create react's components with support to styles, storybook and tests. This package is thinked to your quaility of life while creating components

# Instalation

```bash
npm i -D snap-component
```

or

```bash
pnpm i -D snap-component
```

## Requirments

Before using snap component, you must set up a `snap-component.config.ts` file in the root of your project

```typescript
const config: Config = {
    testWithStyledTheme: true,
    typeStrict: true, // for now, it must be true.
    src: true,
    cssFramework: 'styled-components',
    useJest: true,
    useStorybook: true,
}

export default config
```

### Configuration

-   testWithStyledTheme: Imports the ThemeClient file in the testing file for theming with styled-components.
-   typeStrict: Defines whether TypeScript should be strict.
-   src: Indicates if the source code should be placed inside the src directory.
-   cssFramework: Choose the CSS framework (e.g., styled-components).
-   useJest: Enables or disables the use of Jest for unit testing.
-   useStorybook: Enables or disables the creation of Storybook files.

## Usage

Using npm

```bash
npx snap-component ~componentName~
```

Using pnpm

```bash
pnpm snap-component  ~componentName~
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

export type SnapComponentProps = {
  name: string,
}

export const SnapComponent = ({ name }: SnapComponentProps) => {
  return <Styled.Wrapper>{name}</Styled.Wrapper>
}
```

#### Storybook Component

```typescript

import type { Meta, StoryObj } from '@storybook/react'
import { SnapComponent } from '.'

const meta = {
  title: 'Component/SnapComponent',
  component: SnapComponent,
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
} satisfies Meta<typeof snap-component>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { name: 'preset-story' },
}

```

#### Test Component

```typescript

import { render } from '@testing-library/react'
import { snapComponent } from '.'

describe('snap-component', () => {
  it('should render the snap-component', () => {
    const { getByText } = render(<SnapComponent  name={'test'}/>)

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

If you would like to contribute to snap Component, feel free to fork the repository and submit pull requests. All contributions are welcome
