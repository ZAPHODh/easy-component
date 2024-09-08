import path from 'path'
import fs from 'fs'
const CONFIG_PATH = path.resolve(__dirname, 'easy-component.config.ts')

let config: Config = {
    typeStrict: true,
    src: true,
    cssFramework: 'styled-components',
    useJest: true,
    useStorybook: true,
}

if (fs.existsSync(CONFIG_PATH)) {
    config = require(CONFIG_PATH).default
}
export default config
