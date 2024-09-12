import path from 'path'
import fs from 'fs'

import { importDefault } from '../utils/importDefault'

export const createComponentFiles = async (
    component: string,
    {
        componentPath,
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

        fs.writeFileSync(
            path.join(outDir, `index.${language}x`),
            Component(component)
        )

        const styleContent =
            typeof Style === 'string' ? Style : Style(component)
        fs.writeFileSync(path.join(outDir, `styles.${language}x`), styleContent)

        fs.writeFileSync(
            path.join(outDir, `index.test.${language}x`),
            Test(component)
        )

        if (useStorybook && Story) {
            fs.writeFileSync(
                path.join(outDir, `index.stories.${language}x`),
                Story(component)
            )
        }

        console.log(`Component ${component} created successfully at ${outDir}`)
    } catch (error) {
        console.log(`Error writing files for component ${component}:`, error)
    }
}
