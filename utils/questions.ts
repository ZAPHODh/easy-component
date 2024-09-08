// import path from 'path'
// import fs from 'fs'
// import { Config } from '../easy-component.config'

// const CONFIG_PATH = path.resolve(__dirname, 'easy-component.config.ts')

// let config: Config = {
//     typeStrict: true,
//     src: true,
//     cssFramework: 'styled-components',
//     useJest: true,
//     useStorybook: true,
// }

// if (fs.existsSync(CONFIG_PATH)) {
//     config = require(CONFIG_PATH).default
// }
// export default config
// export const questions = [
//     {
//         type: 'list',
//         name: 'cssFramework',
//         message: 'What type of css framework are you using?',
//         choices: ['styled-components', 'CSS'],
//         default: config.cssFramework || 'styled-components',
//     },
//     {
//         type: 'confirm',
//         name: 'jest',
//         message: 'Include Jest?',
//         default: config.useJest !== undefined ? config.useJest : true,
//     },
//     {
//         type: 'confirm',
//         name: 'storybook',
//         message: 'Incluide Storybook?',
//         default: config.useStorybook !== undefined ? config.useStorybook : true,
//     },
//     {
//         type: 'confirm',
//         name: 'srcFolder',
//         message: 'are you using src folder?',
//         default: config.src !== undefined ? config.src : true,
//     },
// ]
