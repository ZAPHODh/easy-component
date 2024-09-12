// #!/usr/bin/env node

import { initializeCLI } from './cli'

const program = initializeCLI()

program.parse(process.argv)
