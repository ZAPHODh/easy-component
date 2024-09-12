import { createGenericComponent } from '../create/createGenericComponent'
import { capitalize } from '../utils/capitalize'
import { components } from '../utils/componentsArray'

export const generateComponent = (component: string) => {
    const commonComponent = components.includes(component.toLowerCase())
    if (!commonComponent) return createGenericComponent(capitalize(component))
    return console.log(component)
}
