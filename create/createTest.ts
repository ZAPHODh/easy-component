import fs from 'fs'
import path from 'path'
import { testWithJestContent } from '../src/templates/tests/jest'

export const createTest = (
    componentName: string,
    componentDir: any,
    params: boolean
) => {
    if (!params) return
    return fs.writeFileSync(
        path.join(componentDir, 'index.test.tsx'),
        testWithJestContent(componentName)
    )
}
