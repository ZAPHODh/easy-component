export const importDefault = async (modulePath: string) => {
    const module = await import(modulePath)
    return module.default
}
