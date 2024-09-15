const testComponent = `import { fireEvent, render } from '@testing-library/react'
import { ToolTip } from '.'

describe('ToolTip', () => {
    it('should render the ToolTip', async () => {
        const { findByText } = render(
                <ToolTip text="test" position="left">
                    <span>test</span>
                </ToolTip>
        )

        const component = await findByText('test')
        expect(component).toBeInTheDocument()
    })

    it('should render the ToolTip when the mouse enters', async () => {
        const { findByText, getByText } = render(
                <ToolTip text="tooltip" position="left">
                    <span>test</span>
                </ToolTip>
        )

        const triggerElement = getByText('test')
        fireEvent.mouseEnter(triggerElement)

        const tooltip = await findByText('tooltip')
        expect(tooltip).toBeInTheDocument()
    })

    it('should unrender the ToolTip when the mouse leaves', async () => {
        const { getByText, queryByText } = render(
                <ToolTip text="tooltip" position="left">
                    <span>test</span>
                </ToolTip>
        )

        const triggerElement = getByText('test')

        fireEvent.mouseLeave(triggerElement)
        expect(queryByText('tooltip')).not.toBeInTheDocument()
    })
})`

export default testComponent
