const storiesComponent = `
import { ToolTip } from '.';

const meta = {
    title: 'Component/ToolTip',
    component: ToolTip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        text: { control: 'text', description: 'Tooltip text' },
        position: { control: 'select', description: 'Tooltip position' },
    },
};

export default meta;

export const Default = {
    args: {
        text: 'story',
        children: <>storybook tooltip showcase</>,
        position: 'top',
    },
};
`

export default storiesComponent
