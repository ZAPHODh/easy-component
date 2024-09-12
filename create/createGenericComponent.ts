import { loadConfig } from '../snap-component.config'
import fs from 'fs'
import path from 'path'
import { importDefault } from '../utils/importDefault'

export const createGenericComponent = async (component: string) => {
    const { cssFramework, useStorybook, outputDir, language, test } =
        loadConfig()
    const outDir = path.join(process.cwd(), outputDir, component)

    if (fs.existsSync(outDir)) {
        console.log(`The component ${outDir} already exists`)
        return
    }

    try {
        fs.mkdirSync(outDir, { recursive: true })
    } catch (error) {
        console.error(`Error creating directory ${outDir}:`, error)
        return
    }

    try {
        const componentPath = `../src/templates/components/${language}/${cssFramework}`
        const stylePath = `../src/templates/styles/${cssFramework}/${language}`
        const testPath = `../src/templates/tests/${language}/${test}`
        let storyPath = ''
        if (useStorybook) storyPath = `../src/templates/stories/${language}`

        const Component = await importDefault(componentPath)
        const Style = await importDefault(stylePath)
        const Test = await importDefault(testPath)
        const Story = storyPath !== '' ? await importDefault(storyPath) : null

        fs.writeFileSync(
            path.join(outDir, `index.${language}x`),
            Component(component)
        )

        // Handle Style as a string or function
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
        console.error(`Error writing files for component ${component}:`, error)
    }
}
