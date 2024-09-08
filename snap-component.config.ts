import path from 'path'
import fs from 'fs'
import { Config } from './types'

const CONFIG_PATH = path.resolve(__dirname, 'snap-component.config.json')

let config: Config = {
    testWithStyledTheme: true,
    typeStrict: true,
    src: true,
    cssFramework: 'styled-components',
    useJest: true,
    useStorybook: true,
}

if (fs.existsSync(CONFIG_PATH)) {
    config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'))
}

export default config
