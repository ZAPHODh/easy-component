export const capitalize = (componentName: string): string => {
    const lowerCased = componentName.toLowerCase()
    return lowerCased.charAt(0).toUpperCase() + lowerCased.slice(1)
}
