import fs from 'fs'
import findUp from 'findup-sync'
export const loadConfig = (): Config => {
    const CONFIG_PATH = findUp('snap-component.config.json')

    let config: Config = {
        language: 'ts',
        outputDir: 'src/components',
        cssFramework: 'styled-components',
        test: 'jest',
        useStorybook: true,
    }

    if (CONFIG_PATH && fs.existsSync(CONFIG_PATH)) {
        try {
            config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'))
        } catch {
            console.error(`Error loading config. Using default config.`)
        }
    } else {
        console.log(
            'No snap-component.config.json file found. Using default config.'
        )
    }

    return config
}
