import fs from 'fs'
import path from 'path'

import { stylesWithStyledComponentContent } from '../src/templates/styles/withStyledComponent'
import { stylesCssContent } from '../src/templates/styles/withCss'

export const createStyle = (componentDir: any, params: CssFramework) => {
    if (params === 'styled-components')
        return fs.writeFileSync(
            path.join(componentDir, 'styles.ts'),
            stylesWithStyledComponentContent
        )

    return fs.writeFileSync(
        path.join(componentDir, 'styles.ts'),
        stylesCssContent
    )
}
