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
