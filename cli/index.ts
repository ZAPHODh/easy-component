import { Command } from 'commander'
import pkg from '../package.json'
import { setupOptions } from './options'

export const initializeCLI = () => {
    const program = new Command()
    program.name(pkg.name).description(pkg.description).version(pkg.version)

    setupOptions(program)

    return program
}
