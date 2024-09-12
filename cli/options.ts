import { Command } from 'commander'
import { generateComponent } from './actions'

export function setupOptions(program: Command) {
    program
        .command('<component>')
        .description('create the component')
        .action(generateComponent)
}
