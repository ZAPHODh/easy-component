const tooltipComponent = `import { useState } from 'react';
import dynamic from 'next/dynamic';
import * as Styled from './styles';

const StyledTooltip = dynamic(() =>
    import('./styles').then((styles) => styles.StyledTooltip)
);

export const ToolTip = ({ position, text, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <Styled.Wrapper
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <StyledTooltip $position={position}>{text}</StyledTooltip>
            )}
        </Styled.Wrapper>
    );
};`

export default tooltipComponent
