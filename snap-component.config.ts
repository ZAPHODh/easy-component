import path from 'path'
import fs from 'fs'

export const loadConfig = (): Config => {
    const userRoot = require.main
        ? path.dirname(require.main.filename)
        : process.cwd()
    const CONFIG_PATH = path.resolve(userRoot, 'snap-component.config.json')

    let config: Config = {
        testWithStyledTheme: false,
        typeStrict: true,
        src: true,
        cssFramework: 'CSS',
        useJest: false,
        useStorybook: true,
    }

    try {
        if (fs.existsSync(CONFIG_PATH)) {
            config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'))
        }
    } catch {
        console.error(`Error loading config. Using default config.`)
    }

    return config
}
