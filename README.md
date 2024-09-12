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

## Requeriments

Before using snap component, you must set up a `snap-component.config.json` file in the root of your project

```json
{
    "language": "ts",
    "outputDir": "src/components",
    "cssFramework": "styled-components",
    "test": "jest",
    "useStorybook": true
}
```

### Configuration

-   language: Choose the language (e.g,'ts','js').
-   outputDir: Defines the directory where the component's generated source code and associated files will be placed after creation.(default :src/components)
-   cssFramework: Choose the CSS framework (e.g., styled-components,css).
-   test: framework for test. for now, only jest is availible
-   useStorybook: Enables or disables the creation of Storybook files.

## Usage

First of all, add the script to your package.json

```json
{ "easy-component": "easy-component" }
```

Using npm

```bash
npm run snap-component ~componentName~
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

### Output Generic Files Created

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

If you would like to contribute to Snap Component, feel free to fork the repository and submit pull requests. All contributions are welcome

## LICENSE

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License. See the LICENSE file for details.
