import { loadConfig } from '../snap-component.config'
import { hasUtilsFolder } from '../utils/hasUtilsFolder'
import { createComponentFiles } from './createComponentFile'

export const createEspecificComponent = async (component: string) => {
    const { cssFramework, useStorybook, language, test, outputDir } =
        loadConfig()
    const componentPath = `../src/templates/common/${component.toLowerCase()}/components/${cssFramework}/${language}`
    const stylePath = `../src/templates/common/${component.toLowerCase()}/styles/${cssFramework}${cssFramework !== 'css' ? `/${language}` : ''}`
    const testPath = `../src/templates/common/${component.toLowerCase()}/tests/${test}/${language}`
    const storyPath = useStorybook
        ? `../src/templates/common/${component.toLowerCase()}/stories/${language}`
        : undefined
    const utilsPath =
        cssFramework !== 'css'
            ? `../src/templates/common/${component.toLowerCase()}/utils/${cssFramework}/${language}`
            : undefined
    const hasUtil =
        hasUtilsFolder.includes(component.toLowerCase()) &&
        cssFramework !== 'css'

    await createComponentFiles(hasUtil, component, {
        componentPath,
        utilsPath,
        stylePath,
        testPath,
        storyPath,
        outputDir,
        language,
        useStorybook,
    })
}
