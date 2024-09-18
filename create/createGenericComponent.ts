import { loadConfig } from '../snap-component.config'
import { createComponentFiles } from './createComponentFile'

export const createGenericComponent = async (component: string) => {
    const { cssFramework, useStorybook, language, test, outputDir } =
        loadConfig()
    const componentPath = `../src/templates/components/${language}/${cssFramework}`
    const stylePath = `../src/templates/styles/${cssFramework}/${language}`
    const testPath = `../src/templates/tests/${language}/${test}`
    const storyPath = useStorybook
        ? `../src/templates/stories/${language}`
        : undefined

    await createComponentFiles(false, component, {
        componentPath,
        stylePath,
        testPath,
        storyPath,
        language,
        outputDir,
        useStorybook,
    })
}
