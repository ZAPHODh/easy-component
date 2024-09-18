type CssFramework = 'styled-components' | 'css' | 'tailwind'
type Language = 'ts' | 'js'
type Test = 'jest'
interface Config {
    language: Language
    outputDir: string
    cssFramework: CssFramework
    test?: Test
    useStorybook: boolean
}
interface ComponentConfig {
    utilsPath?: string
    componentPath: string
    stylePath: string
    testPath: string
    storyPath?: string
    outputDir: string
    useStorybook: boolean
    language: Language
}
