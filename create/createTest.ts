import fs from 'fs'
import path from 'path'
import { testWithThemeJestContent } from '../src/templates/tests/jestWithThemeComponent'
import { testContent } from '../src/templates/tests/jest'

export const createTest = (
    componentName: string,
    componentDir: any,
    params: boolean,
    withTheme: boolean
) => {
    if (!params) return
    if (!withTheme)
        return fs.writeFileSync(
            path.join(componentDir, 'index.test.tsx'),
            testContent(componentName)
        )

    return fs.writeFileSync(
        path.join(componentDir, 'index.test.tsx'),
        testWithThemeJestContent(componentName)
    )
}
