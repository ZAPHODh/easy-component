import fs from 'fs'
import path from 'path'
import { storyContent } from '../src/templates/stories/withStorybook'

export const createStory = (
    componentName: string,
    componentDir: any,
    params: boolean
) => {
    if (!params) return

    return fs.writeFileSync(
        path.join(componentDir, 'index.stories.tsx'),
        storyContent(componentName)
    )
}
