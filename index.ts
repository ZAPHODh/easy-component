#!/usr/bin/env node

import config from './easy-component.config'

import fs from 'fs'
import path from 'path'
import { createComponent } from './create/createComponent'
import { createStory } from './create/createStory'
import { createStyle } from './create/createStyle'
import { createTest } from './create/createTest'

const componentName = process.argv[2]
const componentDir = path.join(
    process.cwd(),
    config.src ? 'src' : '',
    'components',
    componentName
)

if (!componentName) {
    console.log('Please, insert a component name')
    process.exit(1)
}

if (fs.existsSync(componentDir)) {
    console.log(`the component ${componentName} already exists`)
    process.exit(1)
}
fs.mkdirSync(componentDir, { recursive: true })

createComponent(componentName, config.cssFramework, componentDir)
createStory(componentName, componentDir, config.useStorybook)
createStyle(componentDir, config.cssFramework)
createTest(
    componentName,
    componentDir,
    config.useJest,
    config.testWithStyledTheme ? true : false
)

console.log(`Component ${componentName} created succefully!`)
