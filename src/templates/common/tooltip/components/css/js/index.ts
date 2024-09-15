const cssComponent = `
import { useState } from 'react';
import dynamic from 'next/dynamic';
import './styles.css';  // Importa os estilos CSS

export const ToolTip = ({ position, text, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="wrapper"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div className=\`tooltip \${position}\`>{text}</div>
            )}
        </div>
    );
};
`

export default cssComponent
