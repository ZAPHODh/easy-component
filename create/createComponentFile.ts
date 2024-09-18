import path from 'path'
import fs from 'fs'

import { importDefault } from '../utils/importDefault'

export const createComponentFiles = async (
    hasUtil: boolean,
    component: string,
    {
        componentPath,
        utilsPath,
        stylePath,
        testPath,
        storyPath,
        language,
        useStorybook,
        outputDir,
    }: ComponentConfig
) => {
    const outDir = path.join(process.cwd(), outputDir, component)

    if (fs.existsSync(outDir)) {
        console.log(`The component ${outDir} already exists`)
        return
    }

    try {
        fs.mkdirSync(outDir, { recursive: true })

        const Component = await importDefault(componentPath)
        const Style = await importDefault(stylePath)
        const Test = await importDefault(testPath)
        const Story = storyPath ? await importDefault(storyPath) : null
        const Utils = hasUtil ? await importDefault(utilsPath as string) : null

        const componentContent =
            typeof Component === 'string' ? Component : Component(component)
        fs.writeFileSync(
            path.join(outDir, `index.${language}x`),
            componentContent
        )
        const styleContent =
            typeof Style === 'string' ? Style : Style(component)
        fs.writeFileSync(path.join(outDir, `styles.${language}x`), styleContent)

        const testContent = typeof Test === 'string' ? Test : Test(component)
        fs.writeFileSync(
            path.join(outDir, `index.test.${language}x`),
            testContent
        )

        if (useStorybook && Story) {
            const storyContent =
                typeof Story === 'string' ? Story : Story(component)
            fs.writeFileSync(
                path.join(outDir, `index.stories.${language}x`),
                storyContent
            )
        }
        if (hasUtil) {
            fs.mkdirSync(`${outDir}/utils`, { recursive: true })
            const UtilsContent =
                typeof Utils === 'string' ? Utils : Utils(component)
            fs.writeFileSync(
                path.join(`${outDir}/utils`, `index.${language}`),
                UtilsContent
            )
        }
        console.log(`Component ${component} created successfully at ${outDir}`)
    } catch (error) {
        console.log(`Error writing files for component ${component}:`, error)
    }
}
