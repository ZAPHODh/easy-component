import { Command } from 'commander'
import { generateComponent } from './actions'

export function setupOptions(program: Command) {
    program
        .command('snap-component <component>')
        .description('create the component')
        .action(generateComponent)
}
