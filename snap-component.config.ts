import path from 'path'
import fs from 'fs'

const CONFIG_PATH = path.resolve(process.cwd(), 'snap-component.config.json')

let config: Config = {
    testWithStyledTheme: true,
    typeStrict: true,
    src: true,
    cssFramework: 'styled-components',
    useJest: true,
    useStorybook: true,
}

try {
    if (fs.existsSync(CONFIG_PATH)) {
        const configFileContent = fs.readFileSync(CONFIG_PATH, 'utf-8')
        config = JSON.parse(configFileContent)
    }
} catch {
    console.error(
        `Error reading or parsing config file at ${CONFIG_PATH}:loading default configuration`
    )
}

export default config
