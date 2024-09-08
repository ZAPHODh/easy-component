import fs from 'fs'
import path from 'path'
import { componentContent } from '../src/templates/components/withcCssComponent'

import { componentWithStyledComponentContent } from '../src/templates/components/withStyledComponent'

export const createComponent = (
    componentName: string,
    params: CssFramework,
    componentDir: any
) => {
    if (params == 'CSS')
        return fs.writeFileSync(
            path.join(componentDir, 'index.tsx'),
            componentContent(componentName)
        )
    return fs.writeFileSync(
        path.join(componentDir, 'index.tsx'),
        componentWithStyledComponentContent(componentName)
    )
}
