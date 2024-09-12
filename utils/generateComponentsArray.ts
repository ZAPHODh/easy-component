import { readdirSync, writeFileSync } from 'fs'
import { join } from 'path'

const commonPath = join(__dirname, '../', 'src/', 'templates', 'common')

const components = readdirSync(commonPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

const fileContent = `
export const components: string[] = ${JSON.stringify(components, null, 2)};
`

const outputPath = join(__dirname, 'componentsArray.ts')

writeFileSync(outputPath, fileContent)
